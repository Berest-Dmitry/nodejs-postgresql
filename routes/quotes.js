const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const quotes_page = require('../public/javascripts/quotes-page');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
  try {
    //res.json(await quotes.getMultiple(req.query.page));

    // create response with html
    let quote_list = await quotes.getMultiple(req.query.page);
    if(!quote_list){
      res.write('<p><strong>No quotes found! </strong></p>');
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.write('<div style="margin: 0 auto; width: 750px; background-color: #11AA0F; font-color: white;">');
      res.write('<table><tr><th>Цитата </th><th>Автор</th></tr>');
      quote_list.data.forEach(element => {
        res.write('<tr><td>' + element.quote + '</td><td>' + element.author + '</td></tr>');
      });
      res.write('</table>');
      res.write('</div>');

      // adding input form
      res.write(createQuoteForm());
      res.end();
    }
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

function createQuoteForm(){
  let parent = '<div style="margin: 10 auto; width: fit-content;">'
  let form = '<form>';
  let inputQuote = '<div><label for="quote">Текст цитаты:<label/><br/><textarea id="quote" placeholder="Введите цитату..."></textarea></div>';
  let inputAuthor = '<div><label for="author">Автор цитаты:<label/><br/><input id="author" placeholder="Введите имя автора..."/></div>';
  let submitBtn = '<div><button type="button" onclick="' + quotes_page.postQuote() +'"> Сохранить цитату</button></div>'
  form += inputAuthor + inputQuote + submitBtn + '</form>';
  parent += form + '</div>';
  return parent;
}


/* POST quotes */
router.post('/', async function(req, res, next) {
  try {
    res.json(await quotes.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    next(err);
  }
});


module.exports = router;
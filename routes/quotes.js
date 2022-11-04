const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

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
      res.end();
    }
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

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
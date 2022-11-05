var http = require("http");
//var jquery = require('jquery');
var document = 

function postQuote(){
    let sendData = {
       author: document.getElementById('author'),
       quote:  document.getElementById('quote')
    }
    var URLParams = {
      host: 'localhost',
      port: '3000',
      method: 'POST'
    }
  
    var request = http.request(URLParams, function(res){
      if(res){
        alert("Сохранение цитаты прошло успешно!");
      }
    });
  
    request.write(sendData);
    request.end();
  }

  module.exports = {postQuote}
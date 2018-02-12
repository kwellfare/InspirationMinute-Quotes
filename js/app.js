 

$(document).ready(function() {
var url = "https://random-quote-generator.herokuapp.com/api/quotes/random";
    //sets variable to the url source
    var quote = $("#quote");
    //sets variable to id
   $("button").click(function(){  
       event.preventDefault();
 
       $.get(url, function(data) {
           
           quote.text(data.quote); 
           //retrieves the quote and appends it to the quote id
           var author = $("#author");
           //sets variable to id
           author.text(data.author);
           //retrieves the quote and appends it to the quote id
           
	           
      
  });
  });
});
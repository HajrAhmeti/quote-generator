$(window).keypress(function(e) {
    if (e.which === 32) {
      $("#quote").addClass("reset");
      $("#quote").removeClass("exe");
      $("#writer").toggleClass("fade");
      setTimeout(function(){ 
        $.ajax({
          crossOrigin: true,
          url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=hajra",
          dataType:"jsonp"
      });
      }, 1000); 
    }
    
});
function hajra(json){
  var quote = json[0];
  $("#quote").html(quote.content)
  $("#writer").html(quote.title)
  $("#quote").addClass("exe");
    $("#quote").removeClass("reset");
    $("#writer").toggleClass("fade");
}
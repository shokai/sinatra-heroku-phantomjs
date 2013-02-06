var url =  phantom.args[0] || 'http://shokai.org';

page = new WebPage();

page.open(url, function(stat){
  if(!stat){
    console.log("error");
    phantom.exit();
  }
  setTimeout(function(){
    if(!page.injectJs("jquery-1.9.0.min.js")){
      console.log("inject jQuery error");
      phantom.exit();
    }
    var rects = page.evaluate(function(){
      var result = [];
      $.each($("a"), function(index, i){
        result.push({
          width: i.offsetWidth,
          height: i.offsetHeight,
          left: i.offsetLeft,
          top: i.offsetTop,
          href: i.href
        });
      });
      return result;
    });
    console.log("links="+JSON.stringify(rects));
    phantom.exit();
  }, 500);
});

$(function(){
    $('#btn_links').click(function(){
      var url = $('#url').val();
      $.getJSON(links_api+'?url='+url, function(res){
        console.log(res);
        var ul = $('#results');
        ul.html('');
        for(var i = 0; i < res.length; i++){
          var li = $('<li>').html( JSON.stringify(res[i]) );
          ul.append(li);
        }
      });
    });
});

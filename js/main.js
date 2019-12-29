
$(function(){
  $('.section-inner')
     .on('mouseover',function(){
       $('.section-inner').stop(true).animate({
         backgroundColor:'#ae5e9b'
       },
       500
     );
  })
     .on('mouseout',function(){
       $('.section-inner').stop(true).animate({
         backgroundColor:'#3498db'
       },
       500
     );
    });
  });

var Simon = require('./../js/simon.js').simonModule;


$(document).ready(function(){
  $('.play').click(function(){
    $('.intro').hide();
    simon = new Simon();
    $('.maingame').show();
    simon.prepArr();
  });
  $('.go').click(function(){
    simon.demoTurn()
    // .delay(500).queue(function(next){
    //   console.log('test front');
    // });

  });
});

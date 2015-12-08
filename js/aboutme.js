$(document).ready(function(){

  //This will prevent the page from reloading when the form is submitted
  $('form').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  $('input#company').keyup(function(e){

    //13 is the return key code
    if(e.keyCode == 13)
    {
      $('#pop-up-container').css('display','block');
      $('#pop-up-container').load('popup.html');
    }

    return false;

  });

});
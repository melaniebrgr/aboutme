$(document).ready(function() {

	$('form').submit(function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$('input#company').keyup(function(e){
		if(e.keyCode === 13) //return key code
		{
    		$('.modal').load('../modal.html');
			$('.modal').css('display','block');
		}
		return false;
	});
});
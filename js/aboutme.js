$(document).ready(function() {

$('input#company').focus();

function showModal() {
	var company = $('input#company').val();
	
	$('.modal').css('display','block');	
	$('.modal').load('../modal.html', function() {

		$('body').css('overflow', 'hidden');
		$('input').blur();
		$("input#start-date").css('color', '#59463b').focus();

		//If something was entered in the company form field, update h2 to include it
		if (company) {
			$('.modal h2').text('Thanks for hiring me at ' + company + '!');
		} else {
			$('.modal h2').text('Thanks for hiring me!');
		}

		// On start-date form submit or submit-email button click, launch email client
		$('#start-date-form').submit(function(e){
			e.preventDefault();
			e.stopPropagation();

			var startDate = $('#start-date').val();
			var emailString = "mailto:melanie.brgr@gmail.com?subject=email from " + company + "&body=Hi, you will start at " + company + " on " + startDate +".";
			$("#send-email").attr("href", emailString);
			$("#send-email")[0].click(); //[0] to target href
			return false; 
		});
		$("#submit-email").click(function() {
			$('#start-date-form').submit();
		});

		//Close modal with x button or by pressing Esc
		$('.close-modal').click(function() {
			$('.close-modal').parents('div.modal').empty();
			$('.modal').css('display','none');
			$('body').css('overflow', 'auto');
		});
		function escKeyUp(e) {
			if (e.keyCode === 27) {
		  		$('.close-modal').click();
		  		$(document).unbind("keyup", escKeyUp);
		  	}
			return false;
		}	
		$('.modal').keyup(escKeyUp);		
	});
}


	$('form').submit(function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$('#submit-company').click(showModal);

	$('input#company').keyup(function(e){
		$(this).css('color', '#59463b');

		//If enter is pressed from input field, do this
		if(e.keyCode === 13) { showModal(); }
		return false;
	});

});
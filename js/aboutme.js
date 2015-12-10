$(document).ready(function() {

	$('form').submit(function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	$('input#company').focus();

	$('input#company').keyup(function(e){
		var company = $(this).val();

		//If enter is pressed from input field, do this
		if(e.keyCode === 13) {
    		$('.modal').load('../modal.html', function() {

    			//If something was entered in the company form field, update h2 to include it
				if (company) {
					$('.modal h2').text('Thanks for hiring me at ' + company + '!');
				} else {
					$('.modal h2').text('Thanks for hiring me!');
				}

				$("input#start-date").focus(); // otherwise Esc keyup doesn't work??

				// On start-date-form submit or submit-email button click, do this
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
				});
				function escKeyUp(e) {
					if (e.keyCode === 27) {
				  		$('.close-modal').click();
				  		$(document).unbind("keyup", escKeyUp);
				  	}
					return false;
				}
				$(document).keyup(escKeyUp);					
					
    		});
			$('.modal').css('display','block');
		}
		return false;
	});
});
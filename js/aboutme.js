$(document).ready(function() {

	$('form').submit(function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$('input#company').keyup(function(e){
		var company = $(this).val();

		if(e.keyCode === 13) {
    		$('.modal').load('../modal.html', function() {
				$('.modal h2').text('Thanks for hiring me at ' + company + '!');

    			$("#submit-email").click(function() {
    				$('#company-email-form').submit();
    			});

    			$('#start-date-form').submit(function(e){
					e.preventDefault();
					e.stopPropagation();
					return false;
				});

				$('#company-email-form').submit(function(e){
					e.preventDefault();
					e.stopPropagation();

					var startDate = $('#start-date').val();
					//var companyEmail = $('#company-email').val();
					var emailString = "mailto:melanie.brgr@gmail.com?subject=email from " + company + "&body=Hi, you will start at " + company + " on " + startDate;
					$("#send-email").attr("href", emailString);
					$("#send-email")[0].click(); //[0] to target href

					return false; 
				});

    		});
			$('.modal').css('display','block');
		}
		return false;
	});
});
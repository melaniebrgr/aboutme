$(document).ready(function(){function o(){var o=$("input#company").val();$(".modal").load("../modal.html",function(){function t(o){return 27===o.keyCode&&($(".close-modal").click(),$(document).unbind("keyup",t)),!1}$("body").css("overflow","hidden"),o?$(".modal h2").text("Thanks for hiring me at "+o+"!"):$(".modal h2").text("Thanks for hiring me!"),$("input#start-date").css("color","#59463b").focus(),$("#start-date-form").submit(function(t){t.preventDefault(),t.stopPropagation();var a=$("#start-date").val(),n="mailto:melanie.brgr@gmail.com?subject=email from "+o+"&body=Hi, you will start at "+o+" on "+a+".";return $("#send-email").attr("href",n),$("#send-email")[0].click(),!1}),$("#submit-email").click(function(){$("#start-date-form").submit()}),$(".close-modal").click(function(){$(".close-modal").parents("div.modal").empty(),$(".modal").css("display","none"),$("body").css("overflow","auto")}),$(document).keyup(t)}),$(".modal").css("display","block")}$("form").submit(function(o){return o.preventDefault(),o.stopPropagation(),!1}),$("#submit-company").click(o),$("input#company").keyup(function(t){return $(this).css("color","#59463b"),13===t.keyCode&&o(),!1})});
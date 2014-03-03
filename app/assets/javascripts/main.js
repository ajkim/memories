

// $(document).ready(function(){
// console.log("working");
// $('.newpostlink').on("click", function(){
// 	$.ajax({
// 		type: 'POST',
// 		url: '/posts/'
// 		data: user
// 		dataType: 'json'
// 	}).done(function(response){

// 	})
// })


// });

$(function(){

	var $my_message_list = $('#my-message-list');

	setTimeout(function(){

		$.ajax({
			url: '/posts',
			method: 'GET',
			dataType: 'json'
		})
		.done(function(data){
			console.log(data)
			
		})

	}, 2000)

});
// $(function(){
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



function setImageSwitching(post_id, image_array, milliseconds){

  var $img = $('#post_'+ post_id)[0];

  setInterval(function(){
    if(image_array[0]){
      $img.src = image_array[0]
      image_array.push(image_array.shift())
    }
  }, milliseconds)

}


$(function(){
	
		$.ajax({
			type: 'GET',
			url: '/posts',
			dataType: 'json',
			success: (function(data){
				console.log(data)

				$('body').html('')
				monkey = data;

//get data to loop through
				$.each(data, function(idx, post_ele){
    //new p element where we will append the post's first name
					var new_p = $("<p>");
					new_p.append($('<h1>'+post_ele['post']['first_name']+'</h1>'))
//new img
          var new_img = $('<img class="post_pic" id="post_'+ post_ele['post']['id'] +'"/>');
          

          
          // First image src and animations 
          if (post_ele['photos']){
            new_img.src = post_ele['photos'][0];
          }
          new_img.hide()
          new_p.append(new_img)
          new_img.load(function(){
            new_img.fadeIn(10000)
          })



          $('body').append(new_p)

          setImageSwitching(post_ele['post']['id'], post_ele['photos'], 1000)

				})
			})
		})
	

});

	// 	var _intervalId;

 //    function fadeInLastImg()
 //    {
 //        var backImg = $('.post_pic img:first');
 //        backImg.hide();
 //        backImg.remove();
 //        $('#the-posts' ).append( backImg );
 //        backImg.fadeIn()
 //    };

 //    _intervalId = setInterval( function() {
 //        fadeInLastImg();
 //    }, 1000 );
	// 		})
	// 	})

	// }, 1000)

	// })


// });

// $(function(){

// 	var $my_message_list = $('#my-message-list');

// 	setTimeout(function(){

// 		$.ajax({
// 			url: '/posts',
// 			method: 'GET',
// 			dataType: 'json'
// 		})
// 		.done(function(data){
// 			console.log(data)
// 			console.log('clear time')
// 			$('body').html('')
// 			$.each(data, function(ele){
// 				// $('body').append($('<h1>'+ele.blurb +'</h1>')
// 			}	
// 		})

// 	}, 2000)

// });
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

function getPostId(){
  app.get('/posts.json', function(req, res) {
  console.log(req.query);
  res.send("postid="+req.query.postid+"\npostid="+req.query.postid);
});
}



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
	 load = function(){

		$.ajax({
			type: 'GET',
			url: '/posts',
			dataType: 'json',
			success: (function(data){
				console.log(data)

				$('#stream').html('')
				monkey = data;

//get data to loop through
				$.each(data, function(idx, post_ele){
    //new p element where we will append the post's first name
					var new_p = $("<p>");
					new_p.append($('<h1>'+post_ele['post']['first_name']+' '+post_ele['post']['last_name']+'</h1>'));
//new img
          var new_img = $('<img class="post_pic" id="post_'+ post_ele['post']['id'] +'"/>');
          new_img.append($('<h3>'+post_ele));

          post_id = post_ele['post']['id'];

          var new_blurb = $("<div>");
          new_blurb.append($('<h4 class="caption" id="post_'+ post_ele['post']['id']+'">'+['post']['blurb']+'</h4>'));
          

          // First image src and animations 
          if (post_ele['photos'] ){
            new_img.src = post_ele['photos'][0];
            // new_caption = post_ele['photos'][0]['caption'];
          }
          new_img.hide()
  
          new_p.append(new_img)
          new_img.load(function(){
            new_img.fadeIn(10000)
          })
      
          // new_caption.load(function(){
          //   new_caption.fadeIn(10000)
          // })

          //  if (post_ele['captions']){
          //   new_img.src = post_ele['photos'][0];
          // }
          // new_img.hide()
          // new_p.append(new_img)
          // new_img.load(function(){
          //   new_img.fadeIn(10000)
          // })


          $('body').append(new_p).append(new_blurb);

          setImageSwitching(post_ele['post']['id'], post_ele['photos'], 1000)

          //handlebars for show

				})
			})
		})
	
  }
  load();
    show = function(){

    $.ajax({
      type: 'GET',
      url: '/posts/'+post_id,  //work??
      dataType: 'json',
      success: (function(data){
        console.log(data)

        $('#show-post').html('')

       $.each(data, function(idx, post_ele){
    //new p element where we will append the post's first name
          var new_p = $("<p>");
          new_p.append($('<h1>'+post_ele['post']['first_name']+' '+post_ele['post']['last_name']+'</h1>'));
//new img
          var new_img = $('<img class="post_pic" id="post_'+ post_ele['post']['id'] +'"/>');
          new_img.append($('<h3>'+post_ele));

          post_id = post_ele['post']['id'];

          var new_blurb = $("<div>");
          new_blurb.append($('<h4 class="caption" id="post_'+ post_ele['post']['id']+'">'+['post']['blurb']+'</h4>'));
          

          // First image src and animations 
          if (post_ele['photos'] ){
            new_img.src = post_ele['photos'][0];
            // new_caption = post_ele['photos'][0]['caption'];
          }
          new_img.hide()
  
          new_p.append(new_img)
          new_img.load(function(){
            new_img.fadeIn(10000)
          })
      

          var template_function = Handlebars.compile(source);

          var context = {
            name: new_p,
            blurb: new_blurb,
            imgURL: new_img
          };

          var rendered_html = template_function(context);

          $('body').html(rendered_html);
        })
      })
    })
        }
  show();
});

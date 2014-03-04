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

function setCaptionSwitching(el, caption_array, milliseconds){
 setInterval(function(){
    if(caption_array[0]){
      el.text(caption_array[0])
      caption_array.push(caption_array.shift())
    }
  }, milliseconds)
}

load = function(){

  $.ajax({
    type: 'GET',
      url: '/posts/',//+post_id,  //work??
      dataType: 'json',
      success: (function(data){
        console.log(data)

        $('.container').html('')

        $.each(data, function(idx, post_ele){
    //new p element where we will append the post's first name
    var new_postcard = $("<div class='start'>");
    // new_postcard.style.width=1150+"px";
    new_postcard.append($('<div id="title">'+post_ele['post']['first_name']+' '+post_ele['post']['last_name']+'</div>'));
//new img
var div_img = $('<div class="div_img">');
var new_img = $('<img class="post_pic" id="post_'+ post_ele['post']['id'] +'"/>');
div_img.append(new_img.append($('<h3>'+post_ele)));

post_id = post_ele['post']['id'];

var new_blurb = $("<div class='blurb'>");
new_blurb.append($('<h4 class="caption" id="post_'+ post_ele['post']['id']+'">'+['post']['blurb']+'</h4>+<br>'));


          // First image src and animations 
          if (post_ele['photos'] ){
            new_img.src = post_ele['photos'][0];
            // new_caption = post_ele['photos'][0]['caption'];
          }
          new_img.hide()

          new_postcard.append(new_img)
          new_img.load(function(){
            new_img.fadeIn(10000)
          })


          // var template_function = Handlebars.compile(source);

          // var context = {
          //   name: new_postcard,
          //   blurb: new_blurb,
          //   imgURL: new_img
          // };

          // var rendered_html = template_function(context);

          // $('body').html(rendered_html);
        })
})
})
}

function renderPostcard(post_ele, el){
  var new_postcard = $("<div class='start'>");
  new_postcard.append($('<div id="title">'+post_ele['post']['first_name']+' '+post_ele['post']['last_name']+'</div>'));
 
// First image src and animations 
  var new_img = $('<img class="post_pic" id="post_'+ post_ele['post']['id'] +'"/>');
  if (post_ele['photos'] ){
    new_img.src = post_ele['photos'][0];
  }
  new_img.attr("opacity", "0")  
  new_img.load(function(){
    new_img.fadeIn(10000)
  })
 new_postcard.append(new_img)

  var new_blurb = $("<div class='blurb'>");
  new_blurb.append($('<h3 class="blurb" id="post_'+ post_ele['post']['id']+'">'+post_ele['post']['blurb']+'</h4>'));
  new_postcard.append(new_blurb)
 
 if (post_ele['captions']){
  var new_caption = $('<h4 class="caption" id="post_'+ post_ele['post']['id']+'">'+ post_ele['captions'][0]+ '</h4>');
  new_blurb.append(new_caption);

  new_caption.hide()
  new_caption.fadeIn(10000)
  }
  el.append(new_postcard)
  setImageSwitching(post_ele['post']['id'], post_ele['photos'], 3000)
 if (post_ele['captions']){
  setCaptionSwitching(new_caption, post_ele['captions'], 3000)
}
}

$(function(){

  loadOne = function(){

    $.ajax({
      type: 'GET',
      url: window.pathname,
      dataType: 'json',
      success: (function(data){
        console.log(data)

        $('.container').html('')
        
        renderPostcard(data, $('body'))
      })
    })
  }

  loadAll = function(){
    $.ajax({
      type: 'GET',
      url: '/posts',
      dataType: 'json',
      success: (function(data){
        console.log(data)

        $('.container').html('')
        
        //get data to loop through
        $.each(data, function(idx, post_ele){
          console.log(post_ele)
          renderPostcard(post_ele, $('body'))
        })
      })
    })
  }
  if (window.location.pathname == "/posts/") {
    loadAll()
  } else {
    loadOne()
  }

})

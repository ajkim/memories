// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min.js
//= require bootstrap.min.js
//= require turbolinks
//= require main.js
//= require_tree .	




	var $the_posts = $('#the_posts');

	// setTimeout(function(){

	// 	$.ajax({
	// 		url: '/posts',
	// 		method: 'GET',
	// 		dataType: 'json'
	// 	})
	// 	.done(function(data){
	// 		console.log(data)
	// 		console.log('bom')
	// 		$.each(data, function(index, post){
	// 			$the_posts.append('<li>' + post['first_name'] + post['blurb'] + post[:photos_attributes]["0"]["image"] + '</li>')
	// 		})	
	// 	})

	// }, 5000)


// });


function remove_fields(link) {
  $(link).previous("input[type=hidden]").value = "1";
  $(link).up(".fields").hide();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).up().insert({
    before: content.replace(regexp, new_id)
  });
}
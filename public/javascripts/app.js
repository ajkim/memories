








// // // ** Model **
// // var Post = Backbone.Model.extend({
// //   url: '/posts',
// //   defaults: {
// //     first_name: '',
// //     last_name: '',
// //     username: '',
// //     image: '',
// //     blurb: 'ooh oohh ohhh'
// //   }
// // });


// // ** View **
// var PostView = Backbone.View.extend({

//   initialize: function(){
//     this.listenTo(this.model, 'remove', this.remove)
//   },

//   events:{
//     "click [data-action='destroy']" : 'destroy'
//   },

//   // tagName?
//   tagName: 'div',

//   // template?
//   template: _.template( $('#postview-template').html() ),

//   // render?
//   render: function(){
//     this.$el.html( this.template( this.model.attributes ) );
//     return this
//   },

//   destroy: function(e){
//     e.preventDefault();
//     this.model.destroy()
//   }

// });

// // ** Collection **
// var PostCollection = Backbone.Collection.extend({

//   url: '/posts',
//   initialize: function(){
//     this.fetch()
//   },

//   // model?
//   model: Post

// });

// want to handle only when additional photos and blurbs(after initial first) are uploaded so that more columns are generated to save them

// var processImage = function(e){

//   e.preventDefault()

//   var addImage = $('#image-field').val();

//   var update = 

//    function(){
//     var addImage = $('#image-field').val();
//     initialize: function(addImage){
//     this.listenTo(this.model, 'add', saveNew),
//     this.model.save()
//   },
//   console.log(this.model);
//   };

//   var saveNew = function(update){
//     post_collection.set({
//     image2: addImage,
//     {patch: true}
//   });
//     post_collection.save()
//   };
// };

// var processBlurb = function(e){

//   e.preventDefault()

//   var addBlurb = $('#blurb-field').val();

//   initialize: function(newBlurb){
//     this.listenTo(this.model, 'add', saveNew)
//   }

//   var saveNew = function(addBlurb){
//   post_collection.set({
//     blurb2: addBlurb,
//     {patch: true}
//   });
//   post_collection.save()
//   };
// };

// // ** View **
// var PostListView = Backbone.View.extend({

//   // add a listener to the colletion... to respond to a add event?
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.renderPost)
//   },

//   // how to render 1 post to the list?
//   renderPost: function(post){
//     post.view = new PostView({ model: post });
//     this.$el.prepend( post.view.render().el );
//     return this
//   },

//   // extra:  render all?
//   render: function(){
//     var self = this;
//     this.$el.empty();
//     _.each(this.collection.models, function(post){
//       self.renderPost(post);
//     });
//   }

// });


// // ** View **
// var PostFormView = Backbone.View.extend({

//   // events?
//     // getFormData?
//     // clearForm?
//     // submitCallback?

//     events:{
//       'submit':'submitCallback'
//     },
//     submitCallback: function(e){
//       e.preventDefault();
//       var post_data = this.getFormData();
//       this.collection.create(post_data);
//       this.clearForm();
//     },
//     getFormData: function(){
//       var post_data = {
//         first_name: this.$('#first_name-field').val(),
//         last_name: this.$('#last_name-field').val(),
//         username: this.$('#username-field').val(),
//         image: this.$('#image-field').val(),
//         blurb: this.$('#blurb-field').val()
//       };
//       return post_data
//       console.log(post_data);
//     }, 
//     clearForm: function(){
//       this.$('input').val('')
//     }

// });


// var post_collection, post_list_view, post_form_view;

// $(function(){

//   post_collection = new PostCollection();
//   post_list_view = new PostListView({collection: post_collection, el: $('#post-list')});
//   post_form_view = new PostFormView({collection: post_collection, el: $('#post-form')});

//   post_collection.fetch()

//   // $('#submit_image_button').on("submit", processImage)
//   // $('#submit_blurb_button').on("submit", processBlurb)
// });


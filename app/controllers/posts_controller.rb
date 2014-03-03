class PostsController < ApplicationController

	def index
		# @posts = Post.find_by_sql("SELECT posts.*, photos.* FROM posts full outer JOIN photos ON photos.post_id = posts.id;")

		@posts = Post.all


		respond_to do |format|
			format.html 
			format.json do 
				data = []
				@posts.each do |post|
					post_data = {}
					post_data['post'] = post
					post_data['photos'] = []
					post.photos.each do |photo|
						post_data['photos'] << photo.image.medium.url
					end
					data << post_data
				end
				render json: data.to_json
			end
		end

	end


	# 	 new_post GET /posts/new(.:format)  posts#new
	def new
		@post = Post.new
		# respond_to do |format|
		# 	format.html
		# 	format.json {render json: @post}
		# end

		3.times do
			photo = @post.photos.build
		end
	end

	# 	 	 POST /posts(.:format)  posts#create
	def create


		new_post = Post.create!(post_params)
		current_user.posts << new_post
		# render json: {id: new_post.id}

		params[:post][:photos_attributes].each do |photo_attr|
		
			photo = Photo.new
			attributes = photo_attr[1]['image']
	    pp attributes
	    photo.image = attributes
	    photo.caption = params[:caption]

	    photo.save!
	    new_post.photos << photo

		end

		new_post.save!

		redirect_to posts_path
   

		#upload new image?
		# post.image = params[:post][:image]
		# if post.save!
		# 	render json: post
		# else
		# 	render text: "Didn't work! Try again"
		# end
	end

	def show
		# @post = Post.find(params[:id])

		@posts = Post.all

			respond_to do |format|
			format.html
			format.json {render json: @posts}
		end
	end


	# 	 edit_post GET /posts/:id/edit(.:format)  posts#edit
	def edit
		@post = Post.find(params[:id])
		respond_to do |format|
			format.html
			format.json {render json: @post}
		end
	end

	#             PATCH  /posts/:id(.:format)      posts#update
	#             PUT    /posts/:id(.:format)      posts#update

	def update
		@post = post.find(params[:id])
		@post.update_attributes(post_params)
		respond_to do |format|
			format.html {redirect_to post_path(@post)}
			format.json {render json: @post}
		end
	end

	#             DELETE /posts/:id(.:format)      posts#destroy
	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		respond_to do |format|
			format.html {redirect_to posts_path}
			format.json {render json: @post}
		end
	end


		# @user = User.find(current_user.id)
		# 	post = @user.posts
		# 	comment = Comment.new(:body => params[:body])
		# 	comment.save 
		# 	post.comments << comment
		# 	user.comments << comment
		# 	redirect root_path



		private

		def post_params
			params.require(:post).permit(:first_name, :last_name, :username, :blurb)
		end

	end




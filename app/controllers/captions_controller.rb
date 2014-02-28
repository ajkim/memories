class PhotosController < ApplicationController

	def index
		@captions = Caption.all
		respond_to do |format|
			# format.html
			format.json {render json: @captions}
		end
	end

	def new
		@caption = Caption.new
		respond_to do |format|
			format.html
			format.json {render json: @caption}
		end
	end

	def create
		post = Post.find(params[:id])
		caption = Caption.create!(caption_params)
		post.captions << caption
	end

	def destroy
		@caption = Caption.find(params[:id])
		@caption.destroy
		respond_to do |format|
			format.html {redirect_to captions_path}
			format.json {render json: @caption}
		end
	end

	private

	def caption_params
		params.require(:caption).permit(:caption)
	end


end
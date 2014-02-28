class PhotosController < ApplicationController

	def index
		@photos = Photo.all
		respond_to do |format|
			# format.html
			format.json {render json: @photos}
		end
	end

	def new
		@photo = Photo.new
		respond_to do |format|
			format.html
			format.json {render json: @photo}
		end
	end

	def create
		post = Post.find(params[:id])

		photo = Photo.new
    photo.image = params[:photo][:image]
    if photo.save!
      render json: photo
    else
      render text: "Woops!"
    end

    post.photos << photo

		# post = Post.find(params[:id])
		# photo = Photo.create!(photo_params)
		# post.photos << photo
	end

	def destroy
		@photo = Photo.find(params[:id])
		@photo.destroy
		respond_to do |format|
			format.html {redirect_to photos_path}
			format.json {render json: @photo}
		end
	end



	private

	def photo_params
		params.require(:photo).permit(:photo_url)
	end


end
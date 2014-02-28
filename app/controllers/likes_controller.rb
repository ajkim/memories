class LikesController < ApplicationController

	def create
		post = Post.find(params[:id])
		like = Like.create!(like_params)
		post.likes << like
		current_user.faves << like
	end

	private

	def like_params
		params.require(:like)
	end

end
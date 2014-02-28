class CommentsController < ApplicationController

	def create
		post = Post.find(params[:id])
		comment = Comment.create!(comment_params)
		post.comments << comment
		current_user.comments << comment
	end

	private

	def comment_params
		params.require(:comment).permit(:body)
	end


end
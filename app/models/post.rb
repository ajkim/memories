class Post < ActiveRecord::Base

	belongs_to :user

	has_many :comments
	has_many :commenters, through: :comments, source: :users
	has_many :likes
	has_many :likers, through: :likes, source: :users
	has_many :photos
	accepts_nested_attributes_for :photos
	has_many :captions

	mount_uploader :image, ImageUploader


	# def user_comments(comment)
	# 	new_comment = Comment.create!(body: comment)
	# 	self.comments << new_comment

	# 	commenter = new_comment.user
	# 	self.commenters << commenter
	# end

	# def user_likes()
	# 	like = Like.create!
	# 	self.likes << like
	# 	liker = like.user
	# 	self.likers << liker
	# end

end

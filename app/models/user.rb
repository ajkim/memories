class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts
  has_many :comments
  has_many :likes
	has_many :commented, through: :comments, source: :posts
	has_many :faves, through: :likes, source: :posts

	mount_uploader :avatar, AvatarUploader

	# def create_post(first_name, last_name, username, blurb)
	# 	new_post = Post.create!(first_name: first_name, last_name: last_name, username: username, blurb: blurb)
	# 	self.posts << new_post
	# 	return new_post
	# end


end

# ("first_name", "last_name", "username", "photo1", "photo2", "photo3", "photo4", "photo5", "adj1", "adj2", "adj3", "blurb", nil)


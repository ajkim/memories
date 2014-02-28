class Photo < ActiveRecord::Base
	belongs_to :post

	has_many :captions, :dependent => :destroy
	accepts_nested_attributes_for :captions, :reject_if => lambda { |a| a[:caption].blank? }, :allow_destroy => true

	mount_uploader :image, ImageUploader

end

class Post < ApplicationRecord
  mount_uploader :image, ImageUploader

  has_many :comments, dependent: :destroy #commentsを所有
end

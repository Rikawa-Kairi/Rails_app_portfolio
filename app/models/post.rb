class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :entries
  has_many :comments, dependent: :destroy #commentsを所有

  validates :title,  presence: true, length: { maximum: 40}
  validates :content, presence: true, length: { maximum: 1000}
  validates :price, presence: true

  def self.search(keyword)
    if keyword
      where(["title like? OR city_id like? OR town_id like?", "%#{keyword}%", "%#{keyword}%","%#{keyword}%"])
    else
      Post.all
    end
  end
end

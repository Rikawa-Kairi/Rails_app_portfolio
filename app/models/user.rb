class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts, dependent: :destroy  #Userがpostsを持っている関係dependent: :destroyを追加しておくと、たとえば、userが所有するpostをすべて削除するということを簡潔に命令できるようになります。
  has_many :comments, dependent: :destroy
end


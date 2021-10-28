class Posts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :prefectures, :string
  end
end

class AddTownIdToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :town_id, :string
  end
end

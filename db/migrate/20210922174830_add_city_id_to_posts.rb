class AddCityIdToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :city_id, :string
  end
end

class RemovePostfromEntries < ActiveRecord::Migration[6.0]
  def change
    remove_column :entries, :post, :integer
  end
end

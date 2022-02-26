class RemovePostfroEntries < ActiveRecord::Migration[6.0]
  def change
    remove_column :entries, :post_id, :integer
  end
end

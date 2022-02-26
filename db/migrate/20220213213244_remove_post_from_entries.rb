class RemovePostFromEntries < ActiveRecord::Migration[6.0]
  def change
    add_column :entries, :post, :integer
  end
end

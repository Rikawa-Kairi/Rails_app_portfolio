class AddReferencesToentries < ActiveRecord::Migration[6.0]
  def change
    add_reference :entries, :post, foreign_key: true
  end
end

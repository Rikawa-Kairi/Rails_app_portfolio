class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :room
  belongs_to :post,optional: true

end

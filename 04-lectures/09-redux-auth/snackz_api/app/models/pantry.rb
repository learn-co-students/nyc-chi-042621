class Pantry < ApplicationRecord
  belongs_to :user

  has_many :snack_pantries
  has_many :snacks, through: :snack_pantries
end

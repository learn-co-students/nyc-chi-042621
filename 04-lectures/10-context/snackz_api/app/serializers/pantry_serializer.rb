class PantrySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :snack_pantries
end

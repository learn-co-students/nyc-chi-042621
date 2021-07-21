class SnackPantrySerializer < ActiveModel::Serializer
  attributes :id, :fresh
  belongs_to :snack
end

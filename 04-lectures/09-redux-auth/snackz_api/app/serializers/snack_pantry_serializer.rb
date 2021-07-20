class SnackPantrySerializer < ActiveModel::Serializer
  attributes :id, :fresh, :pantry_id, :snack_id
  belongs_to :snack
end

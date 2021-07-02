class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :body
  has_many :comments
end

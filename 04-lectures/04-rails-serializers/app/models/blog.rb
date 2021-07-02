class Blog < ApplicationRecord
  belongs_to :user # -> Author
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments # -> List of users who commented on this blog


  validates :title, presence: true
  validates :body, presence: true, uniqueness: true
  validates :likes, numericality: {greater_than_or_equal_to: 0, less_than: 50}

  # validate :body_must_include_chicken

  # private

  # def body_must_include_chicken
  #   if self.body && !self.body.include?("chicken")
  #     self.errors.add(:body, "must include chicken cuz I like them")
  #   end
  # end

end

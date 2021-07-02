class User < ApplicationRecord
    has_many :blogs, dependent: :destroy

    has_many :comments, dependent: :destroy
    # has_many :blogs, through: :comments

    validates :username, uniqueness: true

    def doctor_name
        "Dr. #{name}"
    end

    def your_own_serialization
        self.attributes
    end
end

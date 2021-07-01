class User < ApplicationRecord
    has_many :blogs

    validates :username, uniqueness: true
end

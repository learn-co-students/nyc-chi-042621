class Teacher < ActiveRecord::Base
    has_many :courses
    has_many :assignments, through: :courses

    def professor_name
        "Dr. #{username}"
    end

end
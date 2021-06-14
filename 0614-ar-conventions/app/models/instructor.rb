class Instructor < ActiveRecord::Base

    has_many :students

    def declare_leon_as_favorite
        puts "My name is #{self.name} and Leon is my favorite"
    end

    def self.everybody_do_the_thing
        self.all.each do |instructor|
            instructor.declare_leon_as_favorite
        end
    end

end
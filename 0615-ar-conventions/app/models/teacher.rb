class Teacher < ActiveRecord::Base
    
    has_many :students

    def all_student_names
        self.students.map {|student| student.name }
    end

    def self.all_specialties
        self.all.map do |teacher|
            teacher.specialty
        end
    end

end
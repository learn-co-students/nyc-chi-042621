class BoatingTest

    # belongs_to :student
    # belongs_to :instructor
    attr_accessor :student, :name, :status, :instructor
    @@all = []


    def initialize(student, name, status, instructor)
        @student, @name, @status, @instructor = student, name, status, instructor
        @@all << self
    end

    def self.all
        @@all 
    end

end

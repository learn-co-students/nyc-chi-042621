class Student

    attr_accessor :first_name 
    @@all = []

    def initialize(first_name)
        @first_name = first_name
        @@all << self
    end

    def self.all
        @@all
    end

    # has_many :boating_tests
    def boating_tests
        BoatingTest.all.select { |bt| bt.student == self }
    end

    # has_many :instructors, through: :boating_tests
    def instructors
        boating_tests.map { |bt| bt.instructor }
    end


end

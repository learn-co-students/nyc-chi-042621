class Instructor

    attr_accessor :name
    # Gives us instance methods 
    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all 
    end

    # has_many :boating_tests
    def boating_tests()
        BoatingTest.all.select { |bt| bt.instructor == self }
    end

    # has_many :students, through: :boating_tests
    def students
        boating_tests.map { |bt| bt.student }
    end





    # ***** METHODS THAT USE MY HELPER METHODS ABOVE *****
    def passed_students
        all_passed_tests = self.boating_tests().select {|bt| bt.status == "passed"}
        all_passed_tests.map {|test| test.student }
    end

    def list_of_names
        students.map {|student| student.first_name }
    end

    def self.most_hard_working
        @@all.max_by {|instructor| instructor.boating_tests().length }
    end

end

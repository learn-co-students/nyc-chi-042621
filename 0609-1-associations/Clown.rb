require "pry"

# Blueprint -> Clown

class Clown
    # Give us instance methods to read the instance variable of @age and @name
    attr_reader :age, :name
    # Give us instance methods to write over the instance variable of @age and @name
    attr_writer :age, :name
    # Give us instance methods to read/write over the instance variable of @age and @name
    attr_accessor :age, :name

    # Class Variable: Variable used throughout all of the class
    @@all = []

    # Connected to the Clown.new method
    def initialize(name)
        # Initialize instance variables
            # Variables that begin with @
            # Information that is tied to the instance
        @age = rand(25)
        @name = name

        # self -> Instance being created
        self.introduce()

        @@all << self
    end
    
    # Instance Methods: Can only be called by instances
    # Have access to the instance variables
    def introduce
        puts "Hello, my name is #{@name} and I am #{@age} years old."
    end
    
    def get_pied_in_the_face
        # self -> <#Clown krusty>, <#Clown it>
        @pied = true
    end
    
    # Class Method: Can only be called by the class
    def self.state_agenda
        # self -> class Clown
        puts "Terrify kids"
    end
    
    def self.all
        @@all
    end





end



# Instances -> Krusty, It, Jigsaw

it = Clown.new("It from Stephen King")
krusty = Clown.new("Krusty the Clown")
jigsaw = Clown.new("Jigsaw Killah")


binding.pry
0
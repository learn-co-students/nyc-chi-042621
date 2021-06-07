require "pry"
# Class -> blueprint

class Clown

    # attr_reader/attr_writer macros give us instance methods allowing us to read/write instance variables
    attr_reader :name, :age, :pied
    attr_writer :name, :age, :pied

    # attr_accessor gives you the ability to read/write instance variables
    # attr_accessor :name, :age, :pied

    def initialize(name)
        # This method is linked to the Clown.new method
        puts "Hello"
        # Instance variables begin with @
        @age = rand(25)
        @name = name

        # self.get_pied_in_the_face()
    end

    # Instance Method: only an instance can call this method
        # `self` inside of an instance method is the instance
    def get_pied_in_the_face
        # Ruby method implicitly returns the last line executed
       
        # puts "#{self.name} just got pied LOL"
        @pied = true
    end


    # Class method: Only the class can call this method
        # `self` inside of a class method is the class
    def self.creepy_laugh
        "HAHAHAHAHAHAHAHA"
    end


end



# Instances -> Buildings made from the blueprint

krusty = Clown.new("Krusty the Clown")
it = Clown.new("It from Stephen King's Book")
jigsaw = Clown.new("Jigsaw - Killer?")

binding.pry
0
require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

paul = Instructor.new("Paul")
jimmy = Instructor.new("Jimmy")


spongebob = Student.new("Spongebob")
patrick = Student.new("Patrick")

BoatingTest.new(spongebob, "Donuts at Dunkin Donuts", "passed", paul)

BoatingTest.new(patrick, "Drive thru at burgerking", "failed", paul)
BoatingTest.new(patrick, "Wendy's Baconator Heist", "passed", jimmy)



# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

binding.pry
0 #leave this here to ensure binding.pry isn't the last line


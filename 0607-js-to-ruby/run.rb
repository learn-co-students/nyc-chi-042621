def returns_instructors(numOfPetsForEric) 
    instructors = [
        {name: "Eric", lecturer: false, pets: numOfPetsForEric},
        {name: "Ix", lecturer: true, pets: 5},
        {name: "Louis", lecturer: true, pets: 2}
    ]

    instructors
end


thing1 = returns_instructors 2
thing2 = returns_instructors(46)

thing2 << {name: "Dakota", lecturer: true, pets: 3}

# pp(thing1)
# pp thing2


arr_of_names = thing2.map do |instructor|
    instructor[:name]
end

# arr_of_names = thing2.map {|instructor| instructor[:name] }

all_lecturers = thing2.select do |instructor|
    instructor[:lecturer] == true
end

instructor_with_more_than_2_pets = thing2.find do |instructor|
    instructor[:pets] > 2
end


thing2
thing2.each do |instructor|
    pp instructor[:name]
end

string_hash = {"name" => "Mo"}
symbols_hash = {name: "Mo"}

string_hash["name"] # return "Mo"
string_hash[:name] # return nil

symbols_hash["name"] # return nil
symbols_hash[:name] # return "Mo"





















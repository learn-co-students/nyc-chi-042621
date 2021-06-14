# Seed Your Database 
ix = Instructor.create(name: "Ix", specialty: "JS", weight: rand(50))

Student.create(name: "Leon", favorite: true, instructor_id: Instructor.first.id)
Student.create(name: "Mo", favorite: false, instructor_id: Instructor.first.id)
Student.create(name: "Vee", favorite: true, instructor_id: Instructor.second.id)
nicholas = Student.create(name: "Nicholas", favorite: true, instructor_id: ix.id)
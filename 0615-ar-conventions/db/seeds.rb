# Seed Your Database 
ix = Teacher.create(name: "Ix", specialty: "JS", weight: rand(10))
dakota = Teacher.create(name: "Dakota", specialty: "Ruby", weight: rand(10))



yisrael = Student.create(name: "Yisrael", favorited: true, age: rand(10), teacher_id: Teacher.first.id)
paul = Student.create(name: "Paul", favorited: false, age: rand(10), teacher_id: Teacher.first.id)

sue = Student.create(name: "Sue", favorited: true, age: rand(10), teacher_id: ix.id)

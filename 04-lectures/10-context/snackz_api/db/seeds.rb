eric = User.create(username: "Eric", password: "abc123")

10.times do 
    Snack.create(name: Faker::Food.ingredient)
end
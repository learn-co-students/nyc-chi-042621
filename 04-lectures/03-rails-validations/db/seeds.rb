eric = User.create(username: "EricKim", name: "Eric", age: rand(18))
dakota = User.create(username: "Dakota", name: "Dakota", age: rand(18))
louis = User.create(username: "Louis", name: "Louis", age: rand(18))
ix = User.create(username: "Ix", name: "Ix", age: rand(18))

Blog.create(title: "Chicken", body: "Chicken Chicken", likes: 10, user: eric)
Blog.create(title: "Cat", body: "Cat Cat", likes: 15, user: eric)
Blog.create(title: "Kangaraoo", body: "Kangaraoo Kangaraoo", likes: 20, user: eric)


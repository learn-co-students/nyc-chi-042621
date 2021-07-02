eric = User.create(username: "EricKim", name: "Eric", age: rand(18))
dakota = User.create(username: "Dakota", name: "Dakota", age: rand(18))
louis = User.create(username: "Louis", name: "Louis", age: rand(18))
ix = User.create(username: "Ix", name: "Ix", age: rand(18))

chicken = Blog.create(title: "Chicken", body: "Chicken Chicken", likes: 10, user: eric)
cat = Blog.create(title: "Cat", body: "Cat Cat", likes: 15, user: eric)
kangaroo = Blog.create(title: "Kangaraoo", body: "Kangaraoo Kangaraoo", likes: 20, user: eric)

Comment.create(user: ix, blog: kangaroo, content: "I love kangaroos")
Comment.create(user: dakota, blog: kangaroo, content: "I hate kangaroos")
Comment.create(user: louis, blog: kangaroo, content: "I am indifferent about kangaroos")

Comment.create(user: louis, blog: cat, content: "I am indifferent about cats")
Comment.create(user: ix, blog: cat, content: "I love cats")

Comment.create(user: dakota, blog: chicken, content: "I loves chickens")

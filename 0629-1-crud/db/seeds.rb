# #CREATE# #
# Model.create(hash_of_attributes)

# inst = Model.new(hash_of_attributes)
# inst.save

unf = Book.create(
    name: "Series of Unfortunate Events", 
    author: "Lemony Snicket", 
    page_count: rand(100))
fortunate = Book.create(
    name: "Series of Fortunate Events", 
    author: "Lime Snicket", 
    page_count: rand(100))

evt = Book.new(
    name: "Series of Events", 
    author: "Orangey Snicket", 
    page_count: rand(100))
evt.save


# #READ# #
# Model.find(id) -> Instance OR Error Out
# Model.find_by(hash_of_attributes) -> Instance OR nil

# Model.where(hash_of_attributes) -> Array of instances OR an empty array



# #UPDATE# #
# inst = Model.find(id)
# inst.update(hash_of_attributes)

fort = Book.find_by(name: "Series of Fortunate Events")
fort.update(page_count: 1000, author: "Lime Snickers")


# #DELETE/DESTROY# #
# inst = Model.find(id)
# inst.destroy

twilight = Book.create(name: "Twilight", author: "Stephanie Meyers", page_count: 100)
twilight.destroy
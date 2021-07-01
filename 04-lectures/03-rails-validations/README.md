## ActiveRecord Validations

ActiveRecord provides a lot of code that makes it easy to write validations in our models. For example, if we wanted to ensure that all instances of a `Student` model are created with a `first_name` attribute, we could write something like this:

```rb
class Student < ApplicationRecord
  validates :first_name, presence: true
end
```

Some other common validations you might see:

- String validations
  - How long does the string need to be? `validates :first_name, length: { minimum: 2 }`
  - Is this string unique for this attribute on the model? `validates :email, uniqueness: true`  (i.e. is there a Student with the same email already in the database?)
- Number validations
  - Is this a valid number? `validates :age, numericality: true`
  - Is this a valid integer? `validates :age, numericality: { only_integer: true }`
  - Is this number within a certain range (ie 1..5)? `validates :age, inclusion: { in: 1..100 }`

We can also create custom validations like so:

```rb
class Definition < ApplicationRecord
  validate :right_number_of_words
  
  def right_number_of_words
    words_num = content.split.length
    if content && (words_num < 2 || words_num > 10)
      # throw an error if there is no content (so the number is nil) or if the length is too long/short
      errors.add(:content, "must be between 2 and 100 words")
    end
    # otherwise it's valid!
  end
end
```

All the validations on a model will run only when information from the model is being saved to the database, so in response to the following methods: `create`, `save`, and `update`.

For example, if we have a Student model with the following validations:

```rb
class Student < ApplicationRecord
  validates :first_name, presence: true
  validates :age, numericality: { only_integer: true } 
end
```

And we ran the following code in Rails console:

```rb
eric = Student.create(first_name: "Eric", age: "one hundred")
# => #<Student id: nil, first_name: "Eric", age: 0, created_at: nil, updated_at: nil>
eric.valid?
# => false
eric.errors.full_messages
# => ["Age is not a number"]
```

The validations on our student model would prevent this from persisting bad data (in the example above, the `age: "one hundred"` isn't valid) in our database. 

We also have access to the `.valid?` method which we can use to check if our model is valid.

ActiveRecord *also* gives us access to error messages from our validations by calling `.errors` on our model instance. 

More Info: [Active Record Validations — Ruby on Rails Guides](https://guides.rubyonrails.org/active_record_validations.html)
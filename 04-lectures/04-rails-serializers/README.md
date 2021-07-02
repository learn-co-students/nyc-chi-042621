
# Differences between a standard Rails app and an API mode

Remember the differences of API mode:

  - 1. We don't use our views
  - 2. We render out json `render json: ...`
  - 3. We can use serializers to avoid `.to_json` everything


### Making Requests work on the frontend

When making requests to our frontend **we must enable CORS**
going to our `config/initializers/cors.rb` and uncommenting and also
**change origins to '*'**:

```rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

You **must also go to your `Gemfile` and have `gem 'rack-cors'`** there and
`bundle install`.

---

When accepting data from the frontend, we want to make sure we are using
**strong parameters as well**. So when we did `POST /toys`:

```rb
# Inside app/controllers/toys_controller.rb
class ToysController < ApplicationController
  # Other methods...

  def create

    # From our frontend, we make the request in this format
    # POST /characters
    # Body: { name: "", image: "", likes: 0}


    # The backend receives everything nested so we want to be sure to use
    # strong params
    @toy = Toy.create(toy_params)
    render json: @toy
  end
  # Other methods ...

  private
  def toy_params
    params.permit(:name, :image, :likes)
  end
end
```


### Serializers
Serializers helps our application send data appropriately. For this project,
we decided to use `active_model_serializers`. To get started is making sure
it is included in the `Gemfile`:

```rb
gem 'active_model_serializers', '~> 0.10.0'
```

Then we need to be sure to do a `bundle install` and a `spring stop`.

Now with that installed, we can use `rails g serializer <serializer name matching model>` and this will build out our serializer for a particular model. In our Toys
api, we did `rails g serializer toys` and it generated:

```rb
# inside of `app/serializers/character_serializer.rb`
class ToySerializer < ActiveModel::Serializer
  attributes :id
end
```

You can list out attributes that match to instance methods on the model, so when we change it to be whatever we want:

```rb
class ToySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :likes
end
```

If you want to include multiple serializers, inside your `config/initializers/active_model_serializers.rb`
A -> B -> C -> D

```rb
  ActiveModelSerializers.config.default_includes = '**'
```

Without the line above:
A -> B . 
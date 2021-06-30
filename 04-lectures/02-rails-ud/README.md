# Rails

## Rails Commands Reference
* `rails new <app-name>` - create a new Rails app
* `rails c` - open a console
* `rails s` - start server
* `rails g migration <migration-name> <attribute:data-type> <attribute:data-type>` - generate a migration
* `rails g model <model-name> <attribute:data-type> <attribute:data-type>` - generate a model and a migration to create the table with specified columns
* `rails g controller <model-name-pluralized>` - generate a controller
* `rails routes` - display all the routes in your app, also can viewed at http://localhost:3000/rails/info/routes
* `rails db:migrate` - run all pending migrations (same as `rake db:migrate` in Mod 3)

## Routes

```ruby
    get '/students', to: 'students#index'
    post '/students', to: 'students#create'
    get '/students/:id', to: 'students#show'
    patch 'students/:id', to: 'students#update'
    delete 'students/:id', to: 'students#destroy'

    # or, if you will have all five routes or don't want to practice the syntax:
    # resources :students
    # resources :students, only: [:index, :show]
```
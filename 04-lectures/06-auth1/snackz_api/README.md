# RAILS API

```bash
    rails new <project_name> --api --database=postgresql

```

Gemfile
```rb
    gem 'rack-cors'
    gem 'bcrypt'
    gem 'active_model_serializers'

```

Uncomment and change `config/initializers/cors.rb`

Add the `ams.rb` file in `config/initializers`:
```
    ActiveModelSerializers.config.default_includes = '**'
```


## BCrypt

- Install the `bcrypt` gem
- Migration has `password_digest` as its column
- Model has `has_secure_password`
    - `password_digest` becomes `password` outside of the migrations
    - Gives us instance method called `authenticate`
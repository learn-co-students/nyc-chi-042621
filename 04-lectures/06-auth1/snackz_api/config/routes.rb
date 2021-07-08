Rails.application.routes.draw do
  # resources :snack_pantries
  # resources :pantries
  # resources :users
  # resources :snacks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/users", to: "users#create"
  post "/login", to: 'users#login'
end

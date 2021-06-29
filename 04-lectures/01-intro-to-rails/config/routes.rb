Rails.application.routes.draw do
  # resources :blogs
  # resources :users

  # RESTful Routing
  get "/users", to: "users#index"
  post "/users", to: "users#create"
  get "/users/:id", to: "users#show"



end
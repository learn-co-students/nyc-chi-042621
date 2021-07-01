Rails.application.routes.draw do
  resources :blogs
  resources :users, only: [:index, :destroy, :update, :create, :show]

  # RESTful Routing
  # get "/users", to: "users#index"
  # post "/users", to: "users#create"
  # get "/users/:id", to: "users#show"
  # patch "/users/:id", to: "users#update"
  # delete "/users/:id", to: "users#destroy"

  patch "/users/:id/increase", to: "users#increase"


end
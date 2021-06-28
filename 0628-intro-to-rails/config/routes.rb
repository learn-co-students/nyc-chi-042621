Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # VERB "/URL", to: "CONTROLLER#METHOD"
  get "/hello_world", to: "application#hello"

  resources :books
  # get "/books", to: "books#index"
  # get "/books/:id", to: "books#show"
  # delete "/books/:id", to: "books#destroy"
  # patch "/books/:id", to: "books#update"
  # post "/books", to: "books#create"


end

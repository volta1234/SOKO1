Rails.application.routes.draw do
  resources :products
  resources :buyers
  resources :users
  root 'render#index'
  post "/users-login", to: "users#login"
  post "/buyers-login", to: "buyers#login"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

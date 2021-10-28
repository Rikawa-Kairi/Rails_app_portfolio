Rails.application.routes.draw do

  devise_for :users
  resources :posts do
      resources :comments, only: [:create]
  end
  root 'posts#index'


  
  # resources :comments, only: [:create, :destroy]
  #  devise_scope :users do
  #   get '/users', to: redirect("/users/sign_up")
  # end
end

Rails.application.routes.draw do


  # get 'chat/:id', to: 'chats#show', as: 'chat'
  # resources :chats, only: [:create]
  resources :messages, :only => [:create]
  resources :rooms, :only => [:create, :show, :index, :destroy]
  devise_for :users
  # resources :users, only: [:show]

  resources :posts do
      resources :comments, only: [:create, :destroy]
    collection do
      get :mypage
      get :search
      get :inquiry
    end
  end
  
  resources :comments, only: [:create, :destroy]
   devise_scope :users do
    get '/users', to: redirect("/users/sign_up")
  end
  
  root 'posts#index'
end

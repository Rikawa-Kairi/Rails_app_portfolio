Rails.application.routes.draw do

  devise_for :users

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

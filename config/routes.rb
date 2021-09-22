Rails.application.routes.draw do

  root 'posts#index'
  get 'posts/new' , to: 'posts#new'
  post 'posts/create' , to: 'posts#create'
  get 'posts/:id/show' , to: 'posts#show'
  post "posts/:id/destroy", to: "posts#destroy"
  get "posts/:id/edit", to: "posts#edit"
  post "posts/:id/update", to: "posts#update"
  
  get 'users/member', to: 'users#member'
end

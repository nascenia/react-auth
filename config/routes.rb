Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  post 'user_token' => 'user_token#create'
  resources :todos

  resources :users do
    get :profile, on: :collection
  end

  resources :requests
end

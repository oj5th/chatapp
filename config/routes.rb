Rails.application.routes.draw do
  root to: "chatrooms#index"
  resources :chatrooms, only: [:index, :show] do
    resources :messages, only: [:create]
  end
end

Demo::Application.routes.draw do
  
  resources :users

  match 'users/:id/destroy' => 'users#destroy'
  
end

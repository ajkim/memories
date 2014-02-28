MemoriesApp::Application.routes.draw do

  devise_for :users, :controllers => {:registrations => "devise_registrations"}

  post '/users/:id/avatar' => 'users#avatar'

	root :to => "home#index"

	post '/user/:id/show' => 'users#show'

	resources :posts
	resources :photos

	post '/posts/:id/comment' => 'comments#create'
	post '/posts/:id/image' => 'images#create'
	post '/posts/:id/photo' => 'photos#create'

end
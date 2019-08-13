Rails.application.routes.draw do
  root to: "produce#index"
  resources :produce
  scope module: "produce" do
    post "search", to: "searches#show"
  end
end

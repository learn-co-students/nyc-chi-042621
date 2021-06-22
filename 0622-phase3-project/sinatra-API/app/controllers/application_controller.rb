class ApplicationController < Sinatra::Base
  register Sinatra::CrossOrigin

  configure do
    enable :cross_origin
    set :allow_origin, "*" 
    set :allow_methods, [:get, :post, :patch, :delete, :options] # allows these HTTP verbs
    set :expose_headers, ['Content-Type']
  end

  options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    200
  end

  get '/hello_world' do
    {message: "Hello World"}.to_json
  end

  get "/info" do 
    weight = Cat.sum(:weight)
    names = Cat.pluck(:name)
    count = Cat.count
    {total_weight: weight, all_names: names, total_count: count}.to_json
  end

  get "/cats" do 
    Cat.all.to_json
  end

  post "/cats" do
    # params is the hash of information coming from the body of the Request
      # Through use of params, we enter the DB
    cat = Cat.create(params.slice(:name, :weight))
    cat.to_json
  end


end

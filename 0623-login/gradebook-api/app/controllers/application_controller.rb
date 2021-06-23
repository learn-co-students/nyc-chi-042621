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

  get "/teachers" do 
    # This makes courses and assignments the higher level keys
    # Teacher.all.to_json(include: [:courses, :assignments], methods: [:professor_name])

    # This makes assignments part of the course obj
    Teacher.all.to_json({
      include: {courses: {include: :assignments}}, 
      methods: [:professor_name]
    })
  end

  post "/login" do
    teacher = Teacher.find_by(username: params[:username], password: params[:password])
    # teacher = Teacher.find_by(params.slice(:username, :password))

    if teacher.nil?
      {error: "Incorrect username or password"}.to_json
    else
      teacher.to_json(include: {courses: {include: :assignments}})
    end

  end

  delete "/assignments/:id" do 
    # Dynamic URL
    assignment = Assignment.find(params[:id])
    assignment.destroy

    assignment.to_json
  end




end

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end


    def increase
        user = User.find(params[:id])
        user.update(age: user.age + params[:age_to_increase_please])
        render json: user
    end

    private 

    def user_params
        params.permit(:username, :name, :age)
    end

end

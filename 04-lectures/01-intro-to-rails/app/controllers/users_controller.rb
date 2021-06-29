class UsersController < ApplicationController

        # params -> Collection of key-value pairs
            # The key is decided by the programmer 
            # The value is decided by the user 

        # 1) Dynamic URL (: in the URL makes it dynamic)
        # 2) Body of your fetch becomes key-values in params
            # Chances are you deal with strong_params for mass-assignment


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


    # These are your strong_params
    # Getting a subhash from params
        # params.permit(:attribute1, :attribute2)
        # check your schema.rb 
    def user_params
        params.permit(:username, :name, :age)
    end

end

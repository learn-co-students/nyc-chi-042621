class PantriesController < ApplicationController
    # Any time that you make a Fetch Request involving a User AND you include the Authorization Headers, you need this line
        # You will have acces to `@user` variable from the token
    before_action :authorized, only: [:create, :destroy]

    def create
        pantry = @user.pantries.create(pantry_params)
        render json: pantry
    end

    def destroy
        pantry = @user.pantries.find(params[:id])
        pantry.destroy
        render json: pantry
    end


    def pantry_params
        params.permit(:name)
    end
end

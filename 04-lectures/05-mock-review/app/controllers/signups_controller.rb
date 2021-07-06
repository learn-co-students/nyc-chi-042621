class SignupsController < ApplicationController

    def create
        signup = Signup.create(signup_params)
        if signup.valid?
            render json: signup.activity
        else
            render json: {errors: signup.errors.full_messages}
        end
    end

    private

    def signup_params
        params.permit(:camper_id, :activity_id, :time)
    end
end

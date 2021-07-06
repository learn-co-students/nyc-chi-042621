class ActivitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :throw_error

    def index
        activities = Activity.all
        render json: activities
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        render json: {}
    end


    private

    def throw_error
        render json: {error: "Activity not found"}, status: 404
    end
end

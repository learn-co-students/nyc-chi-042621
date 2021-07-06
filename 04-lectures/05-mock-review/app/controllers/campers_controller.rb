class CampersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :throw_response

    def index
        campers = Camper.all
        # render json: campers, include: [:id, :name, :age]
        render json: campers
    end

    # SOLUTION 1 WITHOUT rescue_from
    # def show
    #     camper = Camper.find_by(id: params[:id])
    #     if camper
    #         render json: camper
    #     else 
    #         render json: {"error": "Camper not found"}, status: :not_found
    #     end
    # end

    # SOLUTION 2 WITH rescue_from
    def show
        camper = Camper.find(params[:id])
        render json: camper
    end

    def create
        camper = Camper.create(camper_params)
        if camper.valid?
            render json: camper, status: 201
        else
            render json: {errors: camper.errors.full_messages}, status: 400
        end
    end


    private

    def throw_response
        render json: {error: "Camper not found"}, status: :not_found
    end

    def camper_params
        params.permit(:name, :age)
    end


end

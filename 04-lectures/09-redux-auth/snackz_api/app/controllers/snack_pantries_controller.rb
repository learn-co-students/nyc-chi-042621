class SnackPantriesController < ApplicationController

    def create
        sp = SnackPantry.create(snack_pantry_params)
        render json: sp
    end

    def snack_pantry_params
        params.permit(:snack_id, :pantry_id)
    end
end

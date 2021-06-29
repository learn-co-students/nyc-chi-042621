class ApplicationController < ActionController::Base

    def hello
        render json: {hello: "Bananas Rockets and Curlies"}
    end
    
end

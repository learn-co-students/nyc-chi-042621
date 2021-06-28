class BooksController < ApplicationController

    def index
        books = Book.order(:page_count)
        render json: books
    end

end

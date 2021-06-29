class BooksController < ApplicationController

    def index
        books = Book.order(:page_count)
        render json: books
    end

    def all_books
        book_names = Book.all_titles_lol
        render( {json: book_names} )
    end

end

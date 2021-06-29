class Book < ApplicationRecord

    def self.all_titles_lol
        Book.all.map do |book|
            book.name
        end
    end

end

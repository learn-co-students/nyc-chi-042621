class Magazine < ActiveRecord::Base
  
    has_many :subscriptions
    has_many :readers, through: :subscriptions


    def self.most_popular
        Magazine.all.max_by {|magazine| magazine.subscriptions.length }
    end
    
end
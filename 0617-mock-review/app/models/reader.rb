class Reader < ActiveRecord::Base
  
    has_many :subscriptions
    has_many :magazines, through: :subscriptions


    def total_subcription_price
        # self.subscriptions.pluck(:price).sum()
        # OR
        all_prices = self.subscriptions.map do |sub|
            sub.price
        end
        all_prices.sum
    end


    def subscribe(magazine, price)
        # Subscription.create(reader_id: self.id, magazine_id: magazine.id, price: price)

        # As long as you have the belongs_to macros in the Subscription class, you can do the following:
        Subscription.create(reader: self, magazine: magazine, price: price)

        # self.subscriptions.create(magazine: magazine, price: price)
    end


    def cancel_subscription(magazine)
        potential_sub = self.subscriptions.find_by(magazine_id: magazine.id)
        if potential_sub.nil?
            "You are not subscribed to that magazine"
        else
            potential_sub.destroy
        end
    end

end
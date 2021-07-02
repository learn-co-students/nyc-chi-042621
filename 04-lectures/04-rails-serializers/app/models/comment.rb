class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :blog
  

  def username
    self.user.name
  end
  
end

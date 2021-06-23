class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    
    create_table :teachers do |t|
      t.string :username
      t.string :password
      t.string :subject
    end
    
  end
end

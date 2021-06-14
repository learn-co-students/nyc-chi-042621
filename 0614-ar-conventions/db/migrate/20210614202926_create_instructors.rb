class CreateInstructors < ActiveRecord::Migration[5.2]
  def change

    create_table :instructors do |t|
      t.string :name
      t.string :specialty
      t.integer :weight
    end
    
  end
end

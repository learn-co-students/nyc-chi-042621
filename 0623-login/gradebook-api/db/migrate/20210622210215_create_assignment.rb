class CreateAssignment < ActiveRecord::Migration[5.2]
  def change  

    create_table :assignments do |t|
      t.integer :course_id
      t.string :name
    end

  end
end

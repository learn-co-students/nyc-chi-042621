class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.boolean :favorited
      t.integer :age
      t.integer :teacher_id
    end
  end
end

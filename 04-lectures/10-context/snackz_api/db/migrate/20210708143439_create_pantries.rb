class CreatePantries < ActiveRecord::Migration[6.1]
  def change
    create_table :pantries do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end

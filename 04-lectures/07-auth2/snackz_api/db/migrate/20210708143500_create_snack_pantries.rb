class CreateSnackPantries < ActiveRecord::Migration[6.1]
  def change
    create_table :snack_pantries do |t|
      t.belongs_to :snack, null: false, foreign_key: true
      t.belongs_to :pantry, null: false, foreign_key: true
      t.boolean :fresh

      t.timestamps
    end
  end
end

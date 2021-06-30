class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :body
      t.integer :likes
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

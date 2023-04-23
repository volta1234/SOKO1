class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :user_id
      t.string :category
      t.string :image
      t.float :price
      t.boolean :in_stock
      t.integer :units

      t.timestamps
    end
  end
end

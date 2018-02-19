class CreateProduces < ActiveRecord::Migration[5.1]
  def change
    create_table :produces do |t|
      t.integer :quantity
      t.decimal :price
      t.string :name
      t.string :measurement_unit
      t.string :avatar

      t.timestamps
    end
  end
end

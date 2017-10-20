class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.integer :role, default: 0
      t.string :email, null: false, unique: true
      t.string :password_digest
      t.string :token

      t.timestamps
    end

    add_index :users, :token
  end
end

class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.string :title, null: false
      t.string :description, default: ''
      t.integer :status, default: 0, null: false
      t.belongs_to :user, foreign_key: true, null: false
      t.integer :agent_id, null: true

      t.timestamps
    end
  end
end

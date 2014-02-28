class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :blurb
      t.boolean :single

      t.timestamps
    end
  end
end

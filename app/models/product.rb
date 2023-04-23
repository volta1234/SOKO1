class Product < ApplicationRecord
    belongs_to :user

    validates :name, :image, :price, :category, :in_stock, :units, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }
    validates :units, numericality: { greater_than_or_equal_to: 0 }
  end

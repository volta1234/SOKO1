class Buyer < ApplicationRecord
    has_secure_password

    validates :email, :password, presence: true
    validates :email, uniqueness: true
end

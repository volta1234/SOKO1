class BuyersController < ApplicationController
  # before_action :authorize_buyer
  # skip_before_action :authorize_buyer, only: [:login, :create]

    def index
        render json: Buyer.all
    end

    def show
        @buyer = Buyer.find_by(email: params[:email])

        if @buyer
            render json: @buyer, status: :created
        else
            render json: @buyer.errors.full_messages, status: :unprocessable_entity
        end
    end

    def create
        @buyer = Buyer.new(buyer_params)
        if @buyer.save
          token = encode_token({buyer_id: @buyer.id})
          render json: {buyer: @buyer, token: token }, status: :created
        else
          render json: @buyer.errors, status: :unprocessable_entity
        end
      end

      def update
        @buyer = Buyer.find(params[:id])
        if @buyer.update(buyer_params)
          render json: { message: "buyer successfully updated." }
        else
          render json: { error: "Failed to update buyer." }, status: :unprocessable_entity
        end
      end

      def login
        @buyer = Buyer.find_by(email: params[:email])

        if @buyer && @buyer.authenticate(buyer_params[:password])
          token = encode_token({buyer_id: @buyer.id})
          render json: {buyer: @buyer, token: token }, status: :ok
        else
          render json: { error: "invalid email or password"}, status: :unprocessable_entity
        end
      end

    private
    def buyer_params
        params.permit(:email, :password)
    end
end

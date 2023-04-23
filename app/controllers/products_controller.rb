class ProductsController < ApplicationController
    # before_action :authorize_user
    # before_action :authorize_buyer

    def index
        render json: Product.all
    end

    def show
        @product = Product.find_by(id: params[:id])

        if @product
            render json: @product, status: :ok
        else
            render json: @product.errors.full_messages, status: :unprocessable_entity
        end
    end

    def create
        @product = Product.new(product_params)

        if @product.save
            render json: @product, status: :created
        else
            render json: @product.errors.full_messages, status: :unprocessable_entity
        end
    end

        def update
            @product = Product.find_by(id: params[:id])

            if @product.update(product_params)
                render json: { message: "Product updated successfully"}, status: :ok
            else
                render json: @product.errors.full_messages
            end
        end

    def destroy
        @product = Product.find_by(id: params[:id])

        if @product.destroy
            render json: { message: "Product Deleted Successfully" }
        end
    end

    private
    def product_params
        params.permit(:name, :category, :image, :price, :in_stock, :units, :user_id)
    end
end

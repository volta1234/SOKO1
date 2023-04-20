class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        @user = User.find_by(email: params[:email])

        if @user
            render json: @user, status: :created
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def create
        @user = @user.new(user_params)
        if @user.save
            render json: @user, status: :created
        else
            render json: { error: "invalid username or password"}, status: :unprocessable_entity
        end
    end
end

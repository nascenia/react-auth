# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user, except: [:create]
  before_action :authenticate_admin, except: [:create, :profile]
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.create!(user_params)
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  def profile
    render json: current_user.as_json(only: %i[email role name])
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).
      permit(:role, :email, :password, :name)
  end
end

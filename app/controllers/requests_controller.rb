# frozen_string_literal: true

class RequestsController < ApplicationController
  before_action :authenticate_user
  before_action :authenticate_agent, only: [:update]
  before_action :set_request, only: %i[show update destroy]

  def index
    @requests = filter_req

    render json: @requests
  end

  def show
    render json: @request
  end

  def create
    @request =
        Request.new(request_params.merge(user: current_user))

    if @request.save
      render json: @request, status: :created, location: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  def update
    if @request.update(
        request_params.except(:status).
            merge(status: Request.statuses[params[:request][:status]])
    )
      render json: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @request.destroy
  end

  private

  def set_request
    if current_user.customer?
      @request = current_user.requests.find(params[:id])
    else
      @request = Request.find(params[:id])
    end
  end

  def filter_req
    if current_user.customer?
      current_user.requests
    else
      Request.all
    end
  end

  def request_params
    params.require(:request).permit(:title, :description, :status)
  end
end

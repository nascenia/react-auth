# frozen_string_literal: true

class ApplicationController < ActionController::API
  include Knock::Authenticable
  rescue_from(
    ActiveRecord::RecordInvalid,
    with: :render_unprocessable_entity_response
  )
  rescue_from(
    ActiveRecord::RecordNotFound,
    with: :render_not_found_response
  )

  private

  def render_unprocessable_entity_response(exception)
    msg =
      exception.record.errors.full_messages
    render json: msg, status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def authenticate_agent
    if current_user.customer?
     render json: msg, status: :unprocessable_entity
    else
     true
    end
  end
end

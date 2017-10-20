# frozen_string_literal: true

# request model
class Request < ApplicationRecord
  #
  # constant & enum
  #

  enum status: %i[pending processing processed]

  #
  # validations
  #

  belongs_to :user
  belongs_to :agent, class_name: 'User', optional: true

  #
  # associations
  #

  validates :title, presence: true
  validates :status, presence: true
  validates :user_id, presence: true
end

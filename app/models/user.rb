# frozen_string_literal: true

#
class User < ApplicationRecord
  #
  # constant & enum
  #

  enum role: %i[customer agent admin]

  #
  # includes
  #

  has_secure_password

  #
  # validation
  #

  validates :email, uniqueness: true
  validates :email, presence: true
  validates :name, presence: true

  #
  # associations
  #

  has_many :requests
  has_many :service_requests, class_name: 'Request'
end

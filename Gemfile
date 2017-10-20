# frozen_string_literal: true

# Organization
# ============
#
# - Keep this list alphabetized.
# - All version constraints must have a documented reason, and a condition
#   under which the constraint can be removed. Constraints which lack this
#   documentation will be lifted without warning.
#
# Gems which should not be installed
# ==================================
#

source 'https://rubygems.org'

ruby '2.4.1'

gem 'knock'

gem 'mysql2'

gem 'puma'

gem 'rack-cors'

gem 'rails'

gem 'rails_admin', '~> 1.2'

group :development do
  gem 'listen', '~> 3.0.5'

  # Spring speeds up development by keeping your
  # application running in the background.
  # Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen'
  gem 'pry-nav'
  gem 'pry-rails'
  gem 'pry-remote'
  gem 'rubocop'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'faker'
  gem 'launchy'
  gem 'selenium-webdriver'
end

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

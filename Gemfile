source "https://rubygems.org"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "rails"
# Add JQuery to the JavaScript library
gem "jquery-rails"
# Add CoffeeScript to the JavaScript library
gem "coffee-rails"
# Use Sass for stylesheets
gem "sass-rails"
# Use FontAwesome for icons
gem "font-awesome-sass"
# Use PostgreSQL as database
gem "pg"
# Encapsulate the JSON serialization of objects. Read more: https://github.com/rails-api/active_model_serializers
gem "active_model_serializers"
# Memcached store cashe on server
gem "dalli"
# Authorize the user sign up and the user log in
gem "devise", "3.4"
gem "devise_token_auth"
# Authenticate user with Facebook
gem "omniauth-facebook"
# Authorize what ressources a given user is allowed to access within your application
gem "pundit"
# Track user activity. Read more: https://mixpanel.com/help/reference/ruby
gem "mixpanel-ruby"
# Enable payment options
gem "braintree"
# Use Unitwise for unit measurement conversion
gem "unitwise"
# Monitor Ruby Gems are out-of-date or vulnerable
gem "gemsurance"

group :doc do
  # Bundle exec rake doc:rails generates the API under doc/api.
  gem "sdoc", "~> 0.4.0"
end

group :development, :test do
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  # Handle error requests for debugging
  gem "meta_request"
  # Monitor application performance
  gem "bullet"
  # Display json objects pretty
  gem "awesome_print"
  # Write test scripts. Read more: http://github.com/rspec/rspec
  gem "factory_girl_rails"
  gem "rspec-rails"
  # Debug source code
  gem "byebug"
  gem "pry-rails"
  gem "quiet_assets"
end

group :production do
  # Use Puma as web server
  gem "puma"
  # Use Uglifier as compressor for JavaScript assets
  gem "uglifier", ">= 1.3.0"
  # Enable Heroku features
  gem "rails_12factor"
end

# Fetch Bower components
source "http://rails-assets.org" do
  gem "rails-assets-angular"
  gem "rails-assets-angular-cookie"
  gem "rails-assets-angular-messages"
  gem "rails-assets-angular-material"
  gem "rails-assets-angular-resource"
  gem "rails-assets-angular-ui-router"
  gem "rails-assets-angular-ui-utils"
  gem "rails-assets-ng-token-auth"
end

# Required for any Windows computer
# gem "tzinfo-data", platforms: [:mingw, :mswin, :ruby_19]

# Use ActiveModel has_secure_password
# gem "bcrypt", "~> 3.1.7"

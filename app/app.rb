ENV['RACK_ENV'] = 'development'

require_relative 'data_mapper_setup'
require 'sinatra/base'

class Bowling < Sinatra::Base

  get '/' do
    erb :index
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

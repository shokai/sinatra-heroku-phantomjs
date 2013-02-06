before '/*.json' do
  content_type 'application/json'
end

get '/' do
  @title = 'get links'
  haml :index
end

get '/links.json' do
  @url = params[:url]
  link = `phantomjs bin/get_links.js #{@url}`.
    split(/[\r\n]/).
    select{|i| i =~ /^links=/ }.first
  halt 500, 'error' unless link
  @mes = link.gsub(/^links=/,'')
end

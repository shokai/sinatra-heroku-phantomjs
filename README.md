Sinatra+Heroku+PhantomJS
========================
get links

* Heroku Cedar Stack (Ruby 1.9.1)
* PhantomJS
* http://qiita.com/items/875cdbd6a12d482b71a4

Heroku
------
* http://phantom-getlinks.herokuapp.com


Install Dependencies
--------------------

    % npm install -g phantomjs
    % gem install heroku foreman bundler
    % bundle install


Run
---

    % foreman start

=> http://localhost:5000


Deploy
------

push

    % heroku create --buildpack git://github.com/ddollar/heroku-buildpack-multi.git
    % git push heroku master
    % heroku open


config

    % heroku config:add LD_LIBRARY_PATH=/usr/local/lib:/usr/lib:/lib:/app/vendor/phantomjs/lib PATH=bin:vendor/bundle/ruby/1.9.1/bin:/usr/local/bin:/usr/bin:/bin:/app/vendor/phantomjs/bin

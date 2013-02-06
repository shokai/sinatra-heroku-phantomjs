Sinatra+Heroku+PhantomJS
========================
get links

* Heroku Cedar Stack (Ruby 1.9.1)
* PhantomJS
* http://qiita.com/items/875cdbd6a12d482b71a4

Heroku
------
http://phantom-getlinks.herokuapp.com


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


LICENSE
=======
(The MIT License)

Copyright (c) 2013 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
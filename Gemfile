##  Commands for installing below Modules
# > Gem install bundle
# > bundle install
source 'https://rubygems.org'

gem "jekyll" # IS THIS EVEN REQUIRED?
gem 'github-pages', group: :jekyll_plugins  #
gem 'jekyll-octicons'                       # HTML > {% octicon smiley size:large class:"right left" aria-label:hi %}

##  HTML-proofer, current error (rake test --trace)
# LoadError: Could not open library 'libcurl': The specified module could not be found.
# Could not open library 'libcurl.dll': The specified module could not be found.
# Could not open library 'libcurl.so.4': The specified module could not be found.
# Could not open library 'libcurl.so.4.dll': The specified module could not be found.
# gem 'curl' <- not needed for travisCI

gem 'html-proofer'                          # > rake test
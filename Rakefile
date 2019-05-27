## Read documentation from this README (configuration)
## https://github.com/gjtorikian/html-proofer

require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = { :assume_extension => true, url_ignore => ["http://www.w3.org/2005/Atom/"] }
  HTMLProofer.check_directory("./_site", options).run
end
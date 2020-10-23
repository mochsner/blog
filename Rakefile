## Read documentation from this README (configuration)
## https://github.com/gjtorikian/html-proofer

## Run with "rake test"
## NOT RECOMMENDED FOR USE ON WINDOWS (use travis CI)

require 'html-proofer'

task :test do
  # sh "bundle exec jekyll build"
  options = { :assume_extension => true }
  HTMLProofer.check_directory("./_site", options).run
end
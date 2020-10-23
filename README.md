# mochsner.github.io
This website is based on Jekyll.

# Ubuntu OS Setup
1. Install Ruby `sudo apt install ruby`
2. Install Jekyll Dependencies
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```
3. Setup Gem Installation Directory
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
4. Install Jekyll and Bundler (both used to serve site)
```bash
gem install jekyll bundler
```
5. Install Rake (testing) 
```bash
gem install rake
```

6. Update bundler + Install gems using bundler
```bash
# Note: you may be asked to update additional plugins. Do so.
bundle update --bundler
bundle install
```
7. Run Rake / Unit Tests
```
rake test
```
8. Build Jekyll Locally
```
bundle exec jekyll serve --livereload
```
9. ???
10. Push changes to master!

# TODO: Cross-Linux Docs (e.g. using Bundle)

## Useful Documents
* [https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll](Testing Locally)
* [https://github.com/barryclark/jekyll-now](Jekyll Now)

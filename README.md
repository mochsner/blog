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
4. Install Jekyll `gem install jekyll bundler`
5. Install Rake (testing) `gem install rake`

## Commands
# Run Rake Tests
- rake test
# Build Jekyll Locally
- bundle exec jekyll serve

# TODO: Cross-Linux Docs (e.g. using Bundle)

## Useful Documents
* Testing Locally: https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll
* https://github.com/barryclark/jekyll-now

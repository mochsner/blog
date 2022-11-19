---
layout: website-frame
---
# mochsner.github.io

#### Posix-compatible script for installing & running all of below individual Steps
```bash
if [[ command -v ruby &> /dev/null ]] && [[ command -v bundle &> /dev/null ]]
then
    echo "Ruby/gem already installed"
else
    echo "Installing Ruby/Bundler first"
    sudo apt-get install ruby-full build-essential zlib1g-dev -y
    gem install jekyll bundler rake
    exit
fi

```
This website/blog is based on Jekyll!

#### Manual Ubuntu OS Pre-Requisites

1. Install Jekyll Dependencies

    ```bash
    sudo apt-get install ruby-full build-essential zlib1g-dev -y
    ```

<!-- 3. Setup Gem Installation Directory

    ```bash
    echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
    echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
    echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    ``` -->

4. Install Jekyll and Bundler (both used to serve site), then rake for unit testing.

    ```bash
    gem install jekyll bundler rake
    ```

## Build Project


6. Install gems using bundler

    ```bash
    # Note: you may be asked to update additional plugins. Do so.
    bundle install
    ```

9.  Build Jekyll Locally

    ```bash
    # This builds the files to use dynamic html pages
    bundle exec jekyll build
    # This serves the rest of the files (--livereload is optional)
    bundle exec jekyll serve --livereload
    ```

- (OPTIONAL) Update bundler
    
    ```
    bundle update --bundler
    ```

- (OPTIONAL) Run sass/scss compiler

    ```cli
    sass --watch style/
    ```

- (OPTIONAL) Run Rake / Unit Tests

    ```bash
    rake test
    ```

## TODO: Cross-Linux Docs (e.g. using Bundle)

## Useful Documents

* [https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll](Testing Locally)
* [https://github.com/barryclark/jekyll-now](Jekyll Now)

# Zero_Width_Spaces_Remover

Follow-up on https://github.com/martinsbalodis/web-scraper-chrome-extension/issues/169#issuecomment-304902979


## Purpose

Takes all the csv files in the folder `src`, removes all zero-width spaces within them and writes the result in `cleansed`.

## How to run

```
git clone git@github.com:quilicicf/Zero_Width_Spaces_Remover.git
cd Zero_Width_Spaces_Remover
npm install
gulp
```

The output should look like this:

```
gulp
[18:07:09] Using gulpfile ~/github/Zero_Width_Spaces_Remover/gulpfile.js
[18:07:09] Starting 'watch'...
[18:07:09] Finished 'watch' after 9.01 ms
[18:07:09] Starting 'default'...
[18:07:09] Finished 'default' after 6.7 μs
```

Each time a file is cleansed, a new line should appear:

```
File spaced.csv updated [✓]
```

## How it works

The script watches the folder `src` and whenever a file is added/updated/removed, it updates its counterpart in `cleansed`.

Just run the script, put all the files you want to clean in `src` and retrieve them clean and ready to serve in `cleansed`.

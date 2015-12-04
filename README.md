# gulp-starter

### Required preliminaries

1. install gulp-cli 4.0 from Github:

```
npm install -g gulpjs/gulp-cli#4.0
```

2. other installs:

```
npm install -g babel-eslint eslint eslint-plugin-react postcss-cli stylelint jsonlint
```

To View available tasks:

```
gulp -T
```

3. Primary tasks:

```
gulp
```

This default task will open a browser on port 4000, watch scripts, styles and html for changes, and reload browser after transpiling 

```
gulp production
```

This task will open a browser on port 4001 after transpiling, minifying, sourcemap-ifying and gzipping. The browser will use optimized asset paths.

### Todo

1. Add cache-busting using gulp-rev-all
2. Add image workflow and optimization
3. Get mocha tests working (and working in coffee?)

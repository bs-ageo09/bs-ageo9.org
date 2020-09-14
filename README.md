# bs-ageo9.org 
[![Netlify Status](https://api.netlify.com/api/v1/badges/4090ca41-82c6-4dd4-87ca-84dacadcda77/deploy-status)](https://app.netlify.com/sites/prod-bsageo09/deploys)

website of 9th Ageo Group, Saitama Scout Council, SAJ

## frontend
netlify + nuxt.js(generate static page)

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

## backend
google app script + typescript + clasp

frontend configuration
> ./plugins/constants.js

```bash
# installation deployment tool
$ npm i -g @google/clasp
$ clasp login

# upload and deployment
$ clasp push
$ clasp open
```

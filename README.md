# bs-ageo9.org
![clasp](https://github.com/bs-ageo09/bs-ageo9.org/workflows/clasp/badge.svg?branch=master)

website of 9th Ageo Group, Saitama Scout Council, SAJ

## frontend
cloudflare pages + nuxt.js(generate static page)

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
> ./env.xxx.js

```bash
# installation deployment tool
$ npm i -g @google/clasp
$ clasp login

# upload and deployment (rewriting of .clasp.json is required for execution)
$ clasp push
$ clasp open
```

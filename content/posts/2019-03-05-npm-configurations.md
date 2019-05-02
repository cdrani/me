---
template: post
title: NPM Configurations
slug: npm-configurations
draft: true
date: 2019-03-05T16:28:26.947Z
description: >-
  I love npm, you love npm, but does it love us? Yes! NPM has some great options
  that we can configure to be just for us. Let's take a look at some ways we can
  personalize the very first step in our interaction with npm - the
  initialization step!
category: tutorial
tags:
  - npm
  - config
---

I love npm, you love npm, but does it love us? Yes! NPM has some great options that we can configure to be just for us. Let's take a look at some ways we can personalize the very first step in our interaction with npm - the initialization step!

Most of our projects require the use of node and very often some packages from the NPM registry. A package.json file is mandatory for these projects filled with such metadata as name, version, author, etc. To initialize a node project we usually go through the following steps:

1. `npm init`
2. Fill in the command prompts

We would then end up with a package.json file like this:

```json
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Initially, maybe we wouldn't put too much forethought in how to fill it in, resulting in us just pressing **ENTER** and having the defaults filled in for us. However, even that can become cumbersome, thus leading us to seek out a faster method: `npm init -y`. This approach is the same as above, but with the option of foregoing all the prompts and creating the json file with some preset values.

## SETUP BASIC DEFAULTS

The defaults generated are alright, but what if we want to personalize them? There is a way - through the `.npmrc` file. There are many configurations available and for many environments such as global, user, and per project (include a `.npmrc` file in your root project directory), to name a few. What we'll focus on is the user defaults for the **package.json**.

### CONFIG FILE

In your terminal: `npm config list -l | grep config`

You should be outputted with this:

```bash
; cli configs
; userconfig /Users/cerulean/.npmrc
; builtin config undefined
globalconfig = "/usr/local/etc/npmrc"
userconfig = "/Users/cerulean/.npmrc"
```

Keying in on the `userconfig` line, we can see that the config file we want is a dot file on the root user directory. Furthermore, upon opening it (or just `cat .npmrc`) , the file is just `key: value` pairs. There are some values pertaining to the **package.json** file we can change easily:

```bash
init.author.name
init.author.email
init.author.url
init.author.license
init.version
```

Now we can use a text editor to edit the file by changing the key values or we can use the terminal:

`npm config get <key>` to retrieve the current value of key

`npm config set <key> <value> [-g|--global]` to set the value for a key (with a global option)

EX:

`npm config get init.author.url` will output **https://github.com/cdrani** as it's the default I set.

`npm config set init.license MIT` will default your license field to **MIT** instead of the default **ISC**.

### IMPLEMENTATION #1

> npm config set init.version 0.1.0
>
> npm config set init.author.name cdrani
>
> npm config set init.author.email charlesdrani@gmail.com
>
> npm config set init.author.url https://github.com/cdrani
>
> npm config set init.author.url MIT

Resulting in this default **package.json** file when we `npm init -y`:

```json
{
  "name": "example",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "cdrani <charledrani@gmail.com> (https://github.com/cdrani)",
  "license": "MIT"
}
```

This is incrementally better. Note that we have setup the default version, author, and license fields to be particular to us, however we can do much better. Let's add defaults to things we almost certainly have to add and/or edit before we get any further in our projects.

### IMPLEMENTATION #2

Suppose we are a specific type of developer who specializes in creating specific types of projects using a specific framework which requires specific packages, being specifically lazy we don't want to start with the default json file generated for us, but we want to make it specifically unique to us with the ability still to adjust the defaults. How can we do that (and avoid using specific and all of its suffixes for the rest of this post)? By way of an **.npm-init.js** file in our root directory we can write up our entire **package.json** file manually and/or include some prompts with defaults values which we can overwrite if we so choose.

This file might already be provided for us, but if not then we can create it in your root directory: `touch ~/.npm-init.js` and open it using your favorite text editor. As per per [npm](https://docs.npmjs.com/getting-started/using-a-package.json#customizing-the-init-process), you can customize your JS file using this approach:

```javascript
module.exports = {
  customField: 'Custom Field',
  otherCustomField: 'This field is really cool'
}
```

which outputs this **package.json**:

```json
{
  "customField": "Custom Field",
  "otherCustomField": "This field is really cool"
}
```

Questions can also be customized using **prompts**:

> module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL")

We will use a combination of both methods. Essentially we want the following fields:

- name
- version
- main
- description
- scripts
- keywords
- dependencies
- devDependencies
- repository
- author
- license
- bugs
- homepage

**NOTE**: Including the dependencies and devDependencies fields as your packages are most likely to be have been updated between each new project state, but is included here just for demonstration purposes. However, this can be remedied by using a package such as [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

Here is a possible sample **.npm-init.js** file:

```js
const url = 'https://github.com/cdrani/'

const pwd = () => {
  const path = process.env.PWD.split('/')
  return path[path.length - 1]
}

module.exports = {
  name: prompt('name', `${pwd()}`, name => `${name}`),
  version: prompt('version', '0.1.0', version => `${version}`),
  main: prompt('main file', 'index.js', main => `${main}`),
  description: prompt('description', 'awesome project', desc => `${desc}`),
  scripts: {
    clean: 'rimraf dist',
    build: 'npm run clean && webpack',
    serve: 'webpack-dev-server'
  },
  keywords: prompt('keywords', 'node, webpack, react', list => list.split(' ')),
  dependencies: {
    'prop-types': '^15.7.2',
    react: '^16.8.3',
    'react-dom': '^16.8.3'
  },
  devDependencies: {
    rimraf: '^2.6.2',
    webpack: '^4.29.6',
    'webpack-dev-server': '^3.2.1'
  },
  repository: {
    type: prompt('source control', 'git', type => `${type}`),
    url: prompt('repo url', `${pwd()}`, repo => `${url}${repo}.git`)
  },
  author: prompt('author', 'cdrani', author => `${author}`),
  license: prompt('MIT | ISC | BSD', 'MIT', license => `${license}`),
  bugs: prompt('bugs', `${pwd()}`, repo => `${url}${repo}/issues`),
  homepage: prompt('homepage url', `${url}${pwd()}`, link => `${link}`)
}
```

and here is the output file for a test project:

Here is a live demo:

For further configurations or to extend your npm init experience reference [promzard](https://github.com/npm/promzard), [init-package-json](https://github.com/npm/init-package-json), and/or [npm docs](https://docs.npmjs.com/).

Here is this post's repo: [npm-config-example](https://github.com/cdrani/npm-config-example).

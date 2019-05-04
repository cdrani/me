---
template: post
title: Semantic Versioning
slug: semantic-versioning
draft: false
date: 2019-02-17T20:45:06.100Z
description: >-
  I have been creating node projects for a year and some change now, but I’ve
  noticed that the version number in my package.json is always at 1.0.0,
  regardless of any new changes, fixes, or functionality I add to the projects.
  An ever-evolving, maintainable project should have different versions to log
  the journey.
category: Tutorial
tags:
  - semver
  - semantic version
---

I have been creating node projects for a year and some change now, but I’ve noticed that the version number in my package.json is always at 1.0.0, regardless of any new changes, fixes, or functionality I add to the projects. An ever-evolving, maintainable project should have different versions to log the journey.

## How Do We Keep Track of Our Projects?

The encouraged standard is semantic versioning by [semver.org](https://semver.org). semver advocates that projects are versioned as X.Y.Z, where:

```css
X is the major version
Y is the minor version
Z is the patch version
```

What does this mean? Let's take a look at express for example. Currently it's at version 4.16.4:

```css
4 is the major version
16 is the minor version
4 is the patch version
```

Changes to the version number are dependent on the changes to the project. The patch number (Z) is increased for any bug fixes. The minor version (Y) is increased for any new functionality and/or features added to the project.

**_NOTE_**: For minor and patch versions, there must be no breaking changes, i.e the current version cannot not have any conflicts with any previous versions on the same major version.

Lastly, the major version (X) is increased if -- **_and only if_** -- a breaking change is introduced, such as changing the APIs, which would then prevent backward-compatibility with previous versions.

## On Which Version Should Our Projects Start?

Semver recommends that version 1.0.0 and above should be when the package is ready to shared with the public, therefore one should start at 0.0.0. However, I have only started to release packages when I have the base apis fulfilled, thus I tend to start at 1.0.0. I have seen both instances of starting at 0.0.0 and at 1.0.0, so as an astute package owner make the decision based on your release schedule.

## Example Please!

Of course! Let's have a simple contrived example to explain the concepts above. You can follow along if you like, but the example should be simple just as a visual - in either case you can always refer to the repo [semver-example](https://github.com/cdrani/semver-example).

1. Create a project repo and initialize it with npm or yarn. We'll start of with version 1.0.0 in the package.json as it will releases right away.

2. Create a index.js file in the project repo:

```js
'use strict'
/**
 * @param {Number} num1 - operand
 * @param {Number} num2 - operand
 * @returns {Object} {add: Number, subtract: Number}
 */

module.exports = (num1, num2) => {
  return {
    add: (() => {
      return num1 + num2
    })(),
    subtract: (() => {
      return num1 - num2
    })()
  }
}
```

Our package takes in two numbers and returns an object with keys for the operations performed and the values of said operation. We can test that this works via a node repl:

```bash
> node
> const math = require('./index')
> const result = math(12, 3)
> console.table(result)
  ┌──────────┬────────┐
  │ (index)  │ Values │
  ├──────────┼────────┤
  │   add    │   15   │
  │ subtract │   9    │
  └──────────┴────────┘
```

Everything works according to plan! We release it on npm at 1.0.0, everyone loves it! Soon, however, we get requests for multiply and divide functions. We rush to implement these new functionalities:

```js
'use strict'
/**
  * @param {Number} num1 - operand
  * @param {Number} num2 - operand
  * @returns {Object} 
     { 
       add: Number, 
       divide: Number, 
       multiply: Number,
       subtract: Number 
     }
  */

module.exports = (num1, num2) => {
  return {
    add: (() => {
      return num1 + num2
    })(),
    subtract: (() => {
      return num1 - num2
    })(),
    divide: (() => {
      return num1 / num2
    })(),
    multiply: (() => {
      return num1 / num2
    })()
  }
}
```

In our haste to appease the masses, we release 1.1.0 with the new backward-compatible functionality, not noticing that our multiply functionality is a repeat of our divide. It goes unnoticed, as everyone knows how to multiply huge values, but addition, subtraction, and division are easy-peasy. Eventually, someone needs to multiply 1 with 3, but they receive a dizzying line of 0.3333333333333333, which is incorrect according to rules and such. A pull request is sent in with this change:

```diff
multiply: (() => {
  - return num1 / num2
  + return num1 * num2
})()
```

This pull request fixes our bug, so we push an update version 1.1.1. No more riots or clamoring for new features. It dawns on you that users might not require the sum, difference, and quotient, especially when they just want the product of 1 and 3. You feverishly come upon a solution that has four different functions which are then exported from the module.

```js
'use strict'

module.exports = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2
}
```

Note: _Comments have been removed and would most likely have been moved to a readme._

Let's manually test this:

```bash
> node
> const { add } = require('./index')
> add(12, 3)
> 15
```

Now, the important question - is this a breaking change? We can determine this by trying to make use of the functionality we had in the previous versions. Recall that previously we had one function which return an object. This iteration provides four functions that we can import, with each function returning a Number type, thus making this not backwards-compatible. If a user updated to this new code, all their code using the previous version will fail. We push this new update with an incremented major version number to 2.0.0.

That's just about the gist of semantic versioning. For an indepth look into, please reference [semver](https://semver.org). For spelling, grammar, suggestions, and/or improvements, please file an issue at [cdrani/me](https://github.com/cdrani/me).

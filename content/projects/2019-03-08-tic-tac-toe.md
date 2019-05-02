---
template: project
title: Tic Tac Toe
slug: ttt
draft: false
date: 2019-03-08T22:46:59.670Z
description: Tic Tac Toe application built with vanilla javascript and bulma.
hero: ../../static/media/ttt.png
category: Project
tags:
  - javascript
  - bulma
technologies:
  - javascript
  - bulma
---

Tic Tac Toe application built with vanilla javascript and [bulma](https://bulma.io).

This was basically a port of a ruby tic tac toe project made to run on the cli which can be found here: [ruby-ttt](https://github.com/team5-microverse/ttt).

I have probably already mentioned this numerous times before, but there's no greater joy than re-using your own code in other projects. I made use of [arr-chunk](https://www.npmjs.com/package/arr-chunk), an npm package that chunks a flat array to a specified size, allowing me to change my board into a 3X3 board when checking for winning combinations in the Board class.

I suppose I could incorporate an AI by implementing the minimax algorithm, but I mostly use this app to play with my younger sibling. Another thing to consider is moving this from gh-pages to netlify. Currently I have to remember to run build and gh-pages script to keep it in sync, but sometimes I forget, which results in making commits just for the build step. Netlify can do all that automatically when I make any pushes to the master branch. All future projects will most likely be deployed there as well.

Github: [tttjs](https://github.com/cdrani/tttjs)

Live: [tttjs](http://cdrani.github.io/tttjs)

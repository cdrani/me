---
template: project
title: 'xkcli: a comic viewer on your terminal'
slug: xkcli-a-comic-viewer-on-your-terminal
draft: false
date: 2019-02-15T06:42:01.966Z
hero: '../../static/media/xkcli.png'
description: >-
  A cli-based package that users can utilize to view comics from the
  ever popular xkcd.com site. Various subcommands allow users to view current,
  specific, and random comics. Additionally, users can "page through" comics
  using next and previous subcommands. Last, but not least, users can modify the
  color and style of the title and alt text of the comics.
category: Project
tags:
  - xkcli
  - xkcd
  - npm
---
xkcd.com is a site created by Randall Munroe. The site contains comics with content stemming from a range of topics like maths, sciences, technology, to current events and everything in between.

I had been thinking about creating an npm package that would run like an executable. After I came upon the official xkcd api, I knew what I wanted to build.

My solution is [xkcli](https://npmjs.com/package/xkcli) at npm. 
This app allows users to retrieve current, random, and specific comics via subcommands. The comic is then displayed on the terminal with the title, image, and alternate text. Additionally users can navigate through the comics via a next and previous subcommands. A bonus feature is allowing users to change the color of the displayed title and alternate text via [chalk](https://github.com/chalk/chalk#styles) options.

Takeaways:
- reinforce understanding of async/await for fetching data
- split separation of logic from one complex function into small
concise functions (especially from v1 to v2)
- write documentation on how to use packages

Github Repo: [xkcl](https://github.com/cdrainxv/xkcli)

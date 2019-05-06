---
template: post
title: Node Version Management
slug: node-version-management
draft: false
date: 2019-05-06T01:28:43.511Z
description: >-
  The Node development pace is quite quick, therefore at any moment in time we
  might have different projects in development which we need to test on multiple
  versions of node or the codebase could rely on a specific node version. These
  and other scenarios necessitate the need for having a version manager to
  effortlessly switch between multiple node versions.
category: tutorial
tags:
  - node
  - nvm
  - 'n'
---
# NODE VERSION MANAGEMENT

The Node development pace is quite quick as you can see from their [changelogs](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md), therefore at any moment in time we might have different projects in development which we need to test on multiple versions of node, or the codebase could rely on a specific node version. These and other scenarios necessitate the need for having a version manager to switch between multiple node versions.

There are two node version managers I know, [nvm](https://github.com/creationix/nvm) and [n](https://github.com/tj/n). For quite a while I've been using **`nvm`** as it was the only one I knew and I liked it enough, but I transitioned to **`n`** early last year.

## INSTALLATION

There are many ways to install it, but I recommend the third-party install method [n-install](https://github.com/mklement0/n-install). I love this approach because it allows for easy updating and uninstallation of **n**. I recommend you to purge all instances of node and npm in your system prior to installing **n**. Follow this SO question: [Uninstall Node](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x).

```bash
> curl -L https://git.io/n-install | bash
 ```

And that's it! The latest stable node version and npm will be setup for you. Confirm it like below:

> ```bash
> node -v && npm -v
> v12.1.0
> 6.9.0
> ```

**NOTE**: **`node`** and **`npm`** versions may vary at the time you read this post.

To update **`n`** (if there are any updates) just run **`n-update`**, and to uninstall node, npm, and n, **`n-uninstall`**.

## COMMON COMMANDS

| __**command**__ | __**description**__ |
|:------|:--------|
| **`n`** | list versions installed | 
| **`n latest`** | install/activate latest node release |
| **`n <version>`** | install specific node version |
| **`n prune`** | delete all versions except the current version|
| **`n rm <version ...>`** | remove specific node version(s) |      


Reference the links above for in-depth installation steps and CLI commands for **n**. Happy versioning!

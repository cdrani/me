---
template: project
title: 'Book CMS: An Online BookMark'
slug: book-cms-an-online-bookmark
draft: false
date: 2019-02-18T14:49:13.965Z
description: >-
  This is one of the more challenging projects I have ever attempted. At the
  onset, it seemed perfectly simple - use some react, redux to manage the state,
  throw in some express and mongodb for the backend, and voila!
category: Project
tags:
  - react
  - apollo
  - graphql
---
This was one of the more challenging projects I have ever attempted. At the onset, it seemed perfectly simple - use some react, redux to manage the state, throw in some express and mongodb for the backend, and voila!

I had worked with React in several projects prior, had just gotten comfortable with redux and how to integrate it with react with a lot of help from Ohans Emmanuel's [redux series](https://thereduxjsbooks.com/). Originally I would have used rails for the backend, but I wanted to try Sequelize, an ORM for SQL databases with several dialects, instead of defaulting to Mongoose.

I started off with the front end, created the components, setup the redux actions, dispatchers, and reducers, etc. The forms would submit, and render a list item with the book details as expected. Additionally I created a function to seed the store with several books, and still everything came up roses.

At this point it was time to create the backend with the CRUD functionality. I should mention at this point that I had been reading Robin Wieruch's [Road to GraphQL](https://roadtoreact.com/course-details?courseId=THE_ROAD_TO_GRAPHQL), and had completely switched from using a REST api to a GraphQL api with Apollo Server. Following along with the book, I created schemas, queries, mutations, and resolvers that were pertinent to what my front end required:


- signin/signup/signout
- creating books
- deleting books
- getting a user's books
- updating a book's detail information (title, author, etc)
- updating a user's current location in book (i.e page, chapter)

My greatest insight I took from the book was how to setup jwt tokens to authenticate users and thus prevent unauthorized users from tampering with data that was not theirs. I wish it had also mentioned how to setup a refreshToken as this proved to be quite difficult for me to implement until I came across [apollo-connector-kit](https://github.com/ecerroni/apollo-connector-kit). With a refreshToken users would be essentially authenticated forever, lest they don't use the site before the refreshToken expires, then they would need to be authenticated again.

As the backend was complete and hosted on heroku, I then proceeded to associate the api with the front end. This was somewhat painful as I discovered that more and more was my redux store unnecessary due to my conforming to use both Apollo Client and its handy apollo-link-state package. This proved to be a godsend as Apollo Client provides caching and updates the store automatically. At this point I had also started using React's useState hooks to refactor my Form class components to functional components. In refactoring the select component to filter the books list by category, I came upon [react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) to update the local state of the select value, which eventually led me to refactor all of the Query and Mutation components to make use of the useQuery and useMutation hooks.


All in all, the project was a great learning experience, mostly because I tried some new technologies, reinforced some shaky redux understanding, and implemented authentication and authorization outside of using a rails gem like devise.

Github Repo: [book-cms](https://github.com/cdrani/book-cms)
             [bookcms-api](https://github.com/cdrani/bookcms-api)


Live Site: [https://book-cms.herokuapp.com](https://book-cms.herokuapp.com)

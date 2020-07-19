# Enter The Mongodb Realm

My first attempt at a mongodb realm application. You may find some of my notes odd or obvious. As a new developer many of these tips/skills are new to me, so this documentation is also to help me.

## Quick Summary of Planned Tech Stack

- React (functional/hooks) for front-end
  - Utilizing Realm Web SDK for user authentication
  - Utilizing Apollo library to interact with Realm GraphQL SDK
- Realm for back-end (serverless)
  - GraphQL will handle some authorization of queries (hopefully)

## Using Environment Variables with React

- How to use environmental variables with React: https://create-react-app.dev/docs/adding-custom-environment-variables/
  - Note: don't skim the documentation like me and ignore the fact that your custom envs need to start with "REACT_APP\_"

## Installing Realm for Web

- Getting started for Web: https://docs.mongodb.com/realm/web/quickstart/
- Gettign started for Web with React: https://docs.mongodb.com/guides/realm/react-web-quickstart/

## Log in a user to Realm

- MongoDB documentation on how to authenticate a user for web applications: https://docs.mongodb.com/realm/web/authenticate/

## Setting up Apollo for React (used for GraphQL)

- How add Apollo to your React application. This is recommended when using the GraphQL SDK to perform GraphQL queries: https://docs.mongodb.com/realm/graphql/connect/
  - Watch out when installing the necessary node modules. @apollo/react-hooks is used in the doucmentation, but not included in the command listed for installing necessary modules

## Connect client to GraphQL

- MongoDB documetation on how to create a client (front-end) to connect to the Realm created GraphQL SDK: https://docs.mongodb.com/realm/graphql/connect/
  - Note: This is heavily focused on React as the front-end framework

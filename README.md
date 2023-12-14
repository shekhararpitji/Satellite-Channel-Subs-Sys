# Satellite-Channel-Subs-Sys
Aim: To create a program to build a Satellite Channel (DTH) Subscription System like TataSky. The user should be able to subscribe to a Package with Annual plan. The user should also be able to subscribe to an add-on pack for a monthly subscription to a sports channel.

Use the latest version of Node.js and pnpm (Node Package Manager).


Create Models:

Define the models for Channel, Package, Plan, and Subscription using classes or TypeScript interfaces to represent their attributes and relationships.
Database Schema and Connection:

Decide on the database(SQL)  and create the schema for storing channels, packages, plans, and subscriptions.
Use a library like Prisma/Drizzle to connect to and interact with the database. Create migrations

API Documentation:

Use tools like Swagger or OpenAPI to create API documentation.
Layering:

Implement a proper project structure with separate layers for API, Service, and DAO (Data Access Object).
Authentication and Authorization:

Implement authentication and authorization using libraries like Passport.js or JWT (JSON Web Tokens) for user roles like Admin, Operator, and User.
Design Patterns:

Utilize design patterns like Singleton, Factory, or Observer wherever applicable for better code organization and maintainability.
Unit Testing:

Write comprehensive unit tests using testing libraries like Jest or Mocha along with mocking libraries like Sinon for testing asynchronous code.
Optimized Code:

Optimize the code for readability, performance, and scalability.
Logging:

Implement meaningful logging using libraries like Winston or Bunyan.

Integration with Analysis Tools:

Integrate the project with analysis tools like ESLint for code linting and SonarQube for code quality analysis.
Node.js Features:

Express.js and Web APIs:

Use Express.js to build RESTful APIs for channel subscriptions, packages, plans, and user interactions.

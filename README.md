# Keanu Image Generator Backend

This is the backend for the Keanu Image Generator application. It provides a GraphQL API to retrieve images of Keanu Reeves based on user-specified preferences such as dimensions, age representation, and style.

## Technologies Used

- **Apollo Server**: GraphQL server library.
- **TypeScript**: Typed superset of JavaScript.
- **Docker**: Containerization platform.

## Prerequisites

Make sure you have Docker installed on your machine.

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:

   ```bash
   cd keanu-backend
   ```

3. Build the Docker container:

   ```bash
   docker build -t keanu-backend .
   ```

4. Run the Docker container:

   ```bash
   docker run -d -p 4000:4000 --name keanu-backend keanu-backend
   ```

5. The GraphQL server should now be running. You can access the GraphQL Playground at `http://localhost:4000/graphql` in your browser.

## GraphQL API

### Query

#### `keanuImage`

Retrieve an image of Keanu Reeves based on specified parameters.

```graphql
query {
  keanuImage(width: Int!, height: Int!, young: Boolean!, grayscale: Boolean!): String
}
```

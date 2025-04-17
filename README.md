# Capstone API

This is the API for the Capstone project. It provides endpoints for managing users, sliders, and articles.

## Documentation

The API documentation is available at [http://13.215.253.107:5000/v1](http://13.215.253.107:5000/v1).

To run the documentation locally:

```bash
npm run docs
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

- `/register` - Register a new user
- `/login` - Log in as a user
- `/admin` - Log in as an admin
- `/sliders` - Get all sliders
- `/sliders/{id}` - Get a slider by ID
- `/articles` - Get all articles
- `/articles/{id}` - Get an article by ID
- `/admin/sliders` - Create, update, and delete sliders (admin only)
- `/admin/articles` - Create, update, and delete articles (admin only)

For more details, see the [API documentation](http://13.215.253.107:5000/v1).

## Running the API

To run the API in development mode:

```bash
npm run start:dev
```

To run the API in production mode:

```bash
npm run start:prod
```

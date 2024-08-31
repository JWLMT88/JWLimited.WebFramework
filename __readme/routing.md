# JWLimited WebFramework - Routing
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
## Table of Contents
1. [Introduction](#introduction)
2. [Setting Up the Router](#setting-up-the-router)
3. [Defining Routes](#defining-routes)
4. [Navigation](#navigation)
5. [Middleware and Hooks](#middleware-and-hooks)
6. [Error Handling](#error-handling)
7. [Advanced Features](#advanced-features)
8. [Best Practices](#best-practices)

## Introduction

The JWLimited WebFramework Router is a powerful and flexible routing system for single-page applications (SPAs). It uses a node-based structure to efficiently manage routes and provides features such as middleware, hooks, and caching.

## Setting Up the Router

To start using the router, you need to create an instance of the `Router` class:

```javascript
const router = new Router({
  mode: "history", // or "hash"
  base: "", // base URL for your application
  scrollBehavior: null, // optional scroll behavior function
  errorHandler: (error) => console.error(error), // custom error handler
  notFoundHandler: () => "<h1>404 Not Found</h1>", // custom 404 handler
  loadingComponent: () => "<div>Loading...</div>" // custom loading component
});
```

## Defining Routes

Routes are defined using the `addRoute` method:

```javascript
router.addRoute("/path", handlerFunction, options);
```

- `"/path"`: The URL path for the route
- `handlerFunction`: A function that returns the content for the route
- `options`: An object containing additional route options

Example:

```javascript
router.addRoute("/home", () => "<h1>Welcome Home</h1>", { name: "home" });
router.addRoute("/user/:id", (params) => `<h1>User ${params.id}</h1>`, {
  name: "user",
  params: {
    id: (value) => /^\d+$/.test(value) // Validate that id is a number
  }
});
```

## Navigation

To navigate between routes, use the `navigate` method:

```javascript
router.navigate("/home");
```

For named routes, you can generate the path using `generatePath`:

```javascript
const userPath = router.generatePath("user", { id: 123 });
router.navigate(userPath);
```

## Middleware and Hooks

### Middleware

Add global middleware using the `use` method:

```javascript
router.use(async (to, from) => {
  // Perform some action before each route change
});
```

### Hooks

The router supports several hooks for fine-grained control:

- `beforeEach`: Runs before each navigation
- `afterEach`: Runs after each navigation
- `beforeEnter`: Runs before entering a specific route
- `afterEnter`: Runs after entering a specific route
- `beforeLeave`: Runs before leaving a specific route
- `afterLeave`: Runs after leaving a specific route

Example:

```javascript
router.on("beforeEach", async (to, from) => {
  // Check authentication status
});

router.on("beforeEnter", "/admin", async (to, from) => {
  // Check admin permissions
});
```

## Error Handling

Custom error handling can be defined when creating the router:

```javascript
const router = new Router({
  errorHandler: (error) => {
    console.error("Navigation error:", error);
    // Display error message to user
  }
});
```

## Advanced Features

### Caching

The router automatically caches rendered content. To clear the cache:

```javascript
router.clearCache(); // Clear all cache
router.clearCache("/specific-path"); // Clear cache for a specific path
```

### Scroll Behavior

Customize scroll behavior after navigation:



```javascript
const router = new Router({
  scrollBehavior: (to, from) => {
    // Return desired scroll position
    return { x: 0, y: 0 };
  }
});
```

## Best Practices

1. **Organize Routes**: Group related routes together and use a consistent naming convention.
2. **Use Named Routes**: This makes it easier to generate and maintain URLs throughout your application.
3. **Implement proper error handling**: Always provide fallback content and meaningful error messages.
4. **Optimize Performance**: Use the built-in caching mechanism and lazy-load route components when possible.
5. **Security**: Validate route parameters and implement proper authentication/authorization checks in your route handlers and middleware.

By following this guide, you'll be able to effectively use the JWLimited WebFramework Router to create robust and efficient single-page applications.
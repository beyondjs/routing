Here is a detailed `README.md` file for the `beyond-js/routing` package based on the code provided:

````markdown
# Beyond.js Routing

The `beyond-js/routing` package is a versatile client-side routing solution designed for modern web applications. It
handles routing modes, URL management, navigation history, and more, all while providing seamless integration for
dynamic web applications.

## Features

-   Supports both `Hash` and `Pathname` routing modes.
-   Automatic handling of URI parsing, query strings, and navigation.
-   Integration with the browser’s history API for smooth state management.
-   Customizable redirection logic.
-   Full event-driven architecture with support for custom events.

## Installation

```bash
npm install @beyond-js/routing
```
````

## Usage

### Basic Setup

```typescript
import { routing } from '@beyond-js/routing';

// Initialize routing
routing.setup();

// Navigate programmatically
routing.pushState('/new-path');

// Listen to routing changes
routing.on('change', () => {
	console.log('Route changed to:', routing.uri.pathname);
});
```

### Routing Modes

The package supports two routing modes:

1. **Hash Mode**: URLs are managed using the hash fragment (e.g., `http://example.com/#/path`).
2. **Pathname Mode**: URLs are managed using the path portion (e.g., `http://example.com/path`).

The routing mode is automatically determined based on the environment and configuration.

```typescript
// Check the current routing mode
if (routing.mode === RoutingMode.Hash) {
	console.log('Hash mode is active');
}
```

### Programmatic Navigation

You can programmatically navigate within your application using `pushState` and `replaceState`.

```typescript
// Push a new state to the history
routing.pushState('/new-path', { someState: 'example' });

// Replace the current state
routing.replaceState({ anotherState: 'example' }, 'New Title', '/another-path');
```

### Handling Redirects

Custom redirection logic can be implemented by defining the `redirect` method.

```typescript
routing.redirect = async uri => {
	if (uri.pathname === '/old-path') {
		return '/new-path'; // Redirect to a new path
	}
};
```

### Backward and Forward Navigation

Control the browser history using `back` and `forward` methods.

```typescript
routing.back(); // Go back in history
routing.forward(); // Go forward in history
```

## API Reference

### Routing Class

#### Properties

-   `mode: RoutingMode`: The active routing mode (`Hash` or `Pathname`).
-   `history: BeyondHistory`: An instance managing browser history.
-   `uri: URI`: The current URI being managed by the router.

#### Methods

-   `setup()`: Initializes the routing system.
-   `pushState(uri: string, state?: object)`: Pushes a new state to the history and updates the URL.
-   `replaceState(state: object, title: string, uri?: string)`: Replaces the current state and URL.
-   `back()`: Navigates backward in the history.
-   `forward()`: Navigates forward in the history.

#### Events

-   `change`: Triggered whenever the route changes.

### URI Class

The `URI` class provides an easy way to parse and interact with URLs.

#### Properties

-   `pathname: string`: The path part of the URI.
-   `search: string`: The query string of the URI.
-   `qs: QueryString`: A parsed map of query parameters.
-   `hash: string | undefined`: The hash fragment of the URI.

### BeyondHistory Class

Manages the history stack and handles the browser’s history API.

#### Properties

-   `current: string`: The current URI.
-   `position: HistoryPosition`: The current position in the history stack.

#### Methods

-   `pushState(uri: string, state: any)`: Pushes a new state to the browser’s history.
-   `replaceState(state: any, title: string, uri: string)`: Replaces the current state.
-   `back()`: Moves back in history.
-   `forward()`: Moves forward in history.

## Example Project Structure

```plaintext
src/
│
├── routing.ts           # Main routing logic
├── uri/
│   └── uri.ts           # URI parser and query string handler
└── history/
    ├── history.ts       # Custom history manager
    ├── position.ts      # Tracks the current position in history
    └── records.ts       # Handles the history records
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.

```

This README covers the core functionality and API of the routing package while maintaining clarity for developers looking to integrate it into their projects.
```

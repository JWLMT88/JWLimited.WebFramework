# JWLimited WebFramework Image Lazy Loader

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [How It Works](#how-it-works)
6. [API Reference](#api-reference)
7. [Browser Compatibility](#browser-compatibility)
8. [Performance Considerations](#performance-considerations)
9. [Customization](#customization)
10. [Troubleshooting](#troubleshooting)

## Introduction

The Image Lazy Loader is a module within the JWLimited WebFramework that optimizes image loading on web pages. It implements lazy loading techniques to improve page load times and reduce bandwidth usage by loading images only when they are about to enter the viewport.

## Features

- Automatic wrapping of `<img>` elements in container divs
- Lazy loading of images using Intersection Observer API
- Fallback for browsers that don't support Intersection Observer
- Smooth loading animation with CSS transitions
- Dynamic handling of images added to the DOM after initial load
- Customizable loading behavior and styling

## Installation

Include the `img-lazy-loader.module.js` file in your project:

```html
<script src="path/to/img-lazy-loader.module.js"></script>
```

## Usage

The Image Lazy Loader automatically initializes when the DOM content is loaded. No additional setup is required for basic functionality.

### Basic HTML Structure

```html
<img src="path/to/image.jpg" alt="Description">
```

The module will automatically wrap this image in a container div and apply lazy loading.

## How It Works

1. **Image Wrapping**: On DOMContentLoaded, the module wraps all `<img>` elements in container divs with the class `image-container`.

2. **Lazy Loading**: It uses the Intersection Observer API to detect when an image is about to enter the viewport.

3. **Loading Animation**: When an image loads, it adds a `loaded` class to the image and sets an `image` attribute on the container for styling purposes.

4. **Dynamic Content Handling**: A MutationObserver watches for new images added to the DOM and applies the same lazy loading behavior.

## API Reference

### Functions

#### `handleImageLoad(container, img)`
- Adds loading classes and attributes after a short delay.

#### `setupListeners()`
- Sets up the Intersection Observer for lazy loading.

### Events

The module listens for the following events:

- `DOMContentLoaded`: Initializes the lazy loading behavior.
- `load` on each image: Triggers the loading animation.

## Browser Compatibility

This module uses modern web APIs such as Intersection Observer. It includes a fallback for browsers that don't support these features, ensuring compatibility with older browsers.

## Performance Considerations

- The module uses `setTimeout` to delay the addition of the `loaded` class, allowing for smoother transitions.
- It observes DOM mutations to handle dynamically added content without requiring manual initialization.

## Customization

### CSS Classes

You can customize the appearance of lazy-loaded images by modifying the following classes:

- `.image-container`: The wrapper div for each image.
- `.loaded`: Applied to images after they've been loaded.

### JavaScript Customization

You can modify the `handleImageLoad` function to change the loading behavior or add additional effects.

## Troubleshooting

If images are not lazy loading as expected:

1. Check if the Intersection Observer API is supported in the target browser.
2. Ensure that the script is properly included and executed on the page.
3. Check the browser console for any error messages.

---

For further assistance or to report issues, please contact the JWLimited WebFramework support team.
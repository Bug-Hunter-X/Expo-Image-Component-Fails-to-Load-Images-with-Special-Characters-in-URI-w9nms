# Expo Image Component URI Issue

This repository demonstrates a bug in the Expo `Image` component where images fail to load when their URIs contain certain special characters.  The bug is characterized by the absence of any error messages, making it difficult to diagnose.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with the problematic URI fails to load.

## Solution

The solution involves URL encoding the URI before passing it to the `Image` component. This ensures that all special characters are properly handled.

## Contributing

Contributions are welcome!  Please open an issue or submit a pull request if you have any improvements or additional use cases.
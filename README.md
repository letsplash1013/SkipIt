# SkipIt Chrome Extension

SkipIt is a Chrome extension that automatically clicks annoying interrupting buttons, such as the "Skip Ad" button on YouTube, "Continue generating" on ChatGPT, and close buttons (X) on various webpages. With SkipIt, you can browse uninterrupted, skipping through distractions automatically.

## Features

- **Skip YouTube Ads**: Automatically clicks the "Skip Ad" button when it appears.
- **Auto-Click 'Continue generating' on ChatGPT**: Continues generating responses on ChatGPT without manual intervention.
- **Dismiss Popups**: Automatically clicks buttons like "Skip", "Continue", "Close", and "X" on various sites.
- **Customizable Popup Interface**: Easily toggle the extension on or off through the extension's popup.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch at the top right.
4. Click the **Load unpacked** button and select the folder where you saved this extension.
5. The SkipIt extension will now be loaded and active in Chrome.

## How It Works

The extension uses a content script (`content.js`) to automatically click buttons on pages based on their text content or attributes. Here's how SkipIt works for specific sites:

- **YouTube**: Detects the "Skip Ad" button using the `.ytp-ad-skip-button` class and clicks it when available.
- **ChatGPT**: Detects the "Continue generating" button using the `aria-label="Continue generating"` attribute and clicks it when available.
- **General Websites**: Searches for buttons or links with the text "Skip", "Continue", "Close", or "X" and clicks them automatically.

## Files

- `manifest.json`: Describes the extension and sets permissions.
- `content.js`: Contains the core logic for detecting and clicking interrupting buttons.
- `popup.html`: Provides a simple interface to enable or disable the extension.
- `popup.js`: Controls the popup interface logic.
- `icons/`: Contains the icons used for the extension (16x16, 48x48, 128x128).

## Customization

You can add more site-specific handlers or button-clicking logic by modifying the `content.js` file. Simply add more conditions to target specific elements or classes on different websites.

## License

This project is licensed under the MIT License.

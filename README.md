# GTM Account Color Highlighter

A Chrome extension that adds alternating background colors to Google Tag Manager account cards, making it easier to distinguish between different accounts.

## Features

- Automatically applies different background colors to each GTM account card
- Uses 8 distinct, subtle colors that cycle through accounts
- Adds colored left borders for additional visual distinction
- Works with dynamic content loading (SPA navigation)
- Maintains readability of account and container information

## File Structure

```
gtm-account-highlighter/
├── manifest.json          # Extension configuration
├── content.js            # Main script that applies colors
├── styles.css           # CSS styles for the color scheme
├── README.md            # This file
└── icons/               # Extension icons (optional)
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

## Installation

### For Development/Testing:

1. Download all the files and create the folder structure as shown above
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. Navigate to Google Tag Manager to see the colors applied

### Creating Icons (Optional):

Create PNG icons in the `icons/` folder with the following sizes:
- `icon16.png` - 16x16 pixels
- `icon32.png` - 32x32 pixels  
- `icon48.png` - 48x48 pixels
- `icon128.png` - 128x128 pixels

You can use any simple icon design, such as a colorful folder or tag symbol.

### Icon Attribution

The extension uses paintbrush icons created by Smashicons - Flaticon. 
Attribution link: https://www.flaticon.com/free-icons/paintbrush

## How It Works

1. The extension detects GTM account divs using the selector `div[data-gtm-card].account.card`
2. It applies CSS classes with alternating background colors
3. Uses a MutationObserver to handle dynamic content changes
4. Cycles through 8 different color schemes for visual variety

## Color Scheme

The extension uses 8 subtle background colors:
- Light blue with blue border
- Light yellow with yellow border
- Light green with green border
- Light pink with pink border
- Light purple with purple border
- Light orange with orange border
- Light teal with teal border
- Light amber with amber border

## Permissions

The extension only requires:
- `activeTab` - To access the current Google Tag Manager tab

## Compatibility

- Works with Google Tag Manager interface
- Compatible with Chrome Manifest V3
- Handles single-page application navigation
- Responsive to dynamic content loading
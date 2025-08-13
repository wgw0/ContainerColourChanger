# GTM Account Color Highlighter

A Chrome extension that adds alternating background colors to Google Tag Manager account cards, making it easier to distinguish between different accounts.

## Features

- Automatically applies different background colors to each GTM account card
- Uses 8 distinct, subtle colors that cycle through accounts
- Adds colored left borders for additional visual distinction
- Works with dynamic content loading (SPA navigation)
- Maintains readability of account and container information

# 🚀 Quick Installation Guide

## Step-by-Step Installation

### 1. Download the Extension

Click the **"Code"** button → **"Download ZIP"**

### 2. Extract the Files
- Unzip the downloaded file
- You should see a folder called `gtm-account-highlighter-main` or similar

### 3. Open Chrome Extensions
- Type `chrome://extensions/` in your address bar
- Or go to Chrome Menu → More Tools → Extensions

### 4. Enable Developer Mode

Toggle **"Developer mode"** in the top right corner

### 5. Load the Extension

- Click **"Load unpacked"**
- Select the extracted `gtm-account-highlighter` folder
- Click **"Select Folder"**

### 6. Success! 🎉
The extension is now installed and active. Visit Google Tag Manager to see the colorful account cards!

---

## Troubleshooting

**Extension doesn't appear?**
- Make sure you selected the folder containing `manifest.json`
- Check that Developer mode is enabled

**Colors not showing?**
- Refresh the Google Tag Manager page
- Make sure you're on the accounts overview page

**Need help?**
- [Create an issue](../../issues) on GitHub
- Check our [FAQ section](../../wiki/FAQ)

### Icon Attribution

The extension uses paintbrush icons created by Smashicons - Flaticon. 
Attribution link: https://www.flaticon.com/free-icons/paintbrush

## How It Works

1. The extension detects GTM account divs using the selector `div[data-gtm-card].account.card`
2. It applies CSS classes with alternating background colors
3. Uses a MutationObserver to handle dynamic content changes
4. Cycles through 8 different color schemes for visual variety

## Color Scheme

The extension uses 8 subtle background colors that loop:
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
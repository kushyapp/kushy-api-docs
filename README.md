# Kushy API Documentation
### Powered by Gatsby
The documentation for the Kushy API, a SPA powered by Gatsby and ReactJS, based on Slate for Ruby. Explains the cannabis API in detail for developers to access and transmit data.

## Development Server

Run this command in shell in root gatsby installation folder

`npm run develop`

## Production Build

Run this command in shell in root gatsby installation folder

`npm run build`

Generates static files in /public/ folder.

## Adding Pages

Add new pages as components in `/src/content/`. Wrap topics/sections in `<section id="strains-all" data-section="strains-all">` tags with the appropriate unique data-section attribute.

*Code Snippets*
- Wrap any code in `<Highlight className="highlight json">` components
- Indent code when necessary with `<span className="indent">` elements.
- Break lines in code with `<br />`


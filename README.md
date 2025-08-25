# My Website

A clean, responsive starter site built with HTML, CSS, and JavaScript. No build step required.

## Project structure

```
Website/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ app.js
│  ├─ img/
│  ├─ favicon.svg
│  └─ logo.svg
```

## Quick start (Windows PowerShell)

Open the `index.html` file directly, or serve the folder locally for best results.

Open in default browser:

```pwsh
start "c:\Users\joshu\Documents\Code Projects\Website\index.html"
```

Optional: Serve with a simple static server (requires Node.js):

```pwsh
npm -g ls http-server | Out-Null 2>$null; if ($LASTEXITCODE -ne 0) { npm -g install http-server }
http-server "c:\Users\joshu\Documents\Code Projects\Website" -p 5173 -c-1
```

Then visit:

```
http://localhost:5173
```

## Customize

- Replace text in `index.html` with your content.
- Edit colors, spacing, and typography via CSS variables in `assets/css/styles.css`.
- Put images in `assets/img` and reference them from HTML.

## License

MIT

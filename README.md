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

## Hosting multiple games on GitHub Pages

This repository can serve many small games under subfolders. Recommended layout:

```
assets/
  ... shared CSS/JS/images ...
games/
  game1/
    index.html
    assets/...
  game2/
    index.html
    assets/...
index.html  # your main hub/home
```

Link to each game using paths like `./games/game1/` so it works on project sites (i.e., under `/website-starter/`). Avoid leading slashes in paths.

### Useful tips
- `.nojekyll` is included to bypass Jekyll so folders like `_data/` or files starting with `_` will still be served.
- Keep assets relative (e.g., `./assets/...`) for compatibility with project site subpaths.
- If a game needs specific MIME types (e.g., `.wasm`, `.ogg`, `.mp3`), GitHub Pages serves these correctly by default. WebAssembly files should be referenced with `<script type="module">` loaders or fetch with `application/wasm`.
- Most Web APIs (Canvas, WebAudio, WebGL, Gamepad, Pointer Lock) work fine on Pages. Some APIs require HTTPS and a user gesture, which Pages provides.

## GitHub Pages: Classic (branch) vs Actions

You have two ways to publish:

- Deploy from a branch (Classic):
  - Simple. Choose `main`/root in Settings → Pages.
  - No build step; GitHub serves files as-is.
  - Great for pure HTML/CSS/JS and quick previews.

- GitHub Actions (recommended for flexibility):
  - A workflow builds and deploys your site automatically.
  - Add steps for bundling, TypeScript, or game pipelines (e.g., `npm ci && npm run build`).
  - Can run tests/lint before deploy; supports artifacts and environments.

This repo includes `.github/workflows/pages.yml`, which deploys from `main`. You can extend the `build` job to run your game build or bundler before uploading the artifact.

### Enabling Pages with Actions
1. Push to `main` (already done). The workflow will run on each push.
2. In GitHub → repo → Settings → Pages, ensure the source is set to “GitHub Actions.”
3. Wait for the workflow to finish. The environment URL appears in the Actions logs and under Environments → `github-pages`.

### Example: add a build step
In `.github/workflows/pages.yml` under the `build` job:

```yaml
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install & build
        run: |
          npm ci
          npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'dist'
```

## Developing games locally
- Use a local server so modules and fetch work:

```pwsh
npx serve . -l 5173
# or
npx http-server . -p 5173 -c-1
```

- If you use ES modules across games, consider a small bundler setup (Vite, esbuild, Parcel) per game or a monorepo-style root config.

## Security & permissions
- If the repo is private, Pages requires Pro/Team/Enterprise. Public repos work on Free.
- Gamepad, Pointer Lock, and fullscreen typically require user interaction; test in Chrome/Edge/Firefox.
- Avoid embedding unknown third-party code. Keep dependencies up to date.

## License

MIT

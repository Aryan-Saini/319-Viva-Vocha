# 319-Viva-Vocha

## Deploying (fixing white page)

1. **Build the app**  
   Run `pnpm build` (or `npm run build`). This creates a `dist` folder.

2. **Deploy the `dist` folder**  
   Deploy the **contents of `dist`**, not the project root.  
   - **Vercel / Netlify:** Point the project to this repo; they run `build` and deploy `dist` by default for Vite.  
   - **GitHub Pages:** Build locally, then push the **contents of `dist`** to the `gh-pages` branch (or use a GitHub Action that runs `pnpm build` and deploys `dist`).

3. **If the site is at a subpath** (e.g. `https://user.github.io/VIVAVOICE/`):  
   Build with a base path:  
   `BASE_PATH=/VIVAVOICE/ pnpm build`  
   Then deploy the `dist` folder as above.

# Portfolio chatbot

A small Cloudflare Worker that powers the "Ask about my work" chat on the portfolio. It keeps the Gemini API key off the public site, answers only from `src/portfolio.js`, and limits each visitor to 10 messages a minute.

## One-time setup

1. **Get a Gemini API key.** Sign in at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and create a key (or reuse the one from your PSE brief). Keys on the free tier cost nothing; see *Cost* below.
2. **Install and log in to Cloudflare** (a free account is enough):
   ```bash
   cd worker
   npm install
   npx wrangler login
   ```
3. **Store the key as a secret.** It's encrypted on Cloudflare and never appears in this repo:
   ```bash
   npx wrangler secret put GEMINI_API_KEY
   ```
4. **Check the allowed sites.** `ALLOWED_ORIGINS` in `wrangler.toml` lists the sites that may use the chatbot. It's set to `https://albertocj1.github.io` (GitHub Pages). If the portfolio lives on a custom domain, add it, e.g. `"https://albertocj1.github.io,https://cjalberto.dev"`.
5. **Deploy:**
   ```bash
   npm run deploy
   ```
   Wrangler prints the Worker's address, something like `https://cj-portfolio-chat.<your-subdomain>.workers.dev`.
6. **Turn the chat on.** In `index.html`, find `var CHAT_ENDPOINT = '';` and paste that address with `/chat` on the end:
   ```js
   var CHAT_ENDPOINT = 'https://cj-portfolio-chat.<your-subdomain>.workers.dev/chat';
   ```
   Commit and push. The chat button stays hidden until this is set.

## Updating what the bot knows

Everything it can say comes from `src/portfolio.js`. When you add a project or change a detail on the site, update that file too, then run `npm run deploy` again.

## Trying it locally

Create `worker/.dev.vars` (it's git-ignored) containing `GEMINI_API_KEY=your-key`, then:

```bash
npm run dev                                   # Worker on http://127.0.0.1:8787
python3 -m http.server 8000                   # in the repo root, in a second terminal
```

Temporarily set `CHAT_ENDPOINT` to `'http://127.0.0.1:8787/chat'` and open http://localhost:8000.

## Cost

It uses `gemini-flash-latest`, which always points to Google's newest Flash model; change `MODEL` in `wrangler.toml` to pin a specific one. On the Gemini free tier the chatbot costs nothing, but Google caps requests per minute and per day. If a busy day hits the cap, visitors see a polite "unavailable, email CJ" message until it resets. Google may also use free-tier prompts to improve its products, which is fine for public questions about your portfolio. If you enable billing on the key, each question costs a fraction of a US cent.

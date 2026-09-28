# Portfolio chatbot

A small Cloudflare Worker that powers the "Ask about my work" chat on the portfolio. It keeps the Anthropic API key off the public site, answers only from `src/portfolio.js`, and limits each visitor to 10 messages a minute.

## One-time setup

1. **Get an API key.** Sign in at [console.anthropic.com](https://console.anthropic.com), add some credit, and create an API key. While you're there, set a monthly spend limit in the Console's billing or limits settings so the bill can never surprise you.
2. **Install and log in to Cloudflare** (a free account is enough):
   ```bash
   cd worker
   npm install
   npx wrangler login
   ```
3. **Store the key as a secret.** It's encrypted on Cloudflare and never appears in this repo:
   ```bash
   npx wrangler secret put ANTHROPIC_API_KEY
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

Create `worker/.dev.vars` (it's git-ignored) containing `ANTHROPIC_API_KEY=your-key`, then:

```bash
npm run dev                                   # Worker on http://127.0.0.1:8787
python3 -m http.server 8000                   # in the repo root, in a second terminal
```

Temporarily set `CHAT_ENDPOINT` to `'http://127.0.0.1:8787/chat'` and open http://localhost:8000.

## Cost

It uses Claude Opus 5.5 at low effort. Each question sends the portfolio (about 2,500 tokens) plus the recent conversation, so a typical question costs roughly 1–3 US cents. The spend limit from step 1 caps the worst case.

# Inko Website

Marketing site and hero showcase demos for Inko.

## Local development

Prerequisites: Node.js 20+

1. Install dependencies:
   `npm install`
2. Start the frontend dev server:
   `npm run dev`
3. Optional: preview the full Cloudflare Pages setup, including `/api/waitlist`:
   `npm run build`
   `npm run preview:pages`

## Checks

- Type check: `npm run lint`
- Production build: `npm run build`

## Waitlist with Kit

The hero email form submits to the Cloudflare Pages Function at `functions/api/waitlist.ts`.

Before deploying, add these Cloudflare Pages environment variables:

- `KIT_API_KEY`
- `KIT_FORM_ID`

The function validates the email, forwards it to Kit's form subscriber API, and returns a UI-friendly success or error response.

## GitHub -> Cloudflare Pages deployment

1. Create a new GitHub repository and push this project.
2. In Cloudflare, create a new Pages project from that repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. In `Settings -> Variables and Secrets`, add:
   - `KIT_API_KEY`
   - `KIT_FORM_ID`
5. Deploy and test the generated `*.pages.dev` URL before moving the production domain.

## Production cutover checklist

1. Confirm the `pages.dev` site loads and the waitlist form works.
2. Remove the custom domain from the old landing page project.
3. Attach the custom domain to this new Cloudflare Pages project.
4. Re-test the homepage and form on the production domain.

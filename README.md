# Portfolio – Syed Abrar Reshad

🌐 **Visit the live portfolio:** [abrarreshad.vercel.app](https://abrarreshad.vercel.app/)

React + Tailwind CSS v4 + Framer Motion, built with Vite.

## Run locally

```bash
npm install
npm run dev
```

## Edit the content

Everything on the page (text, projects, skills, education, links) is in `src/data.js`.
Add your GitHub and LinkedIn URLs there. Empty links are hidden.

## Add your photo

Save your photo as `public/photo.jpg` (portrait orientation, about 800 × 1000 px works well).
It appears in the About section. Until the file exists, a block with your initials shows instead.

## Deploy free on Vercel

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, and import the repository.
3. Vercel detects Vite automatically. Click **Deploy**. Every push to `main` redeploys.

## Deploy free on GitHub Pages

1. Push this folder to a GitHub repository whose default branch is `main`.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

## Custom domain later

- Vercel: **Project → Settings → Domains**, add the domain, and set the DNS records Vercel shows.
- GitHub Pages: **Settings → Pages → Custom domain**.

The build uses relative paths (`base: './'`), so the same build works on both hosts and on a custom domain.

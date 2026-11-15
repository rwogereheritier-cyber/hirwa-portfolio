# hirwa-portfolio

Personal portfolio of Hirwa Heritier. Built with [Astro](https://astro.build) and [Motion](https://motion.dev), hosted on Vercel.

## Run it on your computer

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Where to edit things

| What | File |
| --- | --- |
| Name, intro, email, WhatsApp, LinkedIn, Behance | `src/data/site.ts` |
| Experience and services lists | `src/data/site.ts` |
| Case studies (one file per project) | `src/content/work/*.md` |
| Project images | `public/images/work/<project>/` |
| CV | `public/cv.pdf` |
| Profile photo | `public/me.jpg` then set `photo` in `site.ts` |

### Add a new project

1. Copy any file in `src/content/work/` and rename it, e.g. `my-project.md`
2. Change the text between the `---` lines (title, summary, role, scope, order)
3. Put a cover image in `public/images/work/my-project/cover.jpg` and set `cover: /images/work/my-project/cover.jpg`
4. Write the case study below the second `---`

## Publish changes

```bash
git add .
git commit -m "Describe your change"
git push
```

Vercel redeploys automatically after every push.

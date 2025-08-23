# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Gem-Chat

---

## NightPaths Landing Page

A horror-themed, Goosebumps-inspired, choose-your-own-adventure landing page to collect emails and route viewers to platform content.

### Configure env

Create a `.env` file in the project root with any of the following:

```
VITE_TRAILER_VIDEO_ID=YOUR_YOUTUBE_VIDEO_ID
VITE_YOUTUBE_CHANNEL_URL=https://www.youtube.com/@yourchannel
VITE_INSTAGRAM_URL=https://instagram.com/yourhandle
VITE_FACEBOOK_URL=https://facebook.com/yourpage

# One of these for email capture
VITE_SIGNUP_POST_URL=https://your.api/subscribe  # expects {email, name}
# or
VITE_FORMSPREE_FORM_ID=xyzabcd
```

- If using `VITE_SIGNUP_POST_URL`, the frontend POSTs JSON: `{ email, name }`.
- If using Formspree, create a form at https://formspree.io and set the form ID.

### Development

```
npm install
npm run dev
```

### Build

```
npm run build
npm run preview
```

### Content and meta

- Update `index.html` title/description and social meta. Replace `/og.jpg` with your image.
- Edit copy/styling in `src/App.jsx` and `src/App.css`.
- Social links and video ID are read from `src/config.js` via env variables.

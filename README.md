# Laxmi Wali — Portfolio

A modern, responsive single-page developer portfolio showcasing full-stack Java, Python, and frontend engineering projects.

## Live Site
[https://YOUR-SITE-URL/](https://YOUR-SITE-URL/)

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS 4
- **Animations & Effects**: Framer Motion, AOS, WebGL (SplashCursor)
- **Communications**: EmailJS (@emailjs/browser)

## Run Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Create production build
npm run build
```

## Environment Variables
To enable contact form submissions via EmailJS, define the following variables in a `.env.local` file in the project root:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

If these variables are omitted, the form automatically uses a pre-filled direct email client fallback.

## Credits
Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

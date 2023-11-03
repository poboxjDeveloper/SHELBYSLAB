# Next.js App Router Course

## Starter application (Dashboard)

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

Git page [see](https://github.com/vercel/next-learn/tree/main/dashboard/starter-example)

## Install

**REMARK** _disable cloudflare on work pc_

    npm install

## Development

    npm run dev

open [http://localhost:3000/](http://localhost:3000/)

## Extra services and documentation

### Development Services

- [mock api](https://mockapi.io/): mock data (github account: poboxjDeveloper)
- [prisma orm](https://www.prisma.io/): map data from db to typescript types or interfaces.

### Styling

- [tailwind css](https://tailwindcss.com/): all styling for the components.
- [styling in nextjs](https://nextjs.org/docs/pages/building-your-application/styling): ways to style the modules
- [css modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules): css modules: .module.css files.
- [clsx](https://www.npmjs.com/package/clsx): construct className strings conditionally. documentation [see](https://github.com/lukeed/clsx). usage see [status.tsx](/app/ui/invoices/status.tsx)
- [sass](https://nextjs.org/docs/app/building-your-application/styling/sass): use .sass files in the app. Build in support by next-js.
- [CSS-in-JS](https://nextjs.org/docs/app/building-your-application/styling/css-in-js): **TODO:** check out the documentation...

### Fonts and Images

#### Fonts

- usage of google fonts can be seen in action in the [font.ts](/app/ui/fonts.ts) file. And imported in the [layout.tsx](/app/layout.tsx) file.
- info about adding multiple fonts: [see docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts).
- info about the options for the fonts: [see docs](https://nextjs.org/docs/app/api-reference/components/font#font-function-arguments)

#### Images

- use the 'next/image' component. [info see](https://nextjs.org/docs/pages/api-reference/components/image)
- used in the [page.tsx](/app/page.tsx) file.

#### Extra info

- [Image Opitmization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Font Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Improving Web Performance with images (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [Web Fonts (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)

### Routing, Layouts and Pages

- use of file-system routing. [see](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages)
- colocation of pages and components: info [here](https://nextjs.org/docs/app/building-your-application/routing#colocation) and [here](https://nextjs.org/docs/app/building-your-application/routing/colocation)
- use of partial rendering via layout pages. find info [here](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering)

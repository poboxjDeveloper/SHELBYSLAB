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

### Linking and navigation between pages

- use the [Link](https://nextjs.org/docs/app/api-reference/components/link) component to make client-side navigation possible.
- add the "use client" directive to be able to use the next.js hook [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname) to show which page we are currently on.
- code splitting and prefetching is done by next.js based on the Link component. [More info](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)

### Postgres database setup

- setup the vercel project. [See this page](https://nextjs.org/learn/dashboard-app/setting-up-your-database)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Postgres Quickstart](https://vercel.com/docs/storage/vercel-postgres/quickstart)
- [Vercel Postgres SDK](https://vercel.com/docs/storage/vercel-postgres/sdk)
- [Neon](https://neon.tech/) (Serverless Postgres)

### Data fetching

- API endpoints can be created trough [route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) information.
- Using an [ORM](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#)
- Using 'sql' from the [Vercel Postgres SDK](https://vercel.com/docs/storage/vercel-postgres/sdk#sql)

#### Request Waterfall

A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data.

![request waterfall](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fsequential-parallel-data-fetching.png&w=1920&q=75&dpl=dpl_3Wxwbu8W2PMQSCXNu1niptgRaw1P)

#### Parallel datafetching

A "parallel" pattern triggers all requests at the same time. There is one disadvantage of using this JavaScript pattern: what happens if one data request is slower than all the others?

- [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.allSetteld()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

#### Static and Dynamic Rendering

![static rendering vs dynamic](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fstatic-site-generation.png&w=1920&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

- add dynamic content: `import { unstable_noStore as noStore } from 'next/cache';` (**_this is still unstable. Nextjs 14 feature_**)
  - side note: this gave an error [version staleness](https://nextjs.org/docs/messages/version-staleness). As this is still in dev, we need to update regularly.
- alternatively use: [route segment config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config), this is a stable feature.

#### Problem with long data fetches

![long data fetch](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fsequential-parallel-data-fetching.png&w=1920&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

Everything has to wait until the latest data is retrieved.

Which brings us to a common challenge developers have to solve:

**_With dynamic rendering, your application is only as fast as your slowest data fetch._**

### Streaming

![streaming](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fserver-rendering-with-streaming.png&w=1920&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

- data fetching and rendering at the same time.
- streaming >< waterfall
- works well with react's component model

![streaming data and rendering](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fserver-rendering-with-streaming-chart.png&w=1920&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

#### Implementation

- loading.tsx
- `<Suspense>`

##### loading.tsx

- special next.js file build upon suspend
- creates loading content while loading
- navigation can be used as this is statically loaded

##### loading skeletons

- simpified version of the ui added to the loading.tsx page

##### route groups

![route group](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Froute-group.png&w=1920&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

- loading.tsx file will only apply to the dashboard overview page
- [route groups info](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

##### streaming a component

- use `<Suspense>`from `import { Suspense } from 'react';`
- create a fallback and wrap the component that needs to stream into the `<Suspense>`component.
- `<Suspense fallback={<RevenueChartSkeleton />}><RevenueChart /></Suspense>`
- the data logic and loading should be in the `<RevenueChart>`component

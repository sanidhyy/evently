<a name="readme-top"></a>

# Evently - Event Management Platform using Next.js 14

![Evently - Event Management Platform using Next.js 14](/.github/images/img_main.png "Evently - Event Management Platform using Next.js 14")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/evently?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/evently/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/evently/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/evently?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/evently/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/evently?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/evently/commits "Github commits")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://event-ly.vercel.app/ "Vercel status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/evently?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/evently/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/evently?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/evently/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->

```bash
evently/
  |- app/
    |-- (auth)/
        |--- sign-in/[[...sign-in]]/
        |--- sign-up/[[...sign-up]]/
        |--- layout.tsx
    |-- (root)/
        |--- events/
            |---- [id]/update/
            |---- create/
        |--- orders/
        |--- profile/
        |--- layout.tsx
        |--- page.tsx
    |-- api/
        |--- uploadthing/
          |---- core.ts
          |---- route.ts
        |--- webhook/
          |---- clerk/
            |----- route.ts
          |---- stripe/
            |----- route.ts
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
  |- components/
    |-- shared/
    |-- ui/
  |- config/
    |-- site.ts
  |- constants/
    |-- index.ts
  |- lib/
    |-- actions/
        |--- category.actions.ts
        |--- event.actions.ts
        |--- order.actions.ts
        |--- user.actions.ts
    |-- database/
        |--- models/
            |---- category.model.ts
            |---- event.model.ts
            |---- order.model.ts
            |---- user.model.ts
        |--- index.ts
    |-- uploadthing.ts
    |-- utils.ts
    |-- validator.ts
  |- public/assets/
    |-- icons/
    |-- images/
  |- types/
    |-- index.ts
  |- .env.example
  |- .env.local
  |- .gitignore
  |- components.json
  |- middleware.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root directory.
4. Contents of `.env.local`:

```bash
# .env.local

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk auth redirect url(s)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# app base url
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000

# mongodb database uri
MONGODB_URI="mongodb+srv://<your-db-username>:<your-db-password>@<your-cluster-url>/<your-db-name>"

# clerk webhook secret
CLERK_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXX

# uploadthing secret & app id
UPLOADTHING_SECRET=sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
UPLOADTHING_APP_ID=xxxxxxxx

# stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxx


```

5. Clerk Keys
   - Visit [Clerk Dashboard](https://dashboard.clerk.dev) and create a new application.
   - Copy the public and secret keys.
   - Set up redirect URLs as specified in the environment variables.
   - Set up a webhook and copy the secret.

6. Clerk Redirect URLs

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

7. MongoDB URI

```bash
MONGODB_URI="mongodb+srv://<your-db-username>:<your-db-password>@<your-cluster-url>/<your-db-name>"
```

Replace `<your-db-username>`, `<your-db-password>`, `<your-cluster-url>`, and `<your-db-name>` with your actual MongoDB credentials and database information.

8. Stripe
   - Sign in to [Stripe Dashboard](https://dashboard.stripe.com) and obtain your publishable and secret keys.
   - Set up a webhook and copy the secret.

9. App Base URL

```bash
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000
```

10. Uploadthing Keys

To obtain Uploadthing keys, follow these steps:

1. **Sign up for an Uploadthing account:**
   - Visit [Uploadthing Signup](https://uploadthing.com/) to create an account.

2. **Create a new application:**
   - Log in to your Uploadthing account.
   - Navigate to the dashboard and create a new application.

3. **Get Secret and App ID:**
   - Once the application is created, find or generate the Secret and App ID.

```bash
UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXXX
```

11. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

12. Now app is fully configured 👍 and you can start using this app using `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Search Events](/.github/images/img2.png "Search Events")

![Organize Events](/.github/images/img3.png "Organize Events")

![Buy Tickets](/.github/images/img4.png "Buy Tickets")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![MongoDB](https://skillicons.dev/icons?i=mongodb "MongoDB")](https://mongodb.com/ "MongoDB")

## :wrench: Stats

[![Stats for Evently](/.github/images/stats.svg "Stats for Evently")](https://pagespeed-insights-svg.glitch.me/?url=https://event-ly.vercel.app/ "Stats for Evently")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Evently.

<!--- DEPENDENCIES_START --->

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.28.1
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers): ^3.3.2
- [@radix-ui/react-alert-dialog](https://www.npmjs.com/package/@radix-ui/react-alert-dialog): ^1.0.5
- [@radix-ui/react-checkbox](https://www.npmjs.com/package/@radix-ui/react-checkbox): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.0.2
- [@radix-ui/react-select](https://www.npmjs.com/package/@radix-ui/react-select): ^2.0.0
- [@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator): ^1.0.3
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js): ^2.2.2
- [@uploadthing/react](https://www.npmjs.com/package/@uploadthing/react): ^6.0.2
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.0.0
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.298.0
- [mongodb](https://www.npmjs.com/package/mongodb): ^6.3.0
- [mongoose](https://www.npmjs.com/package/mongoose): ^8.0.3
- [next](https://www.npmjs.com/package/next): 14.0.4
- [query-string](https://www.npmjs.com/package/query-string): ^8.1.0
- [react](https://www.npmjs.com/package/react): ^18
- [react-datepicker](https://www.npmjs.com/package/react-datepicker): ^4.24.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [react-hook-form](https://www.npmjs.com/package/react-hook-form): ^7.49.2
- [stripe](https://www.npmjs.com/package/stripe): ^14.10.0
- [svix](https://www.npmjs.com/package/svix): ^1.15.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.1.0
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [uploadthing](https://www.npmjs.com/package/uploadthing): ^6.1.0
- [zod](https://www.npmjs.com/package/zod): ^3.22.4
- [@types/node](https://www.npmjs.com/package/@types/node): ^20
- [@types/react](https://www.npmjs.com/package/@types/react): ^18
- [@types/react-datepicker](https://www.npmjs.com/package/@types/react-datepicker): ^4.19.4
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.0.1
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.0
- [typescript](https://www.npmjs.com/package/typescript): ^5
<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/evently&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/evently&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/evently&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/evently&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

# User Dashboard

A modern, responsive user management dashboard application built with [Next.js](https://nextjs.org/) and styled with [Tailwind CSS](https://tailwindcss.com/). This application fetches user data from JSONPlaceholder and provides a clean interface to view and search for users.

## Features

- **User Directory**: Browse a comprehensive list of users presented in a responsive grid layout.
- **Instant Search**: Real-time filtering of users by name or email address using a debounced search input.
- **Detailed Profiles**: Click on any user to view their full profile, including company details, address, and contact information.
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices.
- **Server-Side Generation**: Utilizes Next.js `getStaticProps` and `getStaticPaths` for optimal performance and SEO.
- **Error Handling**: Robust error states and "No results" messages.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Source**: [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- **Icons**: SVG Icons (Heroicons style)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/pages/index.js`: The main dashboard page listing all users.
- `src/pages/users/[id].js`: Dynamic route for individual user details.
- `src/components/`: Reusable UI components.
  - `Layout.js`: Main application wrapper with metatags.
  - `NavBar.js`: Navigation bar.
  - `UserCard.js`: Card component for individual user display.
  - `SearchInput.js`: Search component with debounce logic.
  - `ErrorMessage.js`: Standardized error display.
  - `Loader.js`: Loading state indicator.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

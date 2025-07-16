# Foodies App

A full-stack web application built with Next.js for a community of food lovers. It allows users to share, discover, and browse various meal recipes.

## Features

- **Browse Meals**: Users can browse a list of meals with beautiful images and short descriptions.
- **View Meal Details**: Each meal has a dedicated page with a detailed recipe, including instructions and ingredients.
- **Image Slideshow**: The homepage features an engaging image slideshow of various delicious meals.
- **Community Page**: A dedicated page for the foodies community, encouraging users to share recipes and connect with others.
- **Share Meals**: A page for users to share their own meal recipes with the community.
- **Loading States**: The application provides loading indicators while fetching data.
- **Error Handling**: Custom error pages are implemented for a better user experience in case of errors.
- **Not Found Page**: A custom 404 page for handling invalid URLs.

## Tech Stack

This project is built with a modern tech stack, including:

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS and autoprefixer.
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Linting**: [ESLint](https://eslint.org/) with custom configurations.
- **Formatting**: [Prettier](https://prettier.io/)
- **Package Manager**: [npm](https://www.npmjs.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.18.0 or later)
- npm

### Installation

1. Clone the repo

   ```sh
   git clone [https://github.com/chthollys/next-learn-project.git](https://github.com/chthollys/next-learn-project.git)
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Set up your `.env` file with the database connection string.

### Running

First, run the development server:

```bash
npm run dev
```

Open [localhost](http://localhost:3000) with your browser to see the result.

### Project Structure

The project follows a standard Next.js app directory structure.

```bash
/
├── prisma/               # Prisma schema, migrations, and seed script
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app directory with routes
│   │   ├── (pages)       # Page routes
│   │   └── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable React components
│   └── lib/              # Library files (data fetching, definitions, etc.)
├── .eslintrc.json        # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

### Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

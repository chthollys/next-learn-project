# Foodies App

A full-stack web application built with Next.js for a community of food lovers. It allows users to share, discover, and browse various meal recipes. The project leverages server-side rendering, server actions for mutations, and a PostgreSQL database with Prisma for data management.

## Features

- **Browse Meals**: Users can browse a dynamic grid of user-submitted meals with beautiful images and short descriptions.
- **View Meal Details**: Each meal has a dedicated, server-rendered page with a detailed recipe, including creator information and step-by-step instructions.
- **Share Meals**: An intuitive form allows users to share their own meal recipes, including uploading an image. This form uses Next.js Server Actions for submission and data persistence.
- **Engaging Homepage**: The homepage features an elegant, fading image slideshow of delicious meals to welcome users.
- **Community Page**: A dedicated page for the foodies community, showcasing the spirit of sharing and connection.
- **Robust Data Management**: Uses Prisma as an ORM to interact with a PostgreSQL database for all meal data.
- **Loading & Error States**: The application provides suspense-based loading indicators (`loading.tsx`) and custom error pages (`error.tsx`, `not-found.tsx`) for a seamless user experience.
- **Responsive Design**: Styled with CSS Modules for component-scoped styles that adapt to different screen sizes.

## Tech Stack

This project is built with a modern tech stack, including:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: [npm](https://www.npmjs.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm
- A running PostgreSQL database instance.

### Installation & Setup

1. **Clone the repository**

   ```sh
   git clone [https://github.com/your-username/next-learn-project.git](https://github.com/your-username/next-learn-project.git)
   cd next-learn-project
   ```

2. **Install NPM packages**

   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root of the project and add your database connection string. See `.env.example` for reference.

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   ```

4. **Run database migrations**
   This will apply the database schema defined in `prisma/schema.prisma`.

   ```sh
   npx prisma migrate dev
   ```

5. **Seed the database with initial data**
   This will populate the database with the dummy meals from `prisma/seed.ts`.

   ```sh
   npx prisma db seed
   ```

### Running the Development Server

Now, you can run the development server:

````bash
npm run dev

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
````

### Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

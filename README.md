🚀 Getting Started

Run the development server:

yarn start:dev

Open http://localhost:3000
in your browser to see the app.

Start editing the homepage by modifying app/page.tsx. The page auto-updates as you save.

This project uses next/font to optimize and load Geist, a modern font family by Vercel.

🏗️ Project Structure (FSD Architecture)
src/
├── app/ # Next.js app router (routing, layout)
│ ├── layout.tsx # Root layout with providers
│ └── page.tsx # Home page
├── entities/ # Business entities
│ └── projects/ # Projects domain
│ ├── api/ # API calls
│ ├── constants/ # Constants
│ ├── helpers/ # Utilities
│ ├── interfaces/ # TypeScript types
│ └── index.ts # Public API
├── features/ # Business features
│ └── project-form/ # Project creation/editing feature
│ ├── helpers/ # Utilities
│ ├── interfaces/ # Types
│ ├── validation/ # Validation schemas
│ ├── project-form.tsx # Main form component
│ └── index.ts # Public API
├── shared/ # Shared app resources
│ ├── api/ # API config/clients
│ ├── assets/ # Icons, images
│ ├── config/ # App settings
│ ├── consts/ # Global constants
│ ├── hooks/ # Custom React hooks
│ ├── interfaces/ # Shared types
│ ├── lib/ # Utilities/helpers
│ ├── providers/ # React context providers
│ ├── ui/ # Reusable UI components
│ └── utils/ # Utility functions
└── widgets/ # Self-contained UI widgets

📦 Dependencies
Core Framework

Next.js 15.5.6 – React framework with App Router

React 19.1.0 – UI library

TypeScript – Type safety

UI & Styling

Tailwind CSS v4 – Utility-first CSS framework

shadcn/ui – Pre-built UI components

Radix UI – Headless UI primitives

Components: Avatar, Checkbox, Dropdown, Popover, Select, Switch, Tabs

Lucide React – Icon library

Class Variance Authority – Component variant handling

State Management & Forms

React Query (@tanstack) – Server state management

Formik – Form state handling

Yup – Validation schemas

Utilities

Axios – HTTP client

date-fns, dayjs – Date handling

React Dropzone – File upload

React Day Picker – Date picker

React Toastify – Toast notifications

clsx, tailwind-merge – Class utilities

Development Tools

Husky – Git hooks

Lint Staged – Pre-commit linting

Commitlint – Conventional commits

ESLint – Code linting

Prettier – Code formatting

🛠️ Available Scripts
yarn start:dev # Start development server
yarn build # Build for production
yarn start # Start production server
yarn lint # Run ESLint
yarn lint:fix # Fix ESLint issues
yarn type-check # Run TypeScript checks

🔧 Code Quality

This project uses:

Husky – Git hooks (pre-commit, pre-push)

ESLint + Prettier – Consistent code style

Conventional Commits – Standardized commit messages

TypeScript – Type-safe development

🎨 Design System

Built using:

Tailwind CSS – For styling

shadcn/ui – Reusable components

Radix UI – Primitives

Custom design tokens and theming

📱 Features

Modern React with Next.js App Router

Feature-Sliced Design architecture

Responsive layout

Form handling with validation

File upload support

Date picker integration

Server state with React Query

Type-safe with TypeScript

🚀 Deployment

The easiest way to deploy a Next.js app is using the Vercel Platform (creators of Next.js).

See Next.js Deployment Docs
for more info.

📚 Learn More

Next.js Documentation
– Learn about features and API

Learn Next.js
– Interactive learning tutorial

Next.js GitHub Repo
– Contribute or leave feedback

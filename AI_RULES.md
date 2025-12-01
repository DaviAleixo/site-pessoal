# AI Assistant Rules for Davi Aleixo Developer Portfolio

This document outlines the technical stack and guidelines for using specific libraries when developing or modifying the "Davi Aleixo Developer Portfolio" application.

## Tech Stack Overview

The application is built using a modern web development stack, focusing on performance, maintainability, and a great developer experience.

*   **Frontend Framework**: React for building interactive user interfaces.
*   **Language**: TypeScript for type safety and improved code quality.
*   **Build Tool**: Vite for a fast development server and optimized production builds.
*   **Styling**: Tailwind CSS for utility-first styling, enabling rapid and consistent UI development.
*   **Icons**: Lucide React for a comprehensive set of customizable SVG icons.
*   **Routing**: React Router for client-side navigation and managing application routes.
*   **UI Components**: shadcn/ui for accessible and customizable pre-built UI components.
*   **Low-level UI Primitives**: Radix UI for unstyled, accessible component primitives (often used by shadcn/ui).
*   **Backend Services**: Supabase for authentication, database, and other backend functionalities.

## Library Usage Guidelines

To maintain consistency and leverage the strengths of each library, please adhere to the following rules:

*   **React**: Always use React for creating components and managing UI state.
*   **TypeScript**: All new files and modifications should be written in TypeScript, ensuring strong typing.
*   **Vite**: Use Vite for all development and build processes. Do not introduce other bundlers or build tools.
*   **Tailwind CSS**: All styling should be implemented using Tailwind CSS utility classes. Avoid custom CSS files or other styling libraries unless absolutely necessary and explicitly approved.
*   **Lucide React**: For any icon needs, prefer icons from the `lucide-react` library.
*   **React Router**: Implement all client-side routing using `react-router-dom`. Routes should be defined and managed within `src/App.tsx`.
*   **shadcn/ui**: When building new UI elements, prioritize using components from `shadcn/ui` to ensure consistency, accessibility, and a polished look. Only create custom components if a suitable `shadcn/ui` component does not exist or cannot be adapted.
*   **Radix UI**: If a `shadcn/ui` component is not available for a specific interactive primitive (e.g., a custom dropdown, modal, or tooltip), use Radix UI primitives to build accessible and unstyled components, which can then be styled with Tailwind CSS.
*   **Supabase**: For any backend interactions, including authentication, database queries, or storage operations, utilize the `@supabase/supabase-js` client library.
# React Portfolio (for Projects) Showcase

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-^18.2.0-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-^5.0.0-blue.svg?logo=vite)](https://vitejs.dev/)

A interactive, modern, and performant portfolio template built with React, Framer Motion, and Tailwind CSS. It's designed to showcase your projects in a clean, filterable, and visually appealing way.

The application is a Single Page Application (SPA) that features smooth animations, on-the-fly searching/filtering, deep linking for individual projects, and much more.

---

### 🚀 [Live Site](https://m0s-projects.vercel.app/)



![Project Showcase](https://i.imgur.com/UMa4ryb.png)

## ✨ Features

-   **Dynamic Filtering & Search**: Instantly filter projects by category or search by title, summary, or tags.
-   **Smooth Animations**: Seamless page and component transitions powered by `Framer Motion`.
-   **Deep Linking & Routing**: Each project has a unique URL (`/projects/:projectId`), making them shareable and SEO-friendly. The app correctly handles direct navigation to a project.
-   **Dark / Light Mode**: A user-toggleable theme that's saved to local storage.
-   **Multi-Language Support**: The entire UI and project data structure is built with `i18next` for easy internationalization.
-   **Keyboard Shortcuts**: Enhanced user experience with keyboard navigation:
    -   `Esc` to close a project view.
    -   `Shift + ←/→` to navigate between projects within a category.
    -   `Ctrl/Cmd + K` to focus the search bar.
    -   `1-9` to switch between categories.
-   **Performance Optimized**: Utilizes React hooks like `useMemo` for efficient filtering and `LazyMotion` to only load animations when needed.
-   **Fully Responsive**: A mobile-first design that looks great on all devices, built with Tailwind CSS.
-   **Clean Code Structure**: Well-organized components and a centralized data source for easy project management.

## 🛠️ Tech Stack

-   **Framework**: [React.js](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Routing**: [React Router v6](https://reactrouter.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Internationalization (i18n)**: [react-i18next](https://react.i18next.com/)
-   **Deployment**: Netlify / Vercel / etc.

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Customize Your Projects**
    This is the most important step! Open `src/data/projects.js` and replace the placeholder data with your own projects. The structure is designed to be straightforward and supports multiple languages.

    ```javascript
    // src/data/projects.js

    export const projectsData = {
      "Web Development": [
        {
          id: 'project-one',
          title: {
            en: 'My First Awesome Project',
            tr: 'İlk Harika Projem'
          },
          summary: {
            en: 'A brief summary of what this project does.',
            tr: 'Bu projenin ne yaptığına dair kısa bir özet.'
          },
          // ... other project details like images, tags, links
        },
      ],
      "Mobile Apps": [
        // ... more projects
      ]
    };
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the address shown in your terminal) to view it in the browser.

## 🗺️ Roadmap (Future Features)

This project has a solid foundation, but there's always room for improvement. Here are some ideas for future development:

-   [ ] **CMS Integration**: Fetch project data from a headless CMS like Contentful, Sanity, or Strapi.
-   [ ] **Advanced Filtering**: Add functionality to filter by multiple tags simultaneously.
-   [ ] **Unit & Integration Tests**: Implement tests with Jest and React Testing Library to ensure stability.
-   [ ] **SEO Enhancements**: Use `react-helmet-async` for more granular control over meta tags for each project page.
-   [ ] **Contact Form**: Add a dedicated contact page or a modal with a functional contact form.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.


## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
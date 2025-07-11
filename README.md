<!-- @format -->

# Dropbox Clone

A full-stack Dropbox-style file storage application built with Next.js and Firebase.

## 🚀 Features

-   **User Authentication**
    Secure sign-up, sign-in and sign-out flows powered by [Clerk](https://clerk.dev).
-   **File Management**
    Upload, download, preview, rename, and delete files in bulk.
-   **Cloud Storage**
    File data stored in Firebase Storage, metadata in Firestore.
-   **Responsive UI**
    Built with Tailwind CSS and Radix UI—mobile and desktop friendly.
-   **Dark Mode**
    Toggle light/dark theme with `next-themes`.
-   **Rich File Icons**
    Color-coded file icons via `react-file-icon` and a custom extension-to-color map.

## 🛠 Tech Stack

-   **Framework:** Next.js 14.2.2, React 18, TypeScript
-   **Authentication:** @clerk/nextjs
-   **Database & Storage:** Firebase Firestore & Storage
-   **Styling:** Tailwind CSS, Tailwind Animate
-   **UI Components:** Radix UI, lucide-react
-   **State Management:** Zustand
-   **Data Tables:** @tanstack/react-table
-   **File Handling:** react-dropzone, pretty-bytes
-   **Notifications:** react-hot-toast

## 📂 Folder Structure

-   `/`
    -   `app/` &nbsp;&nbsp;&nbsp;&nbsp;# Next.js App Router pages & layouts
    -   `components/` &nbsp;&nbsp;# Reusable UI components
    -   `lib/` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Helper functions & data mappings
    -   `public/` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Static assets
    -   `store/` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Global state (Zustand)
    -   `firebase.ts` &nbsp;# Firebase initialization
    -   `constant.ts` &nbsp;# File-extension color map
    -   `next.config.js` &nbsp;# Next.js config

## 🔧 Getting Started

1. **Clone the repo**
    ```bash
    git clone https://github.com/Munzir2k/Dropbox-clone.git
    cd Dropbox-clone
    ```

## Install Dependencies

2. ```bash
   npm install
   ```

## Configure environment

3. ```bash NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
   CLERK_SECRET_KEY=your_secret_here
   ```

## Firebase

4. ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
   CLERK_SECRET_KEY=your_secret_here
   ```

## Run in development

5. ```bash
   npm run dev
   ```

Visit http://localhost:3000.

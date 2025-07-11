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

├── app/ # Next.js App Router pages & layouts
├── components/ # Reusable UI components
├── lib/ # Helper functions & data mappings
├── public/ # Static assets
├── store/ # Global state (Zustand)
├── firebase.ts # Firebase initialization
├── constant.ts # File-extension color map
└── next.config.js # Next.js config

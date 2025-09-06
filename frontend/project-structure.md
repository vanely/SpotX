# SpotX Frontend Project Structure

```
spotx/
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   └── images/
│   ├── src/
│   │   ├── api/
│   │   │   ├── auth.ts
│   │   │   ├── spots.ts
│   │   │   ├── categories.ts
│   │   │   ├── uploads.ts
│   │   │   ├── users.ts
│   │   │   └── index.ts
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   └── [shadcn components]
│   │   │   ├── layout/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   └── index.ts
│   │   │   ├── map/
│   │   │   │   ├── MapView.tsx
│   │   │   │   ├── MapControls.tsx
│   │   │   │   ├── MapMarker.tsx
│   │   │   │   ├── SpotDetailCard.tsx
│   │   │   │   └── index.ts
│   │   │   ├── spots/
│   │   │   │   ├── SpotCard.tsx
│   │   │   │   ├── SpotList.tsx
│   │   │   │   ├── SpotForm.tsx
│   │   │   │   ├── SpotGallery.tsx
│   │   │   │   ├── SpotTags.tsx
│   │   │   │   └── index.ts
│   │   │   ├── auth/
│   │   │   │   ├── AuthForm.tsx
│   │   │   │   ├── MagicLinkForm.tsx
│   │   │   │   └── index.ts
│   │   │   ├── common/
│   │   │   │   ├── Loading.tsx
│   │   │   │   ├── ErrorBoundary.tsx
│   │   │   │   ├── CategoryFilter.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── context/
│   │   │   └── ModalContext.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useSpots.ts
│   │   │   ├── useCategories.ts
│   │   │   ├── useGeolocation.ts
│   │   │   ├── useUpload.ts
│   │   │   └── index.ts
│   │   ├── lib/
│   │   │   ├── utils.ts
│   │   │   ├── constants.ts
│   │   │   └── api-client.ts
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   ├── VerifyPage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── map/
│   │   │   │   ├── MapPage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── spots/
│   │   │   │   ├── SpotDetailPage.tsx
│   │   │   │   ├── AddSpotPage.tsx
│   │   │   │   ├── EditSpotPage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── profile/
│   │   │   │   ├── ProfilePage.tsx
│   │   │   │   ├── EditProfilePage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── collections/
│   │   │   │   ├── CollectionsPage.tsx
│   │   │   │   ├── CollectionDetailPage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── HomePage.tsx
│   │   │   ├── NotFoundPage.tsx
│   │   │   └── index.ts
│   │   ├── store/
│   │   │   ├── auth.ts
│   │   │   ├── ui.ts
│   │   │   ├── map.ts
│   │   │   └── index.ts
│   │   ├── types/
│   │   │   ├── auth.ts
│   │   │   ├── spots.ts
│   │   │   ├── categories.ts
│   │   │   ├── users.ts
│   │   │   ├── common.ts
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── routes.tsx
│   │   └── vite-env.d.ts
│   ├── .env
│   ├── .env.example
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── components.json
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
```
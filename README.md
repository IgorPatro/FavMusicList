# FavMusicList

### Task for Advox Studio!

You can easly add your favorite music to the list, just fill the form and sort/filter/find your favorite music!

You can access the project here: [https://fav-music-list-one.vercel.app](https://fav-music-list-one.vercel.app)

Happy using!

## Steps

### 1. Design draft

![Created draft](https://patrocreations.com/assets/draft.png)

### 2. Choosing tools and libraries

- Next.js
- Typescript
- Tailwind
- Zustand
- DaisyUI
- Vercel

### 3. Architecture and State Management planning

- Problem 1 - State Management x Local Storage
  I have a met a huge problem with state management. Zustand came up with a simple solutions, which is state persisting, It allows to keep the whole state in the local storage. Unfortunately the state is only accesible in Client Side - that's why Albums Component is lazy loaded to the application
- Problem 2 - Languages and Default View
  Every user wants to continue scrolling and visiting the page in the same state that he/she has left it. That's why the chosen language and view (grid/table) is saved in the cookies and accessed during SSR - it is pretty quick!

### 4. Coding!

I just took a cup of coffee and started writing some TS code!

## Technologies - why I have done my choice this way

### Next.js

Next.js allows developers to build SSR solutions without any problem (maybe skipping the local storage access :P). Website with SSR is quicker and user gets at the beginning rendered HTML instead of white page. It improves not only UX, but also SEO.

### Tailwind

Tailwind is the fast way of styling things inline. It is great to small projects like this because it speeds up the development process a lot.

### DaisyUI

I just wanted to have some fun :D I was never using this library before - that's why I wanted to try, and well... It works pretty great!

### Zustand

Zustand is a very common library for state management. It is much more simple than Redux and gives users enormous possibilites. It has got also prepared local storage persist out of the box - that's why it was a perfect state management system for this project.

### Typescript

Just a great DX and Type Safety. Well... also it has a bit more blue theme and I love blue!

### Vercel

Great tool to deploy not only small projects with Next.js which is kinda tough to start on VPS and other services. It allows Frontend Developers to start every project extremely quickly and easily.# FavMusicList

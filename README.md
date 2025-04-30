# LMS Frontend

### Setup instructions

1. Clone the project

```
https://github.com/Amarjeet-Vishwakarma/lms-frontend.git
```

2. Move into the directory

```
cd lms-frontend
```

3. Install dependencies

```
npm i
```

4. Run the server

```
npm run dev
```

### Setup instructions for tailwind

### Instructions might be changed follow official docs always

[Tailwind official instruction doc](https://tailwindcss.com/docs/installation/using-vite)

1. Install tailwindCss

```
npm install tailwindcss @tailwindcss/vite
```

2. Configure the Vite plugin

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. Import Tailwind CSS

```
@import "tailwindcss";
```

4. Start your build process

```
npm run dev
```

5. Start using Tailwind in your HTML

```
!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```




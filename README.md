# Vitepress

VitePress is a Vite-powered static site generator.

[Read the docs](https://vitepress.dev/)

## Usage

> [!IMPORTANT]
>
> **Required modifications**
>
> 1. `.vitepress/config.mts`
>    - Replace the **GITHUB_URL** value with the address of your GitHub repository.
> 2. `.github/workflows/deploy.yml`
>    - Check **env** and enable **GitHub Pages (set Source to GitHub Actions)**.

Install dependencies:

```bash
npm i
```

Preview:

```bash
npm run dev
```

Build:

```bash
npm run build
```

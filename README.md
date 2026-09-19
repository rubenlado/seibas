# As Seibas · web estática

Migración estática multipágina de As Seibas, construída con Astro. O sitio non emprega CMS, cookies, analítica nin scripts de terceiros.

## Requisitos

- Node.js 22.19 ou posterior
- npm 10 ou posterior

## Desenvolvemento

```sh
npm install
npm run dev
```

## Produción

```sh
npm run build
npm run preview
```

O resultado estático xérase en `dist/` e pode publicarse en calquera hospedaxe de ficheiros estáticos.

## Estrutura

- `src/pages/`: rutas e contido editorial.
- `src/components/`: pezas compartidas da interface.
- `src/data/site.ts`: datos públicos, navegación e catálogo de servizos.
- `src/styles/global.css`: sistema visual e estilos responsive.
- `public/assets/`: logo e fotografías locais optimizadas.

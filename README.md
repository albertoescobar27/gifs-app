# GIFs App

Aplicación React + TypeScript + Vite para buscar y mostrar GIFs usando la API de Giphy.

## Demo en vivo

Visita la demo en Netlify:

https://visionary-sopapillas-4227d6.netlify.app/

## Cómo usar la aplicación

1. Abre la aplicación.
2. Usa la barra de búsqueda para escribir una palabra o frase.
3. Presiona Enter o haz clic en el botón de búsqueda.
4. Verás una lista de GIFs relacionados con tu búsqueda.
5. Puedes ver búsquedas anteriores y reutilizarlas rápidamente.

## Funcionalidades principales

- Búsqueda de GIFs por texto.
- Visualización de resultados en una galería.
- Historial de búsquedas recientes.
- Estructura basada en componentes y hooks personalizados.

## Cómo ejecutar el proyecto localmente

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd gifs-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre el navegador en la dirección que muestra Vite, normalmente:

```bash
http://localhost:5173
```

## Estructura del proyecto

- `src/`
  - `GifsApp.tsx` - Componente principal de la aplicación.
  - `main.tsx` - Punto de entrada de Vite.
  - `index.css` - Estilos globales.
  - `gifs/` - Lógica de búsqueda, API, componentes e interfaces.
  - `shared/` - Componentes reutilizables como `SearchBar`.

## Requisitos

- Node.js 16+ recomendado.
- npm 8+ o compatible.

## Notas

- Si quieres desplegar tu propia copia, asegúrate de configurar una clave de API de Giphy si decides usar la API real.
- La demo pública está disponible en Netlify en el enlace anterior.

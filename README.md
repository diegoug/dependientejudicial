# Dependiente Judicial - Landing Page

Una landing page moderna y responsive para Dependiente Judicial, una herramienta de inteligencia artificial para asistencia legal.

## 🏗️ Estructura Técnica del Proyecto

### Stack Tecnológico
- **Frontend Framework**: React 18.3.1 con TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Linting**: ESLint con configuración TypeScript
- **Fonts**: Inter (Google Fonts)

### Arquitectura de Componentes

```
src/
├── components/           # Componentes React reutilizables
│   ├── Header.tsx       # Navegación principal con menú responsive
│   ├── Hero.tsx         # Sección hero con CTA principal
│   ├── ProblemSection.tsx   # Sección de problemas identificados
│   ├── ValueSection.tsx     # Propuesta de valor y beneficios
│   ├── HowItWorks.tsx      # Proceso de 3 pasos
│   ├── PlansSection.tsx    # Acceso anticipado y planes
│   ├── SocialProof.tsx     # Testimonios y logos (placeholder)
│   ├── FAQSection.tsx      # Preguntas frecuentes
│   └── Footer.tsx          # Footer con enlaces y contacto
├── App.tsx              # Componente principal de la aplicación
├── main.tsx            # Punto de entrada de React
├── index.css           # Estilos globales y Tailwind imports
└── vite-env.d.ts       # Definiciones de tipos para Vite
```

### Configuración del Proyecto

#### Archivos de Configuración
- `vite.config.ts` - Configuración de Vite con plugin de React
- `tailwind.config.js` - Configuración de Tailwind CSS
- `postcss.config.js` - PostCSS con Tailwind y Autoprefixer
- `tsconfig.json` - Configuración principal de TypeScript
- `tsconfig.app.json` - Configuración específica para la aplicación
- `tsconfig.node.json` - Configuración para scripts de Node.js
- `eslint.config.js` - Configuración de ESLint con TypeScript

## 🚀 Desarrollo Local

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Instalación y Configuración

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd dependiente-judicial-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar la instalación**
   ```bash
   npm run lint  # Verificar código con ESLint
   ```

### Scripts Disponibles

```bash
# Desarrollo - Inicia servidor de desarrollo con hot reload
npm run dev
# Servidor disponible en http://localhost:5173

# Build - Genera build de producción
npm run build
# Archivos generados en ./dist/

# Preview - Previsualiza build de producción localmente
npm run preview
# Servidor disponible en http://localhost:4173

# Lint - Ejecuta ESLint para verificar código
npm run lint
```

### Estructura del Build

El comando `npm run build` genera:
```
dist/
├── index.html          # HTML principal optimizado
├── assets/
│   ├── index-[hash].js # JavaScript bundle minificado
│   ├── index-[hash].css # CSS bundle minificado
│   └── [assets]        # Otros assets optimizados
└── vite.svg           # Favicon
```

## 🌐 Despliegue en GitHub Pages

### Configuración Automática con GitHub Actions

1. **Crear archivo de workflow**
   ```bash
   mkdir -p .github/workflows
   ```

2. **Crear `.github/workflows/deploy.yml`**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v4

       - name: Setup Node.js
         uses: actions/setup-node@v4
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Configurar Vite para GitHub Pages**
   
   Actualizar `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/nombre-del-repositorio/', // Cambiar por el nombre real
     optimizeDeps: {
       exclude: ['lucide-react'],
     },
   });
   ```

4. **Habilitar GitHub Pages**
   - Ir a Settings > Pages en el repositorio
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

### Despliegue Manual

```bash
# 1. Build del proyecto
npm run build

# 2. Instalar gh-pages (si no está instalado)
npm install -g gh-pages

# 3. Desplegar a GitHub Pages
gh-pages -d dist
```

### Variables de Entorno para Producción

Si se necesitan variables de entorno, crear `.env.production`:
```env
VITE_API_URL=https://api.dependientejudicial.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🔧 Configuración de Infraestructura

### Optimizaciones de Performance

1. **Lazy Loading de Componentes**
   ```typescript
   const LazyComponent = lazy(() => import('./components/Component'));
   ```

2. **Optimización de Imágenes**
   - Usar formatos WebP cuando sea posible
   - Implementar lazy loading para imágenes
   - Comprimir imágenes antes del build

3. **Bundle Analysis**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

### Monitoreo y Analytics

1. **Google Analytics 4**
   ```html
   <!-- En index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Performance Monitoring**
   - Core Web Vitals
   - Lighthouse CI integration

### SEO y Meta Tags

El proyecto incluye meta tags optimizados en `index.html`:
- Open Graph para redes sociales
- Twitter Cards
- Meta description y keywords
- Structured data (JSON-LD) - pendiente de implementar

### Seguridad

1. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:; font-src 'self' https://fonts.gstatic.com;">
   ```

2. **Headers de Seguridad** (configurar en servidor/CDN)
   ```
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Referrer-Policy: strict-origin-when-cross-origin
   ```

## 🐛 Troubleshooting

### Problemas Comunes

1. **Error de build en GitHub Actions**
   - Verificar versión de Node.js en workflow
   - Comprobar que todas las dependencias estén en package.json

2. **Rutas no funcionan en GitHub Pages**
   - Verificar configuración de `base` en vite.config.ts
   - Usar rutas relativas en lugar de absolutas

3. **Estilos no se cargan**
   - Verificar que PostCSS esté configurado correctamente
   - Comprobar imports de Tailwind en index.css

### Logs y Debugging

```bash
# Build con información detallada
npm run build -- --mode development

# Analizar bundle size
npm run build -- --analyze
```

## 📝 Notas para el Equipo de Infraestructura

1. **Dominio Personalizado**: Para usar un dominio personalizado, crear archivo `CNAME` en la carpeta `public/`

2. **CDN**: Considerar usar un CDN como Cloudflare para mejor performance global

3. **Monitoring**: Implementar monitoreo de uptime y performance

4. **Backup**: GitHub Pages se regenera automáticamente, pero considerar backup de configuraciones

5. **SSL**: GitHub Pages incluye SSL automático para dominios .github.io

## 🔄 Flujo de Desarrollo

1. **Feature Branch**: Crear rama desde `main`
2. **Development**: Desarrollar con `npm run dev`
3. **Testing**: Verificar con `npm run build` y `npm run preview`
4. **Pull Request**: Crear PR hacia `main`
5. **Review**: Code review y testing
6. **Deploy**: Merge a `main` dispara deploy automático

## 📞 Contacto Técnico

Para dudas técnicas o problemas de infraestructura, contactar al equipo de desarrollo.
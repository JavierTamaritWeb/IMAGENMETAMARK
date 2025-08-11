# 🖼️ ImageMetadataPro

**Editor profesional de metadatos e imágenes con marcas de agua** - Una aplicación web completa para editar metadatos EXIF, aplicar marcas de agua personalizadas y optimizar imágenes.

![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)
![HTML5](https://img.shields.io/badge/html5-valid-orange.svg)
![CSS3](https://img.shields.io/badge/css3-modern-blue.svg)
![AVIF](https://img.shields.io/badge/AVIF-supported-green.svg)

## ✨ Características Principales

### 📝 **Gestión de Metadatos**
- ✅ Edición completa de metadatos EXIF
- ✅ Campos: Título, Autor, Descripción, Palabras clave, Copyright
- ✅ Validación en tiempo real de datos
- ✅ Previsualización de metadatos antes de aplicar

### 🎨 **Marcas de Agua Avanzadas**
- ✅ **Marca de agua de texto**: Fuentes personalizables, colores, tamaños, opacidad
- ✅ **Marca de agua de imagen**: Soporte para PNG, JPG, WebP
- ✅ **Posicionamiento inteligente**: 9 posiciones predefinidas + posicionamiento personalizado por clic
- ✅ **Doble marca de agua**: Combina texto e imagen simultáneamente

### 🔧 **Herramientas de Edición**

- ✅ **Sistema de historial**: Deshacer/Rehacer con 20 estados (Ctrl+Z/Ctrl+Y)
- ✅ **Control de calidad**: Ajuste de compresión del 1% al 100%
- ✅ **Conversión avanzada**: JPEG, PNG, WebP, AVIF con librerías @jsquash optimizadas
- ✅ **Vista de pantalla completa**: Previsualización inmersiva
- ✅ **Test de conversión**: Verificación automática de formatos soportados
- ✅ **Optimización automática**: Compresión inteligente sin pérdida de calidad

### 🎨 **Interfaz y Experiencia**

- ✅ **Modo oscuro/claro**: Cambio automático según preferencias del sistema
- ✅ **Diseño responsivo**: Optimizado para desktop, tablet y móvil
- ✅ **Botones adaptativos**: Ancho automático según contenido del texto
- ✅ **Drag & Drop**: Arrastra imágenes directamente a la aplicación
- ✅ **Accesibilidad**: Cumple estándares WCAG 2.1
- ✅ **Animaciones fluidas**: Transiciones suaves y micro-interacciones
- ✅ **UI en mayúsculas**: Textos y placeholders en mayúsculas para mejor legibilidad

## 🚀 Demo en Vivo

[**🔗 Prueba ImageMetadataPro aquí**](https://tudominio.com/ImageMetadataPro)

## 📸 Capturas de Pantalla

| Interfaz Principal | Modo Oscuro | Editor de Marcas de Agua |
|:--:|:--:|:--:|
| ![Main Interface](./screenshots/main.png) | ![Dark Mode](./screenshots/dark.png) | ![Watermark Editor](./screenshots/watermark.png) |

## 🎯 Casos de Uso

### 👩‍💼 **Profesionales**
- **Fotógrafos**: Proteger imágenes con marcas de agua personalizadas
- **Diseñadores**: Optimizar imágenes para web manteniendo calidad
- **Agencias**: Gestión masiva de metadatos para SEO

### 🏢 **Empresas**
- **E-commerce**: Optimizar imágenes de productos
- **Marketing**: Crear contenido visual con marca corporativa
- **Desarrolladores**: Preparar assets optimizados

### 👨‍🎨 **Creadores**
- **Artistas digitales**: Firmar obras con marcas de agua elegantes
- **Bloggers**: Optimizar imágenes para mejor rendimiento web
- **Redes sociales**: Crear contenido optimizado por plataforma

## 🔧 Instalación y Uso

### Método 1: Uso Directo (Recomendado)
```bash
# Clona el repositorio
git clone https://github.com/JavierTamaritWeb/IMAGENMETAMARK.git

# Navega al directorio
cd IMAGENMETAMARK

# Abre index.html en tu navegador favorito
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Método 2: Servidor Local
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000

# Visita: http://localhost:8000
```

### Método 3: GitHub Pages
1. Fork este repositorio
2. Ve a Settings > Pages
3. Selecciona "Deploy from a branch" > main
4. Tu aplicación estará disponible en: `https://tuusuario.github.io/IMAGENMETAMARK/`

## 📖 Guía de Uso Rápido

### 1️⃣ **Cargar Imagen**
```
• Arrastra y suelta una imagen en la zona designada
• O haz clic en "Seleccionar archivo" para elegir desde tu dispositivo
• Formatos soportados: JPG, PNG, WebP, AVIF (hasta 25MB)
```

### 2️⃣ **Editar Metadatos**
```
• Completa los campos: Título, Autor, Descripción, Palabras clave, Copyright
• Los cambios se validan automáticamente
• Previsualiza los metadatos antes de aplicar
```

### 3️⃣ **Aplicar Marcas de Agua**
```
• Marca de agua de texto:
  - Escribe tu texto
  - Selecciona fuente, color y tamaño
  - Ajusta opacidad y posición

• Marca de agua de imagen:
  - Sube tu logo/imagen
  - Configura tamaño y opacidad
  - Posiciónala donde prefieras
```

### **4️⃣ Optimizar y Descargar**

```text
• Ajusta la calidad de compresión (1-100%)
• Selecciona formato de salida (JPEG, PNG, WebP, AVIF)
• Usa "Test conversión" para verificar compatibilidad
• Haz clic en "Descargar imagen" o usa Ctrl+S
```

## ⌨️ Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + S` | Descargar imagen |
| `Ctrl + Z` | Deshacer |
| `Ctrl + Y` | Rehacer |
| `Ctrl + R` | Resetear cambios |
| `Escape` | Quitar foco del elemento actual |

## 🔧 Características Técnicas

### **Tecnologías Utilizadas**

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Frameworks**: TailwindCSS para diseño responsivo
- **Icons**: Font Awesome 6.4.0
- **APIs**: Canvas API, File System Access API, Fullscreen API
- **Conversión de imágenes**: @jsquash/avif, @jsquash/png, @jsquash/jpeg, @jsquash/webp

### **Optimizaciones de Rendimiento**

- ✅ **Debouncing**: Evita renderizado excesivo durante edición
- ✅ **Caching**: Almacena marcas de agua para reutilización
- ✅ **Lazy Loading**: Carga optimizada de recursos
- ✅ **RequestAnimationFrame**: Animaciones suaves y eficientes
- ✅ **Compresión avanzada**: Librerías @jsquash para mejor calidad/tamaño
- ✅ **Fallback inteligente**: Sistema de respaldo para máxima compatibilidad

### **Compatibilidad**
```
✅ Chrome 80+     ✅ Firefox 75+     ✅ Safari 13+
✅ Edge 80+       ✅ Opera 67+       ✅ iOS Safari 13+
✅ Chrome Mobile  ✅ Firefox Mobile  ✅ Samsung Internet
```

### **Formatos Soportados**

| Formato | Entrada | Salida | Compresión | Transparencia |
|---------|:-------:|:------:|:----------:|:-------------:|
| JPEG    | ✅      | ✅     | Con pérdida | ❌           |
| PNG     | ✅      | ✅     | Sin pérdida | ✅           |
| WebP    | ✅      | ✅     | Ambas      | ✅           |
| AVIF    | ✅      | ✅     | Ambas      | ✅           |

## 🛠️ Configuración Avanzada

### **Variables de Entorno**
```javascript
// Configurar límites de archivo
AppConfig.maxFileSize = 25 * 1024 * 1024; // 25MB

// Ajustar calidad por defecto
outputQuality = 0.8; // 80%

// Personalizar dimensiones de canvas
AppConfig.maxCanvasWidth = 800;
AppConfig.maxCanvasHeight = 600;
```

### **Personalización de Tema**
```css
:root {
  --accent-primary: #3b82f6;    /* Color principal */
  --accent-secondary: #06b6d4;  /* Color secundario */
  --border-radius: 0.5rem;      /* Radio de bordes */
  --transition: 0.2s ease;      /* Duración de transiciones */
}
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. **Fork** el repositorio
2. Crea una **rama feature** (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un **Pull Request**

### **Áreas de Contribución**
- 🐛 **Bug fixes**: Corrección de errores
- ✨ **Features**: Nuevas características
- 📚 **Documentación**: Mejoras en docs
- 🎨 **UI/UX**: Mejoras de interfaz
- ⚡ **Performance**: Optimizaciones

## 📝 Roadmap

### **v2.1 (Q3 2025)** ✅ COMPLETADO

- [x] ✅ **Conversión AVIF mejorada**: Integración de @jsquash/avif para máxima calidad
- [x] ✅ **Botones adaptativos**: Ancho automático según contenido del texto  
- [x] ✅ **UI mejorada**: Textos y placeholders en mayúsculas
- [x] ✅ **Test de conversión**: Verificación automática de formatos soportados
- [ ] Editor de filtros (blur, sepia, saturación)
- [ ] Soporte para archivos RAW
- [ ] Procesamiento en lotes

### **v2.2 (Q4 2025)**

- [ ] Plugin para WordPress
- [ ] API REST para integración
- [ ] Editor avanzado de metadatos GPS
- [ ] Soporte para videos (marcas de agua)

### **v3.0 (2026)**

- [ ] Inteligencia artificial para optimización automática
- [ ] Editor colaborativo en tiempo real
- [ ] Aplicación móvil nativa
- [ ] Versión de escritorio (Electron)

## 📊 Estadísticas del Proyecto

```text
📦 Tamaño total: ~95KB (minificado, incluye @jsquash)
⚡ Tiempo de carga: <2 segundos
🔧 Dependencias externas: @jsquash libraries (CDN)
🎯 Compatibilidad: 95%+ navegadores modernos
📱 Responsive: 100% compatible móvil/desktop
♿ Accesibilidad: WCAG 2.1 AA
🖼️ Formatos soportados: JPEG, PNG, WebP, AVIF
⚙️ Conversión avanzada: Librerías optimizadas @jsquash
```

## 🔐 Seguridad y Privacidad

### **🛡️ Características de Seguridad**
- ✅ **Procesamiento local**: Las imágenes nunca se envían a servidores
- ✅ **Validación estricta**: Verificación de tipos de archivo y contenido
- ✅ **Sanitización**: Limpieza automática de inputs maliciosos
- ✅ **CSP Headers**: Content Security Policy implementado
- ✅ **XSS Protection**: Protección contra inyección de scripts

### **🔒 Privacidad**
- ✅ **Sin cookies**: No se almacenan datos personales
- ✅ **Sin tracking**: No hay seguimiento de usuarios
- ✅ **GDPR compliant**: Cumple con regulaciones europeas
- ✅ **Código abierto**: Auditable y transparente

## 🚨 Solución de Problemas

### **Problemas Comunes**

#### **❌ "Error al cargar la imagen"**
```
• Verifica que el archivo sea una imagen válida
• Comprueba que el tamaño no exceda 25MB
• Intenta con un formato diferente (JPG, PNG)
```

### **⚠️ "Formato no soportado"**

```text
• Algunos navegadores no soportan WebP/AVIF completamente
• Usa "Test conversión" para verificar compatibilidad en tu navegador
• Usa Chrome/Firefox actualizados para mejor soporte
• Convierte a JPEG/PNG como alternativa universal
```

#### **🐌 "Rendimiento lento"**

```text
• Reduce el tamaño de la imagen original
• Usa el botón "Test conversión" para comprobar rendimiento
• Cierra otras pestañas del navegador
• Usa Chrome para mejor rendimiento de Canvas
```

#### **📱 "Problemas en móvil"**
```
• Usa orientación horizontal para mejor experiencia
• Asegúrate de tener suficiente RAM disponible
• Actualiza tu navegador móvil
```

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - consulta el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Javier Tamarit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👨‍💻 Autor

**Javier Tamarit**
- 🌐 Website: [javierTamarit.com](https://javiertamarit.com)
- 💼 LinkedIn: [/in/javiertamarit](https://linkedin.com/in/javiertamarit)
- 🐦 Twitter: [@JavierTamarit](https://twitter.com/JavierTamarit)
- 📧 Email: [contacto@javiertamarit.com](mailto:contacto@javiertamarit.com)

## 🙏 Agradecimientos

- **TailwindCSS** - Framework CSS increíble
- **Font Awesome** - Iconos hermosos y consistentes  
- **MDN Web Docs** - Documentación excepcional
- **Comunidad Open Source** - Por el feedback y contribuciones

## ⭐ ¿Te gusta el proyecto?

Si ImageMetadataPro te ha sido útil:

1. ⭐ **Dale una estrella** a este repositorio
2. 🐦 **Compártelo** en redes sociales
3. 🐛 **Reporta bugs** para mejorar la aplicación
4. 💡 **Sugiere features** para futuras versiones
5. 🤝 **Contribuye** con código o documentación

---

<div align="center">

**Hecho con ❤️ en España**

[⬆ Volver al inicio](#-imagemetadatapro)

</div>

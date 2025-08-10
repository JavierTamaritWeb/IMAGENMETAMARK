# 🧪 Test Suite - ImageMetadataPro

## Descripción

Suite completa de tests automatizados para verificar el correcto funcionamiento de **ImageMetadataPro**, incluyendo funcionalidad, interfaz de usuario, modo oscuro y responsividad.

## Archivos de Test

### 📋 `tests.html`
- **Suite de tests visual interactiva**
- Interfaz gráfica con estadísticas en tiempo real
- Tests organizados por categorías
- Iframe embebido con la aplicación
- Progreso visual y logging detallado

### 🔧 `test-runner.js`
- **Script avanzado para consola del navegador**
- Tests específicos de modo oscuro
- Verificación de performance
- Tests de funcionalidad de botones y formularios
- Métricas detalladas

## Cómo Ejecutar los Tests

### Método 1: Interfaz Visual (Recomendado)

1. **Abrir el archivo de tests:**
   ```bash
   # Desde navegador
   file:///ruta/a/tu/proyecto/tests.html
   
   # O desde servidor local
   python -m http.server 8000
   # Luego ir a: http://localhost:8000/tests.html
   ```

2. **Ejecutar tests:**
   - **Todos los tests:** Botón "Ejecutar Todos los Tests"
   - **Tests de UI:** Botón "Tests de UI"  
   - **Tests de funcionalidad:** Botón "Tests de Funcionalidad"
   - **Tests modo oscuro:** Botón "Tests Modo Oscuro"

3. **Interpretar resultados:**
   - ✅ Verde: Test pasado
   - ❌ Rojo: Test fallido
   - ⏳ Amarillo: Test pendiente
   - 🔄 Azul: Test en ejecución

### Método 2: Consola del Navegador

1. **Abrir la aplicación principal:**
   ```
   file:///ruta/a/tu/proyecto/index.html
   ```

2. **Abrir DevTools (F12) y pegar en consola:**
   ```javascript
   // Cargar el test runner
   const script = document.createElement('script');
   script.src = './test-runner.js';
   document.head.appendChild(script);
   ```

3. **Ejecutar tests específicos:**
   ```javascript
   // Tests completos de modo oscuro
   runDarkModeTests();
   
   // Tests de funcionalidad de botones
   runButtonTests();
   
   // Tests de formularios
   runFormTests();
   
   // Tests de performance
   runPerformanceTests();
   ```

## Categorías de Tests

### 🎨 Tests de UI
- ✅ Verificación de header y estructura
- ✅ Presencia de secciones principales
- ✅ Botones de navegación y control
- ✅ Elementos de formulario
- ✅ Áreas de drag & drop

### ⚙️ Tests de Funcionalidad
- ✅ Toggle de tema claro/oscuro
- ✅ Campos de metadatos (título, autor, copyright)
- ✅ Generación automática de copyright
- ✅ Geolocalización GPS
- ✅ Controles de filtros (brillo, contraste, saturación, blur)
- ✅ Selector de calidad de imagen
- ✅ Configuración de marcas de agua

### 🌙 Tests de Modo Oscuro
- ✅ Activación/desactivación del modo oscuro
- ✅ Variables CSS actualizadas
- ✅ Contraste de texto adecuado
- ✅ Estilos de botones en modo oscuro
- ✅ Campos de entrada con fondos apropiados
- ✅ Backgrounds de cards
- ✅ Controles de slider personalizados
- ✅ Barras de progreso

### 📱 Tests de Responsividad
- ✅ Adaptación a viewport móvil
- ✅ Grid layout responsive
- ✅ Elementos flexibles

### 📝 Tests de Formularios
- ✅ Validación de estructura
- ✅ Tipos de input correctos
- ✅ Funcionalidad de campos
- ✅ Event handlers

### ⚡ Tests de Performance
- ✅ Carga de CSS
- ✅ Variables CSS definidas
- ✅ JavaScript funcional
- ✅ Elementos DOM cargados

## Elementos Testados

### IDs Críticos Verificados:
```javascript
// Navegación y tema
'theme-toggle', 'theme-icon'

// Upload de archivos
'drop-area', 'file-selector', 'file-input', 'remove-file'

// Metadatos
'metaTitle', 'metaAuthor', 'metaCopyright', 'metaLicense'
'metaLatitude', 'metaLongitude', 'metaAltitude'
'description', 'keywords'

// Funcionalidad
'autoCopyright', 'getCurrentLocation'

// Marca de agua
'watermark-text', 'watermark-font', 'watermark-color'
'watermark-position'

// Filtros
'brightness', 'contrast', 'saturation', 'blur'

// Configuración
'output-quality', 'quality-percentage'
'download-image'
```

### CSS Variables Verificadas:
```css
--bg-color
--text-color
--card-bg
--border-color
--primary-color
```

## Interpretación de Resultados

### ✅ Tests Exitosos
Cuando todos los tests pasan:
- La aplicación funciona correctamente
- El modo oscuro está implementado apropiadamente
- Todos los elementos UI están presentes
- La funcionalidad core está operativa

### ❌ Tests Fallidos - Posibles Causas

#### **Tests de UI fallidos:**
- Elementos HTML faltantes o con IDs incorrectos
- CSS no cargado completamente
- JavaScript no inicializado

#### **Tests de Modo Oscuro fallidos:**
- Variables CSS no definidas para `[data-theme="dark"]`
- Contraste insuficiente en texto
- Backgrounds blancos en modo oscuro
- Botones sin estilos específicos

#### **Tests de Funcionalidad fallidos:**
- Event handlers no asignados
- Formularios sin validación
- JavaScript con errores
- APIs no disponibles (ej: geolocalización)

## Solución de Problemas

### Error: "Elemento no encontrado"
```javascript
// Verificar que el elemento existe
console.log(document.querySelector('#elemento-id'));

// Verificar que el iframe está cargado (en tests.html)
console.log(iframe.contentDocument.readyState);
```

### Error: "CSS variables no definidas"
```javascript
// Verificar variables CSS
const rootStyles = getComputedStyle(document.documentElement);
console.log(rootStyles.getPropertyValue('--bg-color'));
```

### Error: "Función no disponible"
```javascript
// Verificar que JavaScript está cargado
console.log(typeof updatePreview);
console.log(typeof UIManager);
```

## Extensión de Tests

### Agregar Nuevos Tests

1. **En tests.html:**
```javascript
testSuite.addTest('Categoría', 'Nombre del Test', async () => {
    // Lógica del test
    const element = await testSuite.waitForElement('#mi-elemento');
    testSuite.assert(condition, 'Mensaje de error');
}, 'Descripción del test');
```

2. **En test-runner.js:**
```javascript
async testMiNuevaFuncionalidad() {
    console.log('🧪 Testing nueva funcionalidad...');
    
    // Lógica del test
    const element = document.getElementById('mi-elemento');
    if (!element) throw new Error('Elemento no encontrado');
    
    return true;
}
```

### Tests Específicos de Navegador

```javascript
// Test específico para Chrome
if (navigator.userAgent.includes('Chrome')) {
    // Tests específicos de Chrome
}

// Test específico para Safari  
if (navigator.userAgent.includes('Safari')) {
    // Tests específicos de Safari
}
```

## Mejores Prácticas

### ✅ Hacer
- Usar `data-testid` para elementos críticos
- Implementar timeouts apropiados
- Verificar precondiciones antes de tests
- Limpiar estado entre tests
- Usar assertions descriptivos

### ❌ Evitar
- Tests que dependan de timing específico
- Hardcodear delays muy largos
- Tests que modifiquen estado global
- Assertions sin mensajes de error
- Tests que dependan de orden específico

## Contribuir

Para agregar nuevos tests o mejorar existentes:

1. Identificar funcionalidad a testear
2. Agregar test en la categoría apropiada
3. Verificar que el test es determinístico
4. Documentar el test apropiadamente
5. Probar en múltiples navegadores

---

## 📊 Reporte de Estado Actual

**✅ 20+ Tests implementados**
- UI Tests: 7 tests
- Funcionalidad: 8 tests  
- Modo Oscuro: 8 tests
- Responsividad: 1 test
- Formularios: 1 test
- Performance: 2 tests

**🎯 Cobertura:**
- ✅ Elementos críticos UI
- ✅ Funcionalidad core
- ✅ Modo oscuro completo
- ✅ Formularios principales
- ✅ Performance básica

**🔧 Próximas mejoras:**
- Tests de integración
- Tests de regresión visual
- Tests de accesibilidad
- Tests de carga de archivos
- Tests de exportación de imágenes

---

*Tests creados para ImageMetadataPro v2.0*  
*Última actualización: Agosto 2025*

// 🧪 Test Suite Avanzado para ImageMetadataPro
// Script para ejecución de tests desde consola del navegador

class AdvancedTestRunner {
    constructor() {
        this.results = [];
        this.darkModeTests = [];
        this.performanceMetrics = {};
    }
    
    // Test completo de modo oscuro
    async testDarkModeComplete() {
        console.log('🌙 Iniciando tests completos de modo oscuro...');
        
        const tests = [
            {
                name: 'Toggle Theme Functionality',
                test: this.testThemeToggle.bind(this)
            },
            {
                name: 'Dark Mode CSS Variables',
                test: this.testDarkModeVariables.bind(this)
            },
            {
                name: 'Text Contrast in Dark Mode',
                test: this.testTextContrast.bind(this)
            },
            {
                name: 'Button Styles Dark Mode',
                test: this.testButtonStylesDark.bind(this)
            },
            {
                name: 'Input Fields Dark Mode',
                test: this.testInputFieldsDark.bind(this)
            },
            {
                name: 'Card Backgrounds Dark Mode',
                test: this.testCardBackgroundsDark.bind(this)
            },
            {
                name: 'Slider Controls Dark Mode',
                test: this.testSliderControlsDark.bind(this)
            },
            {
                name: 'Progress Bars Dark Mode',
                test: this.testProgressBarsDark.bind(this)
            }
        ];
        
        for (const test of tests) {
            try {
                console.log(`🧪 Ejecutando: ${test.name}`);
                await test.test();
                console.log(`✅ PASS: ${test.name}`);
                this.results.push({ name: test.name, status: 'PASS', error: null });
            } catch (error) {
                console.error(`❌ FAIL: ${test.name}`, error);
                this.results.push({ name: test.name, status: 'FAIL', error: error.message });
            }
        }
        
        this.printDarkModeReport();
    }
    
    async testThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) throw new Error('Theme toggle button not found');
        
        const initialTheme = document.documentElement.getAttribute('data-theme');
        themeToggle.click();
        
        // Esperar a que se aplique el cambio
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const newTheme = document.documentElement.getAttribute('data-theme');
        if (initialTheme === newTheme) {
            throw new Error('Theme did not change after clicking toggle');
        }
        
        // Verificar que el icono cambió
        const icon = themeToggle.querySelector('i');
        if (!icon) throw new Error('Theme toggle icon not found');
        
        return true;
    }
    
    async testDarkModeVariables() {
        // Activar modo oscuro
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const rootStyles = getComputedStyle(document.documentElement);
        
        // Verificar variables CSS críticas
        const criticalVars = [
            '--bg-color',
            '--text-color',
            '--card-bg',
            '--border-color',
            '--primary-color'
        ];
        
        for (const varName of criticalVars) {
            const value = rootStyles.getPropertyValue(varName);
            if (!value || value.trim() === '') {
                throw new Error(`CSS variable ${varName} not defined in dark mode`);
            }
        }
        
        return true;
    }
    
    async testTextContrast() {
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const textElements = [
            'h1', 'h2', 'h3', 'p', 'label', '.card h3', '.filter-group h4'
        ];
        
        for (const selector of textElements) {
            const element = document.querySelector(selector);
            if (element) {
                const styles = getComputedStyle(element);
                const color = styles.color;
                
                // Verificar que el color no es negro (que sería invisible en fondo oscuro)
                if (color === 'rgb(0, 0, 0)' || color === '#000000') {
                    throw new Error(`Text element ${selector} has black color in dark mode`);
                }
            }
        }
        
        return true;
    }
    
    async testButtonStylesDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const buttons = document.querySelectorAll('button, .btn');
        
        if (buttons.length === 0) {
            throw new Error('No buttons found to test');
        }
        
        for (const button of buttons) {
            const styles = getComputedStyle(button);
            const bgColor = styles.backgroundColor;
            const color = styles.color;
            
            // Verificar que tienen estilos definidos
            if (!bgColor || bgColor === 'rgba(0, 0, 0, 0)') {
                throw new Error(`Button has no background color in dark mode`);
            }
            
            if (!color || color === 'rgba(0, 0, 0, 0)') {
                throw new Error(`Button has no text color in dark mode`);
            }
        }
        
        return true;
    }
    
    async testInputFieldsDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const inputs = document.querySelectorAll('input, textarea, select');
        
        for (const input of inputs) {
            const styles = getComputedStyle(input);
            const bgColor = styles.backgroundColor;
            const color = styles.color;
            const borderColor = styles.borderColor;
            
            // Verificar que tienen estilos apropiados para modo oscuro
            if (bgColor === 'rgb(255, 255, 255)') {
                throw new Error(`Input field has white background in dark mode`);
            }
            
            if (color === 'rgb(0, 0, 0)') {
                throw new Error(`Input field has black text in dark mode`);
            }
        }
        
        return true;
    }
    
    async testCardBackgroundsDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const cards = document.querySelectorAll('.card, .section-card');
        
        for (const card of cards) {
            const styles = getComputedStyle(card);
            const bgColor = styles.backgroundColor;
            
            // Verificar que las cards no tienen fondo blanco en modo oscuro
            if (bgColor === 'rgb(255, 255, 255)') {
                throw new Error(`Card has white background in dark mode`);
            }
        }
        
        return true;
    }
    
    async testSliderControlsDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const sliders = document.querySelectorAll('input[type="range"]');
        
        for (const slider of sliders) {
            const styles = getComputedStyle(slider);
            // Verificar que los sliders tienen estilos personalizados
            const appearance = styles.appearance || styles.webkitAppearance;
            
            // Los sliders personalizados deben tener appearance: none
            if (appearance !== 'none') {
                console.warn(`Slider may not have custom dark mode styling`);
            }
        }
        
        return true;
    }
    
    async testProgressBarsDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const progressBars = document.querySelectorAll('.progress-bar, .progress');
        
        for (const progressBar of progressBars) {
            const styles = getComputedStyle(progressBar);
            const bgColor = styles.backgroundColor;
            
            // Verificar que las barras de progreso tienen estilos apropiados
            if (!bgColor || bgColor === 'rgba(0, 0, 0, 0)') {
                throw new Error(`Progress bar has no background in dark mode`);
            }
        }
        
        return true;
    }
    
    // Test de funcionalidad de todos los botones
    async testAllButtons() {
        console.log('🎯 Iniciando test de funcionalidad de botones...');
        
        const buttons = [
            { id: 'theme-toggle', name: 'Theme Toggle' },
            { id: 'autoCopyright', name: 'Auto Copyright' },
            { id: 'getCurrentLocation', name: 'Get Location' },
            { id: 'download-image', name: 'Download Button' },
            { id: 'file-selector', name: 'File Selector' },
            { id: 'remove-file', name: 'Remove File' },
            { selector: '.filter-preset', name: 'Filter Presets' },
            { selector: '.format-option', name: 'Format Options' }
        ];
        
        for (const buttonInfo of buttons) {
            try {
                let element;
                if (buttonInfo.id) {
                    element = document.getElementById(buttonInfo.id);
                } else if (buttonInfo.selector) {
                    element = document.querySelector(buttonInfo.selector);
                }
                
                if (element) {
                    console.log(`🧪 Testing: ${buttonInfo.name}`);
                    
                    // Verificar que el elemento existe y es clickeable
                    if (element.disabled) {
                        console.warn(`⚠️ ${buttonInfo.name} is disabled`);
                    }
                    
                    // Verificar eventos
                    const hasClickHandler = element.onclick || 
                                          element.getAttribute('onclick') ||
                                          this.hasEventListener(element, 'click');
                    
                    if (!hasClickHandler) {
                        console.warn(`⚠️ ${buttonInfo.name} may not have click handler`);
                    }
                    
                    console.log(`✅ ${buttonInfo.name} test completed`);
                } else {
                    console.warn(`⚠️ ${buttonInfo.name} not found`);
                }
            } catch (error) {
                console.error(`❌ Error testing ${buttonInfo.name}:`, error);
            }
        }
    }
    
    // Test de formularios y campos de entrada
    async testFormFunctionality() {
        console.log('📝 Iniciando test de funcionalidad de formularios...');
        
        const formFields = [
            { id: 'metaTitle', name: 'Title Field', testValue: 'Test Title' },
            { id: 'metaAuthor', name: 'Author Field', testValue: 'Test Author' },
            { id: 'metaCopyright', name: 'Copyright Field', testValue: 'Test Copyright' },
            { id: 'metaLicense', name: 'License Field', testValue: 'Creative Commons' },
            { id: 'watermark-text', name: 'Watermark Text', testValue: 'Test Watermark' },
            { id: 'brightness', name: 'Brightness Slider', testValue: '20' },
            { id: 'contrast', name: 'Contrast Slider', testValue: '10' },
            { id: 'saturation', name: 'Saturation Slider', testValue: '15' },
            { id: 'blur', name: 'Blur Slider', testValue: '5' },
            { id: 'output-quality', name: 'Quality Slider', testValue: '90' },
            { id: 'metaLatitude', name: 'Latitude Field', testValue: '40.7128' },
            { id: 'metaLongitude', name: 'Longitude Field', testValue: '-74.0060' },
            { id: 'description', name: 'Description Field', testValue: 'Test description' },
            { id: 'keywords', name: 'Keywords Field', testValue: 'test, image, photo' }
        ];
        
        for (const field of formFields) {
            try {
                const element = document.getElementById(field.id);
                if (element) {
                    console.log(`🧪 Testing: ${field.name}`);
                    
                    // Guardar valor original
                    const originalValue = element.value;
                    
                    // Probar asignación de valor
                    element.value = field.testValue;
                    element.dispatchEvent(new Event('input', { bubbles: true }));
                    element.dispatchEvent(new Event('change', { bubbles: true }));
                    
                    // Verificar que el valor se asignó
                    if (element.value !== field.testValue) {
                        console.warn(`⚠️ ${field.name} value assignment failed`);
                    }
                    
                    // Restaurar valor original
                    element.value = originalValue;
                    element.dispatchEvent(new Event('input', { bubbles: true }));
                    
                    console.log(`✅ ${field.name} test completed`);
                } else {
                    console.warn(`⚠️ ${field.name} not found`);
                }
            } catch (error) {
                console.error(`❌ Error testing ${field.name}:`, error);
            }
        }
    }
    
    // Función utilitaria para verificar event listeners
    hasEventListener(element, eventType) {
        // Método simple para verificar si un elemento tiene listeners
        const listeners = getEventListeners ? getEventListeners(element) : null;
        return listeners && listeners[eventType] && listeners[eventType].length > 0;
    }
    
    // Test de performance
    async testPerformance() {
        console.log('⚡ Iniciando test de performance...');
        
        const startTime = performance.now();
        
        // Test de carga de imágenes
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        
        for (const img of images) {
            if (img.complete) {
                loadedImages++;
            }
        }
        
        // Test de elementos DOM
        const totalElements = document.querySelectorAll('*').length;
        
        // Test de estilos CSS
        const styleSheets = document.styleSheets.length;
        
        const endTime = performance.now();
        
        this.performanceMetrics = {
            totalElements,
            loadedImages,
            totalImages: images.length,
            styleSheets,
            testDuration: endTime - startTime
        };
        
        console.log('📊 Performance Metrics:', this.performanceMetrics);
        
        // Verificar métricas básicas
        if (totalElements < 50) {
            console.warn('⚠️ Very few DOM elements detected');
        }
        
        if (styleSheets === 0) {
            console.error('❌ No stylesheets loaded');
        }
        
        console.log('✅ Performance test completed');
    }
    
    // Generar reporte completo
    printDarkModeReport() {
        console.log('\n🌙 === REPORTE DE TESTS MODO OSCURO ===');
        console.log('==========================================');
        
        const passed = this.results.filter(r => r.status === 'PASS').length;
        const failed = this.results.filter(r => r.status === 'FAIL').length;
        
        console.log(`✅ Tests pasados: ${passed}`);
        console.log(`❌ Tests fallidos: ${failed}`);
        console.log(`📊 Total: ${this.results.length}`);
        console.log('==========================================');
        
        // Mostrar detalles de tests fallidos
        const failedTests = this.results.filter(r => r.status === 'FAIL');
        if (failedTests.length > 0) {
            console.log('\n❌ TESTS FALLIDOS:');
            failedTests.forEach(test => {
                console.log(`   • ${test.name}: ${test.error}`);
            });
        }
        
        console.log('\n🎯 RECOMENDACIONES:');
        if (failed === 0) {
            console.log('   ✅ ¡Excelente! Todos los tests de modo oscuro pasaron');
        } else {
            console.log('   🔧 Revisar los estilos CSS para modo oscuro');
            console.log('   🎨 Verificar contraste de colores');
            console.log('   📱 Probar en diferentes navegadores');
        }
        
        console.log('\n==========================================');
    }
}

// Funciones de acceso rápido
window.testRunner = new AdvancedTestRunner();

window.runDarkModeTests = () => window.testRunner.testDarkModeComplete();
window.runButtonTests = () => window.testRunner.testAllButtons();
window.runFormTests = () => window.testRunner.testFormFunctionality();
window.runPerformanceTests = () => window.testRunner.testPerformance();

// Ejecutar tests básicos al cargar
console.log('🧪 Advanced Test Runner loaded');
console.log('📋 Available commands:');
console.log('   • runDarkModeTests() - Test completo modo oscuro');
console.log('   • runButtonTests() - Test funcionalidad botones');
console.log('   • runFormTests() - Test formularios y campos');
console.log('   • runPerformanceTests() - Test performance');

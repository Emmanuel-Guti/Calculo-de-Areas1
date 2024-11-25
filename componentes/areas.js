const app = Vue.createApp({});

app.component('area-triangulo', {
    data() {
        return {
            base: 0,
            altura: 0,
            area: null
        };
    },
    methods: {
        calcularArea() {
            document.getElementById('calculando').style.display = 'block'; 
            setTimeout(() => {
                this.area = (this.base * this.altura) / 2;
                this.mostrarResultado();
            }, 500);
        },
        mostrarResultado() {
            const resultadoDiv = document.getElementById('resultado');
            const resultadoText = document.getElementById('resultado-text');
            
            resultadoText.innerHTML = `El área del Triángulo es: ${this.area.toFixed(2)} unidades cuadradas.`;
            resultadoDiv.classList.add('mostrar');
            document.getElementById('calculando').style.display = 'none';
        }
    },
    template: `
        <div>
            <h3>Triángulo</h3>
            <input type="number" v-model="base" placeholder="Base" />
            <input type="number" v-model="altura" placeholder="Altura" />
            <button @click="calcularArea">Calcular Área</button>
        </div>
    `
});

app.component('area-cuadrado', {
    data() {
        return {
            lado: 0,
            area: null
        };
    },
    methods: {
        calcularArea() {
            document.getElementById('calculando').style.display = 'block'; // Muestra "calculando..."
            setTimeout(() => {
                this.area = this.lado ** 2;
                this.mostrarResultado();
            }, 500);
        },
        mostrarResultado() {
            const resultadoDiv = document.getElementById('resultado');
            const resultadoText = document.getElementById('resultado-text');
            
            resultadoText.innerHTML = `El área del Cuadrado es: ${this.area.toFixed(2)} unidades cuadradas.`;
            resultadoDiv.classList.add('mostrar');
            document.getElementById('calculando').style.display = 'none';
        }
    },
    template: `
        <div>
            <h3>Cuadrado</h3>
            <input type="number" v-model="lado" placeholder="Lado" />
            <button @click="calcularArea">Calcular Área</button>
        </div>
    `
});

app.component('area-circulo', {
    data() {
        return {
            radio: 0,
            area: null
        };
    },
    methods: {
        calcularArea() {
            document.getElementById('calculando').style.display = 'block'; 
            setTimeout(() => {
                this.area = Math.PI * (this.radio ** 2);
                this.mostrarResultado();
            }, 500);
        },
        mostrarResultado() {
            const resultadoDiv = document.getElementById('resultado');
            const resultadoText = document.getElementById('resultado-text');
            
            resultadoText.innerHTML = `El área del Círculo es: ${this.area.toFixed(2)} unidades cuadradas.`;
            resultadoDiv.classList.add('mostrar');
            document.getElementById('calculando').style.display = 'none';
        }
    },
    template: `
        <div>
            <h3>Círculo</h3>
            <input type="number" v-model="radio" placeholder="Radio" />
            <button @click="calcularArea">Calcular Área</button>
        </div>
    `
});

app.mount('#app');


function mostrarResultado(area) {
    const resultadoDiv = document.getElementById('resultado');
    const resultadoText = document.getElementById('resultado-text');
    
    resultadoText.innerHTML = `El área es: ${area.toFixed(2)} unidades cuadradas.`;
    
    resultadoDiv.classList.add('mostrar');
    
    document.getElementById('calculando').style.display = 'none';
}

function mostrarError() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.add('error');
    resultadoDiv.innerHTML = "¡Error! Los valores son inválidos.";
    resultadoDiv.classList.add('mostrar');
    document.getElementById('calculando').style.display = 'none';
}

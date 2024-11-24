const app = Vue.createApp({});

// Componente para calcular el área de un triángulo
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
            this.area = (this.base * this.altura) / 2;
        }
    },
    template: `
        <div>
            <h3>Triángulo</h3>
            <input type="number" v-model="base" placeholder="Base" />
            <input type="number" v-model="altura" placeholder="Altura" />
            <button @click="calcularArea">Calcular Área</button>
            <p v-if="area !== null">Área: {{ area }}</p>
        </div>
    `
});

// Componente para calcular el área de un cuadrado
app.component('area-cuadrado', {
    data() {
        return {
            lado: 0,
            area: null
        };
    },
    methods: {
        calcularArea() {
            this.area = this.lado ** 2;
        }
    },
    template: `
        <div>
            <h3>Cuadrado</h3>
            <input type="number" v-model="lado" placeholder="Lado" />
            <button @click="calcularArea">Calcular Área</button>
            <p v-if="area !== null">Área: {{ area }}</p>
        </div>
    `
});

// Componente para calcular el área de un círculo
app.component('area-circulo', {
    data() {
        return {
            radio: 0,
            area: null
        };
    },
    methods: {
        calcularArea() {
            this.area = Math.PI * (this.radio ** 2);
        }
    },
    template: `
        <div>
            <h3>Círculo</h3>
            <input type="number" v-model="radio" placeholder="Radio" />
            <button @click="calcularArea">Calcular Área</button>
            <p v-if="area !== null">Área: {{ area.toFixed(2) }}</p>
        </div>
    `
});

app.mount('#app');

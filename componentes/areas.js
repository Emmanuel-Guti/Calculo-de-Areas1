const AreaTriangulo = {
    props: ['titulo'], 
    template: `
        <div class="p-2">
            <h3>{{ titulo }}</h3>
            <input type="number" v-model="base" placeholder="Base" />
            <input type="number" v-model="altura" placeholder="Altura" />
            <button @click="calcularArea">Calcular Área</button>
            <p v-if="area">Resultado: {{ area }}</p>
        </div>
    `,
    data() {
        return {
            base: 0,
            altura: 0,
            area: null,
        };
    },
    methods: {
        calcularArea() {
            if (this.base > 0 && this.altura > 0) {
                this.area = (this.base * this.altura) / 2;
                this.$emit('area-calculada', `Triángulo: ${this.area}`);
            } else {
                this.area = null;
                alert('Base y altura deben ser mayores que cero');
            }
            
        },
    },
};

const AreaCuadrado = {
    props: ['titulo'],
    template: `
        <div class="p-2">
            <h3>{{ titulo }}</h3>
            <input type="number" v-model="lado" placeholder="Lado" />
            <button @click="calcularArea">Calcular Área</button>
            <p v-if="area">Resultado: {{ area }}</p>
        </div>
    `,
    data() {
        return {
            lado: 0,
            area: null,
        };
    },
    methods: {
        calcularArea() {
            if (this.lado > 0) {
                this.area = this.lado ** 2;
                this.$emit('area-calculada', `Cuadrado: ${this.area}`);
            } else {
                this.area = null;
                alert('El lado debe ser mayor que cero');
            }
        },
    },
};

const AreaCirculo = {
    props: ['titulo'],
    template: `
        <div class="p-2">
            <h3>{{ titulo }}</h3>
            <input type="number" v-model="radio" placeholder="Radio" />
            <button @click="calcularArea">Calcular Área</button>
            <p v-if="area">Resultado: {{ area }}</p>
        </div>
    `,
    data() {
        return {
            radio: 0,
            area: null,
        };
    },
    methods: {
        calcularArea() {
            if (this.radio > 0) {
                this.area = (Math.PI * this.radio ** 2).toFixed(2);
                this.$emit('area-calculada', `Círculo: ${this.area}`);
            } else {
                this.area = null;
                alert('El radio debe ser mayor que cero');
            }
        },
    },
};

const app1 = {
    data() {
        return {
            resultados: [],
        };
    },
    methods: {
        agregarResultado(resultado) {
            this.resultados.push(resultado);
        },
    },
    template: `
        <div>
         <h1 class="text-center mb-4">Cálculo de Áreas</h1>
            <div class="d-flex justify-content-between">
                <div class="p-2">
                    <area-triangulo titulo="Área del Triángulo" @area-calculada="agregarResultado"></area-triangulo>
                </div>
                <div class="p-2">
                    <area-cuadrado titulo="Área del Cuadrado" @area-calculada="agregarResultado"></area-cuadrado>
                </div>
                <div class="p-2">
                    <area-circulo titulo="Área del Círculo" @area-calculada="agregarResultado"></area-circulo>
                </div>
            </div>
            <div id="resultado" class="resultado mt-4">
                <h4>Resultados:</h4>
                <ul>
                    <li v-for="resultado in resultados" :key="resultado">{{ resultado }}</li>
                </ul>
            </div>
        </div>
    `,
    components: {
        'area-triangulo': AreaTriangulo,
        'area-cuadrado': AreaCuadrado,
        'area-circulo': AreaCirculo,
    },
};

const app = Vue.createApp(app1);
app.mount('#app');

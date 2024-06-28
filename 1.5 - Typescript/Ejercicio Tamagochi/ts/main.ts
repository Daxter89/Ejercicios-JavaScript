// Empezamos cargando todo el html se ha cargado
document.addEventListener('DOMContentLoaded', (event) => {

    function actualizarBarra(idBarra: string, idPorcentaje: string, incremento: number) {

        // Obtener elementos del DOM por sus IDs
        const barraDeVida = document.getElementById(idBarra)!;  
        const porcentaje = document.getElementById(idPorcentaje)!;  

        let nivelVida = parseInt(porcentaje.innerText);

        // Ajustar el nivel de vida según el tipo de barra
        if (idBarra === 'vida-pelear') {
            nivelVida = Math.min(nivelVida + incremento, 100); // Aumentar la barra de Pelear (hasta un máximo de 100%)
        } else {
            nivelVida = Math.max(nivelVida + incremento, 0); // Decrementar las otras barras (hasta un mínimo de 0%)
        }

        // Actualizar visualmente la barra de vida y el porcentaje en el DOM
        barraDeVida.style.width = `${nivelVida}%`;
        porcentaje.innerText = `${nivelVida}%`;

        // Actualizar la vida de Gormiti calculando el promedio de los porcentajes de las otras barras
        const promedio = calcularPromedio();
        actualizarVidaGormiti(promedio);
    }

    // Funciones que se utilizan para atualizar las barras de vida y los porcentajes
    function actualizarComer(nivelVida: number) {
        const barraDeVida = document.getElementById('vida-comer')!;
        const porcentaje = document.getElementById('porcentaje-comer')!;
        barraDeVida.style.width = `${nivelVida}%`;
        porcentaje.innerText = `${nivelVida}%`;
    }

    function actualizarJugar(nivelVida: number) {
        const barraDeVida = document.getElementById('vida-jugar')!;
        const porcentaje = document.getElementById('porcentaje-jugar')!;
        barraDeVida.style.width = `${nivelVida}%`;
        porcentaje.innerText = `${nivelVida}%`;
    }

    function actualizarPelear(nivelVida: number) {
        const barraDeVida = document.getElementById('vida-pelear')!;
        const porcentaje = document.getElementById('porcentaje-pelear')!;
        barraDeVida.style.width = `${nivelVida}%`;
        porcentaje.innerText = `${nivelVida}%`;
    }

    function actualizarDormir(nivelVida: number) {
        const barraDeVida = document.getElementById('vida-dormir')!;
        const porcentaje = document.getElementById('porcentaje-dormir')!;
        barraDeVida.style.width = `${nivelVida}%`;
        porcentaje.innerText = `${nivelVida}%`;
    }

    function actualizarVidaGormiti(nivelVida: number) {
        const barraDeVida = document.getElementById('vida-gormiti')!;
        const porcentaje = document.getElementById('porcentaje-gormiti')!;
        barraDeVida.style.width = `${nivelVida}%`;
        porcentaje.innerText = `${nivelVida}%`;
    }

    // Inicializar los valores de las barras de vida
    actualizarComer(50);
    actualizarJugar(50);
    actualizarPelear(50);
    actualizarDormir(50);
    actualizarVidaGormiti(50);

    // Función para calcular el promedio de los porcentajes de vida
    function calcularPromedio() {
        const porcentajeComer = parseInt(document.getElementById('porcentaje-comer')!.innerText);
        const porcentajeJugar = parseInt(document.getElementById('porcentaje-jugar')!.innerText);
        const porcentajePelear = parseInt(document.getElementById('porcentaje-pelear')!.innerText);
        const porcentajeDormir = parseInt(document.getElementById('porcentaje-dormir')!.innerText);

        const promedio = (porcentajeComer + porcentajeJugar + porcentajePelear + porcentajeDormir) / 4;
        return Math.round(promedio); // Redondear al entero más cercano
    }

    // Subir los niveles de vida
    const iconosComer = document.querySelectorAll('#comer .icono-container');
    iconosComer.forEach(icono => {
        icono.addEventListener('click', () => actualizarBarra('vida-comer', 'porcentaje-comer', 5));
    });

    const iconosJugar = document.querySelectorAll('#jugar .icono-container');
    iconosJugar.forEach(icono => {
        icono.addEventListener('click', () => actualizarBarra('vida-jugar', 'porcentaje-jugar', 5));
    });

    // Iconos de Pelear: Restar puntos
    const iconosPelearRestar = document.querySelectorAll('#pelear .icono-container:first-child');
    iconosPelearRestar.forEach(icono => {
        icono.addEventListener('click', () => actualizarBarra('vida-pelear', 'porcentaje-pelear', -5));
    });

    // Iconos de Pelear: Sumar puntos
    const iconosPelearSumar = document.querySelectorAll('#pelear .icono-container:nth-child(2)');
    iconosPelearSumar.forEach(icono => {
        icono.addEventListener('click', () => actualizarBarra('vida-pelear', 'porcentaje-pelear', 5));
    });

    const iconosDormir = document.querySelectorAll('#dormir .icono-container');
    iconosDormir.forEach(icono => {
        icono.addEventListener('click', () => actualizarBarra('vida-dormir', 'porcentaje-dormir', 5));
    });

    // Función para decrementar las barras de vida aleatoriamente cada 10 segundos
    function decrementarAleatoriamente() {
        const decrementoMin = -1;
        const decrementoMax = -5;

        // Decrementar la barra de vida de Comer
        actualizarBarra('vida-comer', 'porcentaje-comer', getRandomInt(decrementoMin, decrementoMax));

        // Decrementar la barra de vida de Jugar
        actualizarBarra('vida-jugar', 'porcentaje-jugar', getRandomInt(decrementoMin, decrementoMax));

        // Decrementar la barra de vida de Dormir
        actualizarBarra('vida-dormir', 'porcentaje-dormir', getRandomInt(decrementoMin, decrementoMax));
    }

    // Función para obtener un entero aleatorio entre min (incluido) y max (excluido)
    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Llamar a decrementarAleatoriamente cada 10 segundos (10000 milisegundos)
    setInterval(decrementarAleatoriamente, 10000);
});

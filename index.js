// DECLARACION DE VARIABLE
// Esto inicia el conteo en 0
let count = 0

// Coge el elemento HTML con id "count-el" para mostrar el contador en la variable "countEl"
let countEl = document.getElementById("count-el")

// El elemento HTML con id "save-el" muestra las entradas anteriores.
let saveEl = document.getElementById("save-el")

/*El elemento HTML con id "total-el" muestra el total de un tren por ejemplo y cuando pulsas RESETEAR se queda guardado
Como si fueran entradas a un tren cuando guardas y luego a otro y asi (no se me da bien la imaginacion)*/
let totalEl = document.getElementById("total-el")

//Elemento HTML con id "ingresos-el" para mostrar los ingresos totales
let ingresosEl = document.getElementById("ingresos-el")

//Tarifa por persona 
let tarifa = 1.5


//FUNCION PARA SUMAR GENTE
function increment() {
    // Se suma 1 cada vez que se pulse el boton "increment-btn" creado en el HTML
    count += 1
    // Tambien se puede hacer: count = count + 1

    /*Coges la variable "countEl" y con textContent establecemos/obtenemos el contenido del texto "countEl" 
    y con la variable "count" se manipula el texto en base a la suma anterior.
    Lo habiamos hecho con "innerText" pero mejor "textContent" porque "innerText" da fallos con formato
    countEl.innerText = count*/
    countEl.textContent = count

    //Guardamos automaticamente el resultado en "save-el"
    saveEl.textContent += count + ' - '

    //El color cuando sumas es azul igual que el color del boton
    countEl.style.color = "#0C848F"

    //Llamamos a la funcion calcularIngresos que esta mas abajo explicada
    calcularIngresos()
}

// FUNCION PARA RESTAR GENTE 
function decrement() {
    //Podriamos hacer un IF si el contador es mayor que 0, lo decrementa en 1 y si no da un error
    if (count > 0) {
        count -= 1
        countEl.textContent = count

        //Guardamos automaticamente el resultado en "save-el"
        //Para que haya diferencia con las sumas pongo parentesis
        saveEl.textContent += '(' + count + ')' + ' - '

        //Cuando restas cambia el color del "cont" a rojo que es color del boton
        countEl.style.color = "#AB420A"

        //Se llama a la funcion de calculo
        calcularIngresos()
    } else {
        //alert -> da un mensaje de alerta al usuario
        alert('No puedes poner números negativos')
    }
}

// FUNCION PARA GUARDAR EL CONTEO DE PERSONAS. (ej: x - x - x)
function save() {
    // Declaramos una variable para que al guardar se guarde de forma x - 
    let countStr = count + " - "

    //Añadimos la entrada actual "totalEl" a la string anterior de cadenas ya guardadas
    totalEl.textContent += countStr
}

// FUNCION PARA CALCULAR INGRESOS
function calcularIngresos() {
    //Variable para calcular los ingresos totales
    let ingresos = count * tarifa

    //Lo mostramos en el elemento "ingresos-el" del HTML
    ingresosEl.textContent = "Ingresos: " + ingresos + "€"

}

// FUNCION PARA RESETEAR EL CONTENIDO
function reset() {
    //Una alerta para indicar que se ha pulsado el boton de reset y que se van a resetear las entradas anteriores
    alert("Se van a resetear las entradas anteriores")

    // Reinicia el contenido del id "count-el" del HTML a 0 
    count = 0
    countEl.textContent = 0

    //Ponemos otra vez el "cont" en negro
    countEl.style.color = "black"

    // Resetear "save-el" y "ingresos-el" pero guardando el texto
    saveEl.textContent = "Entradas anteriores: "
    ingresosEl.textContent = "Ingresos: 0€"
}
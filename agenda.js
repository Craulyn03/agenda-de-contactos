const formulario = document.querySelector('.formulario')
const btn = document.getElementById('btn')
const btnAgregar = document.getElementById('btn-agregar')
const inputNombre = document.getElementById('input-nombre')
const inputApellido = document.getElementById('input-apellido')
const inputTelefono = document.getElementById('input-telefono')
const inputEmail= document.getElementById('input-email')
const tbody = document.getElementById('tbody')
const formContainer = document.querySelector('.formContainer')


const db = window.localStorage


const guardarContactos = (db,contacto)=>{
    db.setItem(contacto.id,JSON.stringify(contacto))
    
}

const cargarContactos = (db) =>{
    let claves = Object.keys(db)
    for (clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        obtenerDatos (contacto , db)
        
    }
    
}

btn.onclick = ()=>{
    let contacto = {
        id: Math.random(1,100),
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        telefono: inputTelefono.value,
        email: inputEmail.value,
    }

    guardarContactos(db,contacto)
}

cargarContactos(db)

function obtenerDatos (contacto,db){
   
    let nombre = contacto.nombre;
    let apellido = contacto.apellido;
    let telefono = contacto.telefono;
    let email = contacto.email;
    let iconoBorrar = document.createElement('span')
    iconoBorrar.className = "material-icons-outlined"
    iconoBorrar.textContent = 'delete_forever'
    
    let tableTr = document.createElement('tr')

    for (let i= 0;  i<5; i++){
        let tableTd = document.createElement('td')
        if (i===0){
            tableTd.setAttribute('data-label', 'Nombre' )
        }
        if (i===1){
            tableTd.setAttribute('data-label', 'Apellido' )
        }

        if (i===2){
            tableTd.setAttribute('data-label', 'Telefono' )
        }

        if (i===3){
            tableTd.setAttribute('data-label', 'Email' )
        }
        
        console.log(tableTd)

        let array = [nombre,apellido,telefono,email,""]
        tableTd.innerHTML = array[i]
        
        tbody.appendChild(tableTr)
        tableTr.appendChild(tableTd)
        tableTd.appendChild(iconoBorrar)

        

        
        
       
    }
    
    
    iconoBorrar.addEventListener('click', (e)=>{
        e.target.parentNode.parentNode.remove()
    })
}


btnAgregar.addEventListener('click', ()=>{
    formContainer.style.display = 'flex'
})

const back = ()=>{
    formContainer.style.display = "none";
    formulario.reset()
}


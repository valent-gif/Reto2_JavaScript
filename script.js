const estudiantes =[
{id: 1, nombre: 'Ana', edad: 20},
{ id: 2, nombre: 'Juan', edad: 22 },
{ id: 3, nombre: 'Maria', edad: 21},
];

function IDEstudiante (id){
    return new Promise ((resolve, reject)=>{
        const estudiante = estudiantes.find(est => est.id == id);

        if (estudiante) {
            resolve(estudiante)

        } else {
            reject(`Error: No existe un estudiantes con ese ID ${id}.`); 
        }
    });
}

console.log("Busqueda del estudiante con ID 2");
IDEstudiante(2)
    .then(estudiante => {
        console.log("Estudiante encontrado:", estudiante);
    })
    .catch(error => {
        console.error(error);
    });

console.log("Busqueda del estudiante con ID 4");
IDEstudiante(4)
    .then(estudiante => {
        console.log("Estudiante encontrado:", estudiante);
    })
    .catch(error => {
        console.error(error);
    });

console.log("Busqueda del estudiante con ID 1");
IDEstudiante(1)
    .then(estudiante => {
        console.log("Estudiante encontrado:", estudiante);
    })
    .catch(error => {
        console.error(error);
    });



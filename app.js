const argv = require("./config/yargs").argv;


const porHacer = require("./por-hacer/por-hacer");

const colors = require("colors");

let comando = argv._[0];

switch (comando){

    case "crear":

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":

        let listado = porHacer.getListado();

        if(Object.keys(listado).length === 0 ){
            console.log("*********Sin tareas************".red);
        }else{
            for (let tarea of listado){
                console.log("============Por hacer=================".green);
                console.log("Tarea: ",tarea.descripcion);
                console.log("Completado: ",tarea.completado);
                console.log("========================================".green);
            }
        }
        break;


    case "actualizar":
        let actualizo = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizo);
        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("No existe comando de eso");
        break;
}
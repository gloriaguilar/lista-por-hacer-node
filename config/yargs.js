
const descripcion= {
    demand:true,
    alias: "d",
    desc: "Crea una nueva tarea"
};

const completado = {
    alias: "c",
    default: true
};
const argv = require("yargs")
    .command("crear","Crea una tarea",{
        descripcion
    })
    .command("listar","Lista tarreas",{})
    .command("actualizar","Actualiza una tarea",{
        descripcion,
        completado
    })
    .command("borrar", "Borra una tarea", {
        descripcion
    })
    .help()
    .argv;


module.exports= {
    argv
}

module.exports = {

    //Ejercicio 1
    getApi: (req, res) => {
        res.status(200);
        res.send(`Hola Mundo`);
    },
    //Ejercicio 2
    getApiSuma: (req, res) => {
        let num1 = req.query.num1;
        let num2 = req.query.num2;
        const suma = {
            resultado: 0
        };
        if(`num1` in req.query){
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            suma.resultado = num1 + num2;
            res.status(200);
            res.send(suma);
        } else {
            res.status(200);
            res.send(`Utiliza los query num1 y num2 para hacer una suma`);
        }
        
    },
    //Ejercicio 3
    getApiUsuario: (req, res) => {
        const usuarioParams = req.params.usuario;
        const usuarioObj = {
            usuario: null
        }

        if(req.params.usuario != undefined){
            usuarioObj.usuario = usuarioParams;
            res.status(200);
            res.send(usuario);
        } else {
            res.status(200);
            res.send(`Utiliza el parametro para devolver el nombre de usuario`);
        }
    },
    //Ejercicio 4
    getApiPersonaje: (req, res) =>{
        const idPersonajeParams = req.params.idPersonaje;
        const personajeObj = {
            personaje: {}
        };
        if(req.params.idPersonaje != undefined){
            let response = fetch(`https://swapi.dev/api/people/${idPersonajeParams}`, {method: 'get'});
            response.then((value) => {
            return value.json();
            }).then((valueJson) => {
                personajeObj.personaje = valueJson;
                res.send(personajeObj);
            }).catch((err) => {
            alert(`El personaje no existe`)
            });
        } else {
            res.send(`No podemos procesar tu solicitud`);
        }
    },
    //Ejercicio 5
    putBody: (req, res) => {
        res.status(200);
        res.send(req.body);
    },
    //Ejercicio 6
    postSumaBody: (req, res) => {
        const bodyObject = req.body;
        let suma = {
            resultado: 0
        } 
        suma.resultado = bodyObject.num1 + bodyObject.num2;
        res.status(200);
        res.send(suma);
    },
    //Ejercicio 7
    deleteID: (req, res) => {
        const id = req.params.id;
        if(id < 3 || id > 3){
            res.status(404);
            res.send(`No se encontró el objeto con el ID especificado`)
        } else {
            res.status(200);
            res.send(`se ha eliminado el objeto con ID 3`)
        }
    }
}
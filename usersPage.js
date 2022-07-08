const http = require("http");

const host = "localhost";
const port = 8000;

class Usuario{
    constructor(id,firstName,lastName,age,Country){
        this.id=id;
        this.firstName=firstName;
        this.age=age;
        this.lastName=lastName;
        this.Country=Country;
    }
}
const juan = new Usuario(1,"Juan","Perez",5,"Argentina");
const jean= new Usuario(2,"Jean","Pier",31,"Francia");
const lucas= new Usuario(3,"Lucas","Johnson",29,"Inglaterra");
const kylian= new Usuario(4,"Kylian","Mbappé",22,"Francia");
const eduardo= new Usuario(5,"Eduardo","Montes",17,"Chile");


const arrUsers = [juan,jean,lucas,kylian,eduardo];
const usuarios = JSON.stringify(arrUsers)

const requestListener = function(req, res) {
   
    res.setHeader("Content-Type", "application/json");
    
    switch (req.url) {
        case "/usuarios":
            res.writeHead(204);
            res.end((usuarios));
            break;
        
        default:
            res.writeHead(404);
            res.end("Solamente se muestran resultados en la pagina con terminacion '/usuarios'");
    }
    
      
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});

//Classe List
class List{
    constructor(){
        this.data = [];
    }
    addData(data){
        this.data.push(data);
        console.log(this.data);
    }
}

//Classe de TodoList   
class TodoList extends List{
    constructor(){
        super();
        this.usuario = ['Andre','Caio','Luiz','Patryck','Mateus','Wernen'];
    }
    mostrarUsuario(){
        console.log(this.usuario);
    }
}

//instanciar a classe
var minhaLista = new TodoList();
document.getElementById('novotodo').onclick = function(){
    minhaLista.addData('Novo Item');
}
minhaLista.mostrarUsuario();
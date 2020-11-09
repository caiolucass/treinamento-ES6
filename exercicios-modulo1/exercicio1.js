class Usuario{
    constructor(email, senha){
      this.email = email;
      this.senha = senha;
    }
    isAdmin(){
         return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin =  true;
    }
}

const User = new User('email@teste.com','senha123');
const Adm =  new Adm('email@teste.com', 'senha123');

 console.log(User.isAdmin());
 console.log(Adm.isAdmin());
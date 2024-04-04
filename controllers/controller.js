var path = require('path');

const controller = {}

let indice = 15

var lista = [
  {"id": 1, "nome": "João", "idade": 25, "profissao": "engenheiro", "email": "joao@gmail.com"},
  {"id": 2, "nome": "Maria", "idade": 30, "profissao": "advogada", "email": "maria@hotmail.com"},
  {"id": 3, "nome": "Pedro", "idade": 20, "profissao": "estudante", "email": "pedro@yahoo.com"},
  {"id": 4, "nome": "Ana", "idade": 28, "profissao": "médica", "email": "ana@gmail.com"},
  {"id": 5, "nome": "José", "idade": 35, "profissao": "contador", "email": "jose@hotmail.com"},
  {"id": 6, "nome": "Julia", "idade": 27, "profissao": "psicóloga", "email": "julia@yahoo.com"},
  {"id": 7, "nome": "Lucas", "idade": 23, "profissao": "designer", "email": "lucas@gmail.com"},
  {"id": 8, "nome": "Fernanda", "idade": 29, "profissao": "engenheira civil", "email": "fernanda@hotmail.com"},
  {"id": 9, "nome": "Carlos", "idade": 31, "profissao": "professor", "email": "carlos@yahoo.com"},
  {"id": 10, "nome": "Mariana", "idade": 26, "profissao": "jornalista", "email": "mariana@gmail.com"},
  {"id": 11, "nome": "Rafael", "idade": 24, "profissao": "programador", "email": "rafael@hotmail.com"},
  {"id": 12, "nome": "Patricia", "idade": 32, "profissao": "engenheira de produção", "email":
 "patricia@yahoo.com"},
  {"id": 13, "nome": "Gabriel", "idade": 22, "profissao": "estudante", "email": "gabriel@gmail.com"},
  {"id": 14, "nome": "Renata", "idade": 33, "profissao": "advogada", "email": "renata@hotmail.com"},
  {"id": 15, "nome": "Thiago", "idade": 27, "profissao": "arquiteto", "email": "thiago@yahoo.com"}
 ];

 controller.getAllPessoas = (req,res)=>{
    res.status(200).send(lista)
}

controller.getPessoaById = (req,res)=>{
    item = lista.find(i => i.id == req.params.id)
  
    if(item){
      res.status(200).send(item)
    } else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
  }

controller.createPessoa = (req,res)=>{
    const novaPessoa = req.body
    novaPessoa.id = indice + 1
    lista.push(novaPessoa)
    res.status(200).redirect("/pessoas")
}

controller.updatePessoa = (req,res)=>{
    pessoaIndice = lista.findIndex(p => p.id == req.params.id)
    console.log(pessoaIndice)
    if(pessoaIndice >= 0){
      const pessoaAtualizada = req.body;
      lista[pessoaIndice] = pessoaAtualizada;
      res.status(200).send("OK")
    }else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
}

controller.deletePessoa = (req,res)=>{
  const pessoaIndice = lista.findIndex(p => p.id == req.params.id);
  if (pessoaIndice >= 0) {
    lista.splice(pessoaIndice, 1);
    res.status(200).send("OK")
  }else{
    res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
  }
}

module.exports = controller
window.onload = function () {
    var mais = document.getElementById("mais");
    var maiss = document.getElementById("maiss");
    var maisss = document.getElementById("maisss");

    var naturalidade = "Santos";

    var dados = {
        nome: "Everton",
        idade: 43,
        naturalidade,
        fisico: { peso: 102, altura: 1.77, cor: 'moreno' },
        engordar(p) {
            console.log("Engordou!");
            this.fisico.peso += p;
        }
    };

    var profissao = {
        linguagens: ['js', 'php', 'c', 'script'],
        novalinguagem: function (nova) {
            console.log("Nova Linguagem");
            this.linguagens[4] = nova;

        }
    };

    console.log(dados);
    console.log(profissao);

    mais.onclick = function () {

        dados.engordar(8);

        profissao.novalinguagem('nodejs');

        //delete dados.idade;

        dados.datanasc = '25/05/1975';
        nomeVariavel = "objetivo";

        var novoObjeto = {
            ...dados, // ... espalha no novoObjeto
            ...profissao,
            [nomeVariavel]: "Analista", // ECMA 6
            nivel: "Superior"
        };

        //var novoObjeto = Object.assign({},dados,profissao);    
        //Object.assign(dados,profissao); //(Obs: este modifica dados)

        console.log(novoObjeto);

    }
    maiss.onclick = function () {
        var pessoas = [ // array de objetos
            { nome: 'Dhora', idade: 47 },
            { nome: 'Erika', idade: 23 },
            { nome: 'Clelia', idade: 65 }
        ];

        var { nome: mae } = pessoas[2]; // "Destructuring objects" extrai e coloca em outra variavel
        console.log(`Variavel extraida: ${mae}`);

        var busca = {
            posicao: 0,
            get atual() {
                return pessoas[this.posicao]
            },
            set atual(posicao) {
                this.posicao = posicao;
            },
            proximo() {
                ++this.posicao;
            },
            anterior() {
                --this.posicao;
            }
        }
        console.log(busca.atual);
        busca.proximo();
        console.log(busca.atual);
        busca.atual = 2;
        console.log(busca.atual);
    }

    maisss.onclick = function () {

        /*function imprimeUsuario(usuario) {
            console.log(usuario.nome);
            console.log(usuario.idade);
            console.log(usuario.sexo);
        }*/

        function imprimeUsuario({nome,idade,sexo}) {
            console.log(nome);
            console.log(idade);
            console.log(sexo);
        }

        var listausuario = {
            user1: {
                nome: "Everton",
                idade: 43,
                sexo: 'm'
            },
            user2: {
                nome: "Dhora",
                idade: 47,
                sexo: 'f'
            }
        };

        imprimeUsuario(listausuario.user2);

        console.log("-----------------------------------");        
        //console.log(Object.values(listausuario)); 
        //console.log(Object.keys(listausuario));
        
        var lista = Object.keys(listausuario);        
        for(i=0;i<lista.length;i++){
            //console.log(lista[i]);
            console.log(listausuario[lista[i]]);
        }

        console.log("-----------------------------------");

        for (var info in listausuario){
            console.log(listausuario[info]);
        }   

    }

}



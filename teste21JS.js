// AJAX + DOM HTML
// inserir dados em uma tabela e depois escrever num arquivo ....

window.onload = function () {

    var form = document.getElementById("form");

    form.botao.onclick = function () {
        if (form.peca.value && form.preco.value) {
            var peca = form.peca.value;
            var preco = form.preco.value;
            var tab = document.getElementById("tabela");
            var row = document.createElement('tr');
            var cel0 = document.createElement('td');
            var cel1 = document.createElement('td');
            tab.append(row);
            row.append(cel0);
            row.append(cel1);
            cel0.append(peca);
            cel1.append(preco);
            var texto = { Peça: peca, Preço: preco }
            console.log("OK ==>", texto);

            // salvar em arquivo:
            var arquivo = "./testejson.json";
            var dados = new ActiveXObject('Scripting.FileSystemObject');
            var escrever = dados.CreateTextFile(arquivo, false);
            escrever.WriteLine(texto); escrever.Close();

            /*Função para abrir o arquivo
            function AbreArquivo(arq) {
                //o parametro arq é o endereço do txt
                //carrega o txt
                var arquivo = dados.OpenTextFile(arq, 1, true);
                //varre o arquivo
                while (!arquivo.AtEndOfStream) {
                    //escreve o txt no TextArea
                    document.getElementById(“texto”).value = arquivo.ReadAll();
                }
                //fecha o txt
                arquivo.Close();
            }*/
        }

    }
}		

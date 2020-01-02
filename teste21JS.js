window.onload = function () {
    var form = document.getElementById("form");
    var tab = document.getElementById("tabela");

    var db = openDatabase('teste21', '1.0', 'Exemplo', 2 * 1024 * 1024);
    
    db.transaction(function (resp) {
        resp.executeSql("CREATE TABLE IF NOT EXISTS agenda (id INTEGER PRIMARY KEY, nome TEXT, email TEXT)");
    });

    db.transaction(function (resp) {
        resp.executeSql('SELECT * from agenda', [], function (resp, resultados) {
            var rows = resultados.rows;
            for (var i = 0; i < rows.length; i++) {                
                var row = document.createElement('tr');
                var cel0 = document.createElement('td');
                var cel1 = document.createElement('td');
                var cel2 = document.createElement('td');                
                tab.append(row);
                row.append(cel0);
                row.append(cel1);
                row.append(cel2);                
                cel0.append(i+1);
                cel1.append(rows[i].nome);
                cel2.append(rows[i].email);
            }
        });
    });

    function reload(){
        window.location.reload();
    }

    form.inserir.onclick = function () {
        if (form.nome.value && form.email.value) {
            var nome = form.nome.value;
            var email = form.email.value;
            db.transaction(function (resp) {
                resp.executeSql('INSERT INTO agenda (nome, email) VALUES(?,?)', [nome, email]);
            });
            var texto = { Nome: nome, EMail: email }
            console.log("OK ==>", texto); 
            setTimeout(reload,500);           
        }
    }

}	

var db = openDatabase('teste21', '1.0', 'Exemplo', 2 * 1024 * 1024);

db.transaction(function (resp) {
    resp.executeSql("CREATE TABLE IF NOT EXISTS agenda (id INTEGER PRIMARY KEY, nome TEXT, email TEXT)");
});

function reload() {
    window.location.reload();
}

function apagar(n) {
    db.transaction(function (resp) {
        resp.executeSql("DELETE FROM agenda WHERE id = ?",[n]);
    });
    setTimeout(reload, 500);
}

window.onload = function () {

    var form = document.getElementById("form");
    var tab = document.getElementById("tabela");

    db.transaction(function (resp) {
        resp.executeSql('SELECT * from agenda', [], function (resp, resultados) {
            var rows = resultados.rows; var tr = '';
            for (var i = 0; i < rows.length; i++) {
                tr += '<tr onClick="apagar(' + rows[i].id + ')" id="linha">';
                tr += "<td>" + rows[i].id + '</td>';
                tr += '<td>' + rows[i].nome + '</td>';
                tr += '<td>' + rows[i].email + '</td>';
                tr += '</tr>'
            }
            tab.innerHTML = tr;
        });
    });

    form.inserir.onclick = function () {
        if (form.nome.value && form.email.value) {
            var nome = form.nome.value;
            var email = form.email.value;
            db.transaction(function (resp) {
                resp.executeSql('INSERT INTO agenda (nome, email) VALUES(?,?)', [nome, email]);
            });
            var texto = { Nome: nome, EMail: email }
            console.log("OK ==>", texto);
            setTimeout(reload, 500);
        }
    }
}
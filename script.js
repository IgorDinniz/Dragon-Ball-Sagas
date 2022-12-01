function pesquisar() {
    var saga = document.querySelector('#input-pesquisa').value;
console.log(document.querySelector('#input-pesquisa').value);

    var sayajin = document.querySelector('#sayajin'),
        freeza = document.querySelector('#freeza'),
        cell = document.querySelector('#cell'),
        boo = document.querySelector('#boo');

    if (!saga) {
        sayajin.style.display = "";
        freeza.style.display = "";
        cell.style.display = "";
        boo.style.display = "";
    } else if (saga.toUpperCase() == "SAYAJIN") {
        sayajin.style.display = "";
        freeza.style.display = "none";
        cell.style.display = "none";
        boo.style.display = "none";
    }
    else if (saga.toUpperCase() == "FREEZA") {
        sayajin.style.display = "none";
        freeza.style.display = "";
        cell.style.display = "none";
        boo.style.display = "none";
    }
    else if (saga.toUpperCase() == "CELL") {
        sayajin.style.display = "none";
        freeza.style.display = "none";
        cell.style.display = "";
        boo.style.display = "none";
    }
    else if (saga.toUpperCase() == "BOO") {
        sayajin.style.display = "none";
        freeza.style.display = "none";
        cell.style.display = "none";
        boo.style.display = "";
    }
}
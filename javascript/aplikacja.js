function dodajNowyElement() {
    const dodaj = document.getElementById("myInput").value;
    const elementListy = document.createElement("li");
    const lista = document.getElementById("myUl");
    const tekst = document.createTextNode(dodaj);


    if (dodaj === "") {
        alert("Uzupełnij dane");
    } else {
        elementListy.appendChild(tekst);
        lista.appendChild(elementListy);
        const ikonkaCheck = document.createElement("span");
        ikonkaCheck.className = "fas fa-check";
        elementListy.appendChild(ikonkaCheck);
    }

    myInput.value = '';

    const zamykanie = document.getElementsByClassName("fa-check");
    for (i = 0; i < zamykanie.length; i++) {
        zamykanie[i].onclick = function () {
            const div = this.parentElement;
            div.parentNode.removeChild(div);
        }
    }


}

function dodajNowyElement() {
    const dodaj = document.getElementById("myInput").value;
    const elementlisty = document.createElement("li");
    const lista = document.getElementById("myUl");
    const tekst = document.createTextNode(dodaj);

    elementlisty.appendChild(tekst);
    lista.appendChild(elementlisty);

    myInput.value = '';

    const ikonkaCheck = document.createElement("span");
    ikonkaCheck.className = "fas fa-check";

    elementlisty.appendChild(ikonkaCheck);
}

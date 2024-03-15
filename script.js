function result() {
    const min = Math.ceil(document.querySelector(".first").value)
    const max = Math.floor(document.querySelector(".second").value)

    if (max > min) {

        const finalResult = Math.floor(Math.random() * (max - min + 1)) + min;

        const final = document.querySelector(".final")

        final.innerHTML = ("change", finalResult)

    } else {

        alert("O primeiro valor tem quer ser Menor que o segundo ")
    }

   
}


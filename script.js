function Enviar() {
    let Marca = document.getElementById("marca").value
    let Modelo = document.getElementById("modelo").value

    const OBJproduto = {
        marca: Marca,
        modelo: Modelo,
    };

    localStorage.setItem("Carro",JSON.stringify(OBJproduto));

    alert("Cadastro feito com sucesso!")
}
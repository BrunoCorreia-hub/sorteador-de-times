function Sortear(){
    const textArea = document.getElementById('jogadores').value;
    const erro = document.querySelector(".erro");
    const quantidade = parseInt(document.getElementById("quantidade").value)

    const nomes = textArea
    .split(/[\s,;\n]+/)
    .map(nome => nome.trim())
    .filter(nome => nome !== "");

    if(nomes.length < quantidade){
        erro.style.display = 'block'
        erro.textContent = "Número de jogadores insuficiente para formar um time"
        return
    }

    const embaralhados = nomes.sort(() => Math.random() - 0.5);

    const times = []
    for (let i = 0; i < embaralhados.length; i += quantidade){
        const time = embaralhados.slice(i, i + quantidade)
        times.push(time)
    }
   
    const timesSorteados = document.querySelector(".times-sorteados")
    timesSorteados.innerHTML = ""

    times.forEach((time, index) => {
        const grupo = document.createElement("div")
        grupo.innerHTML = `<strong>Time ${index + 1}</strong><ul>${time.map((jogador) => `<li>${jogador}</li>`).join("")}</ul>`
        timesSorteados.appendChild(grupo)
    })
}
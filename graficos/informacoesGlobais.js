async function vizualizarInformacoesViolao() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'  // Use a URL de dados relevante para o violão
    const res = await fetch(url)
    const dados = await res.json()

    // Adaptando os dados para o violão
    const pessoasAprendendoViolao = (dados.total_pessoas_aprendendo_violao / 1e9)  // Exemplo de dado sobre violão
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_de_estudo)
    const minutos = Math.round((dados.tempo_medio_de_estudo - horas) * 100)
    const porcentagemAprendendoViolao = ((pessoasAprendendoViolao / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasAprendendoViolao} bilhões</span> estão aprendendo violão e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> estudando violão.<br>Isso significa que aproximadamente <span>${porcentagemAprendendoViolao}%</span> da população mundial está aprendendo violão.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesViolao()

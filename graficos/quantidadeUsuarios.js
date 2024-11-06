import { getCSS, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuariosAprendendoViolao() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/violao-usuarios.json'  // Use uma URL com dados relevantes sobre violão
    const res = await fetch(url)
    const dados = await res.json()

    const nomeDasPlataformas = Object.keys(dados)  // Exemplo de plataformas de aprendizado de violão
    const quantidadeDeUsuarios = Object.values(dados)  // Número de usuários em cada plataforma

    const data = [
        {
            x: nomeDasPlataformas, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Plataformas com mais usuários aprendendo violão',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Plataformas de aprendizado de violão',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'milhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    criarGrafico(data, layout)
}

quantidadeUsuariosAprendendoViolao()

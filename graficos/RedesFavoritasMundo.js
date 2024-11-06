import { getCSS, criarGrafico, incluirTexto } from "./common.js";

async function preferenciasViolao() {
    // Simulando dados de preferência dos alunos
    const dados = {
        "Aulas presenciais": 40,
        "Aulas online": 35,
        "Autodidata": 25
    };

    const preferencias = Object.keys(dados);
    const valores = Object.values(dados);

    const data = [
        {
            values: valores,
            labels: preferencias,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Preferências dos alunos no aprendizado de Violão',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    };

    criarGrafico(data, layout);
    incluirTexto(`A maioria dos alunos prefere aprender violão por <span>Aulas presenciais</span>, com uma boa parcela optando por <span>Aulas online</span> ou sendo <span>Autodidatas</span>. Este gráfico mostra a divisão entre os métodos mais comuns para aprender violão.`);
}

preferenciasViolao();

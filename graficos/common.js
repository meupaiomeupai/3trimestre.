import { getCSS, criarGrafico, incluirTexto } from "./common.js";

async function preferenciaMetodoViolao() {
    // Simulando dados de preferência dos alunos sobre como aprendem violão
    const dados = {
        "Aulas presenciais": 50,
        "Aulas online": 30,
        "Autodidata": 20
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
            text: 'Métodos Preferidos para Aprender Violão',
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
    incluirTexto(`A maioria dos alunos prefere aprender violão por <span>Aulas presenciais</span>, seguidas por aulas online. <br>Uma pequena parte opta por ser <span>Autodidata</span>.`);
}

preferenciaMetodoViolao();

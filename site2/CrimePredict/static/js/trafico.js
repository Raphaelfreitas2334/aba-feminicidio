document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       CONFIGURAÇÃO GLOBAL CHART
    ========================================== */

    Chart.defaults.color = "#d1d5db";

    Chart.defaults.borderColor =
        "rgba(255,255,255,.08)";

    /* ==========================================
       EVOLUÇÃO DAS APREENSÕES
    ========================================== */

    new Chart(
        document.getElementById("graficoApreensoes"),
        {
            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Fev",
                    "Mar",
                    "Abr",
                    "Mai",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez"
                ],

                datasets: [{

                    label:
                        "Apreensões",

                    data: [
                        18,
                        22,
                        25,
                        21,
                        30,
                        34,
                        37,
                        39,
                        41,
                        45,
                        48,
                        53
                    ],

                    borderColor:
                        "#00ff88",

                    backgroundColor:
                        "rgba(0,255,136,.15)",

                    fill: true,

                    tension: .4
                }]
            }
        }
    );

    /* ==========================================
       RADAR DE VULNERABILIDADE
    ========================================== */

    new Chart(
        document.getElementById("graficoRadar"),
        {
            type: "radar",

            data: {

                labels: [
                    "Desemprego",
                    "Evasão Escolar",
                    "Violência",
                    "Pobreza",
                    "Ocupação Irregular",
                    "Risco Social"
                ],

                datasets: [{

                    label:
                        "Indicador",

                    data: [
                        82,
                        74,
                        91,
                        66,
                        58,
                        88
                    ],

                    backgroundColor:
                        "rgba(0,255,136,.2)",

                    borderColor:
                        "#00ff88"
                }]
            }
        }
    );

    /* ==========================================
       RANKING DE BAIRROS
    ========================================== */

    new Chart(
        document.getElementById("graficoRanking"),
        {
            type: "bar",

            data: {

                labels: [
                    "Eldorado",
                    "Canhema",
                    "Centro",
                    "Taboão",
                    "Serraria"
                ],

                datasets: [{

                    label:
                        "Ocorrências",

                    data: [
                        94,
                        81,
                        69,
                        58,
                        44
                    ],

                    backgroundColor: [
                        "#ef4444",
                        "#f97316",
                        "#facc15",
                        "#84cc16",
                        "#22c55e"
                    ]
                }]
            },

            options: {
                indexAxis: "y"
            }
        }
    );

    /* ==========================================
       TIPOS DE ENTORPECENTES
    ========================================== */

    new Chart(
        document.getElementById("graficoDrogas"),
        {
            type: "doughnut",

            data: {

                labels: [
                    "Cocaína",
                    "Crack",
                    "Maconha",
                    "Sintéticos"
                ],

                datasets: [{

                    data: [
                        35,
                        25,
                        30,
                        10
                    ],

                    backgroundColor: [
                        "#00ff88",
                        "#00d4ff",
                        "#3b82f6",
                        "#8b5cf6"
                    ]
                }]
            }
        }
    );

    /* ==========================================
       REDE CRIMINOSA
    ========================================== */

    new Chart(
        document.getElementById("graficoRede"),
        {
            type: "scatter",

            data: {

                datasets: [

                    {
                        label: "Núcleo Central",

                        data: [
                            {x:50,y:50}
                        ],

                        pointRadius: 20,

                        backgroundColor:
                            "#ef4444"
                    },

                    {
                        label: "Distribuição",

                        data: [

                            {x:20,y:30},
                            {x:35,y:70},
                            {x:65,y:20},
                            {x:80,y:60},
                            {x:70,y:80},
                            {x:30,y:15}
                        ],

                        pointRadius: 12,

                        backgroundColor:
                            "#00ff88"
                    }
                ]
            },

            options: {

                scales: {

                    x: {
                        display:false
                    },

                    y: {
                        display:false
                    }
                }
            }
        }
    );

    /* ==========================================
       PREVISÃO
    ========================================== */

    new Chart(
        document.getElementById("graficoPrevisaoTrafico"),
        {
            type: "line",

            data: {

                labels: [
                    "2026",
                    "2027",
                    "2028",
                    "2029",
                    "2030"
                ],

                datasets: [{

                    label:
                        "Risco Projetado",

                    data: [
                        100,
                        112,
                        118,
                        126,
                        138
                    ],

                    borderColor:
                        "#00d4ff",

                    backgroundColor:
                        "rgba(0,212,255,.15)",

                    fill:true,

                    tension:.4
                }]
            }
        }
    );

    /* ==========================================
       MAPA
    ========================================== */

    const mapa =
        L.map("mapaTrafico")
        .setView(
            [-23.6865, -46.6227],
            13
        );

    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution:
                "&copy; OpenStreetMap | CARTO"
        }
    ).addTo(mapa);

    /* ==========================================
       ZONAS DE INFLUÊNCIA
    ========================================== */

    const zonas = [

        {
            nome:"Eldorado",
            lat:-23.705,
            lng:-46.630,
            risco:"Alto",
            raio:600,
            cor:"#ef4444"
        },

        {
            nome:"Canhema",
            lat:-23.698,
            lng:-46.618,
            risco:"Médio",
            raio:450,
            cor:"#f97316"
        },

        {
            nome:"Centro",
            lat:-23.686,
            lng:-46.622,
            risco:"Moderado",
            raio:350,
            cor:"#facc15"
        }
    ];

    zonas.forEach(zona => {

        L.circle(
            [zona.lat, zona.lng],
            {
                radius: zona.raio,

                color: zona.cor,

                fillColor: zona.cor,

                fillOpacity: .25
            }
        )
        .addTo(mapa)
        .bindPopup(`
            <h5>${zona.nome}</h5>
            <strong>Risco:</strong> ${zona.risco}
        `);

    });

    /* ==========================================
       HEATMAP
    ========================================== */

    const heatPoints = [

        [-23.705,-46.630,1],
        [-23.702,-46.626,.8],
        [-23.700,-46.620,.9],
        [-23.694,-46.617,.7],
        [-23.688,-46.622,.8]
    ];

    L.heatLayer(
        heatPoints,
        {
            radius:40,
            blur:25
        }
    ).addTo(mapa);

    /* ==========================================
       SIMULADOR
    ========================================== */

    const btn =
        document.getElementById(
            "simularBtn"
        );

    const resultado =
        document.getElementById(
            "resultadoSimulacao"
        );

    btn.addEventListener(
        "click",
        () => {

            const bairro =
                document.getElementById(
                    "bairroSelect"
                ).value;

            const respostas = {

                "Centro":
                "Redução estimada de 18% nas ocorrências e aumento de patrulhamento.",

                "Eldorado":
                "Impacto elevado. Possível redução de 31% nas atividades monitoradas.",

                "Canhema":
                "Redução estimada de 22% e deslocamento parcial para regiões vizinhas.",

                "Taboão":
                "Redução moderada de 15% com reforço operacional.",

                "Serraria":
                "Redução de 11% nas ocorrências registradas."
            };

            resultado.innerHTML = `
                <strong>
                    Resultado da Simulação:
                </strong>
                <br><br>
                ${respostas[bairro]}
            `;
        }
    );

    /* ==========================================
       ALERTAS DINÂMICOS
    ========================================== */

    const alertas = document.querySelectorAll(
        ".alerta-item"
    );

    let atual = 0;

    setInterval(() => {

        alertas.forEach(
            item =>
            item.style.opacity = ".4"
        );

        alertas[atual].style.opacity = "1";

        atual++;

        if(atual >= alertas.length)
            atual = 0;

    }, 3000);

});
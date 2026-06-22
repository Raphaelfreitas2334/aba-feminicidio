document.addEventListener("DOMContentLoaded", () => {

    Chart.defaults.color = "#d1d5db";

    Chart.defaults.borderColor =
        "rgba(255,255,255,.08)";

    /* =====================================
       VELOCÍMETRO DE RISCO
    ===================================== */

    new Chart(
        document.getElementById("graficoVelocimetro"),
        {
            type: "doughnut",

            data: {

                labels: [
                    "Risco Atual",
                    "Livre"
                ],

                datasets: [{

                    data: [68, 32],

                    backgroundColor: [
                        "#f97316",
                        "#1e293b"
                    ],

                    borderWidth: 0
                }]
            },

            options: {

                rotation: -90,

                circumference: 180,

                cutout: "75%",

                plugins: {

                    legend: {
                        display: false
                    }
                }
            }
        }
    );

    /* =====================================
       EVOLUÇÃO HISTÓRICA
    ===================================== */

    new Chart(
        document.getElementById("graficoHistorico"),
        {
            type: "line",

            data: {

                labels: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                    "2025"
                ],

                datasets: [{

                    label: "Assaltos",

                    data: [
                        850,
                        910,
                        980,
                        1120,
                        1190,
                        1287
                    ],

                    borderColor: "#ffc107",

                    backgroundColor:
                        "rgba(255,193,7,.15)",

                    fill: true,

                    tension: .4
                }]
            }
        }
    );

    /* =====================================
       HORÁRIOS CRÍTICOS
    ===================================== */

    new Chart(
        document.getElementById("graficoHorario"),
        {
            type: "bar",

            data: {

                labels: [
                    "00h",
                    "04h",
                    "08h",
                    "12h",
                    "16h",
                    "20h"
                ],

                datasets: [{

                    label: "Ocorrências",

                    data: [
                        22,
                        15,
                        40,
                        58,
                        77,
                        130
                    ],

                    backgroundColor:
                        "#f97316"
                }]
            }
        }
    );

    /* =====================================
       PERFIL DAS VÍTIMAS
    ===================================== */

    new Chart(
        document.getElementById("graficoVitimas"),
        {
            type: "pie",

            data: {

                labels: [

                    "Pedestres",
                    "Motociclistas",
                    "Motoristas",
                    "Comerciantes",
                    "Ciclistas"

                ],

                datasets: [{

                    data: [
                        35,
                        28,
                        17,
                        12,
                        8
                    ],

                    backgroundColor: [

                        "#ef4444",
                        "#f97316",
                        "#facc15",
                        "#22c55e",
                        "#3b82f6"
                    ]
                }]
            }
        }
    );

    /* =====================================
       RANKING DE BAIRROS
    ===================================== */

    new Chart(
        document.getElementById("graficoBairros"),
        {
            type: "bar",

            data: {

                labels: [

                    "Centro",
                    "Taboão",
                    "Canhema",
                    "Serraria",
                    "Eldorado"

                ],

                datasets: [{

                    label: "Ocorrências",

                    data: [
                        230,
                        180,
                        150,
                        120,
                        95
                    ],

                    backgroundColor: [

                        "#ef4444",
                        "#f97316",
                        "#facc15",
                        "#22c55e",
                        "#3b82f6"
                    ]
                }]
            },

            options: {
                indexAxis: "y"
            }
        }
    );

    /* =====================================
       PREVISÃO FUTURA
    ===================================== */

    new Chart(
        document.getElementById("graficoPrevisao"),
        {
            type: "line",

            data: {

                labels: [

                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez"

                ],

                datasets: [{

                    label:
                        "Previsão",

                    data: [

                        1300,
                        1330,
                        1360,
                        1380,
                        1410,
                        1450

                    ],

                    borderColor:
                        "#ffc107",

                    backgroundColor:
                        "rgba(255,193,7,.15)",

                    fill:true,

                    tension:.4
                }]
            }
        }
    );

    /* =====================================
       MAPA
    ===================================== */

    const mapa =
        L.map("mapaAssalto")
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

    /* =====================================
       CORREDORES DE ASSALTO
    ===================================== */

    const corredores = [

        {
            nome:
                "Av. Piraporinha",

            pontos: [

                [-23.673,-46.617],
                [-23.681,-46.620],
                [-23.688,-46.625]

            ],

            cor:"#ef4444"
        },

        {
            nome:
                "Av. Casa Grande",

            pontos: [

                [-23.694,-46.633],
                [-23.689,-46.628],
                [-23.682,-46.621]

            ],

            cor:"#f97316"
        },

        {
            nome:
                "Av. Fábio Ramos",

            pontos: [

                [-23.702,-46.620],
                [-23.697,-46.622],
                [-23.691,-46.624]

            ],

            cor:"#facc15"
        }
    ];

    corredores.forEach(corredor => {

        L.polyline(
            corredor.pontos,
            {
                color: corredor.cor,
                weight: 8,
                opacity: .8
            }
        )
        .addTo(mapa)
        .bindPopup(`
            <strong>${corredor.nome}</strong>
            <br>
            Corredor de alta incidência
        `);

    });

    /* =====================================
       SIMULADOR DE ROTA
    ===================================== */

    const btn =
        document.getElementById(
            "btnSimular"
        );

    const resultado =
        document.getElementById(
            "resultadoRota"
        );

    btn.addEventListener(
        "click",
        () => {

            const origem =
                document.getElementById(
                    "origem"
                ).value;

            const destino =
                document.getElementById(
                    "destino"
                ).value;

            const risco =
                Math.floor(
                    Math.random() * 100
                );

            let nivel = "";

            if(risco <= 30){

                nivel =
                    "🟢 Baixo";
            }
            else if(risco <= 60){

                nivel =
                    "🟡 Moderado";
            }
            else if(risco <= 80){

                nivel =
                    "🟠 Alto";
            }
            else{

                nivel =
                    "🔴 Crítico";
            }

            resultado.innerHTML = `

                <h4>
                    Rota Avaliada
                </h4>

                <p>
                    <strong>Origem:</strong>
                    ${origem}
                </p>

                <p>
                    <strong>Destino:</strong>
                    ${destino}
                </p>

                <p>
                    <strong>Risco:</strong>
                    ${nivel}
                </p>

                <p>
                    <strong>Probabilidade:</strong>
                    ${risco}%
                </p>

            `;
        }
    );

    /* =====================================
       ALERTAS DINÂMICOS
    ===================================== */

    const alertas =
        document.querySelectorAll(
            ".alerta-item"
        );

    let atual = 0;

    setInterval(() => {

        alertas.forEach(item => {

            item.style.opacity =
                ".4";

        });

        alertas[atual].style.opacity =
            "1";

        atual++;

        if(atual >= alertas.length){

            atual = 0;
        }

    }, 2500);

});
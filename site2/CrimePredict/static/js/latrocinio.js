document.addEventListener("DOMContentLoaded", () => {

    /* ===================================
       CONFIGURAÇÃO GLOBAL CHART.JS
    =================================== */

    Chart.defaults.color = "#d1d5db";

    Chart.defaults.borderColor =
        "rgba(255,255,255,0.08)";

    /* ===================================
       EVOLUÇÃO HISTÓRICA
    =================================== */

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
                    label: "Latrocínios Registrados",

                    data: [
                        9,
                        11,
                        14,
                        12,
                        16,
                        18
                    ],

                    borderColor: "#ff5722",

                    backgroundColor:
                        "rgba(255,87,34,.2)",

                    fill: true,

                    tension: .4
                }]
            },

            options: {
                responsive: true
            }
        }
    );

    /* ===================================
       BAIRROS
    =================================== */

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
                        8,
                        5,
                        3,
                        2,
                        1
                    ],

                    backgroundColor: [
                        "#ef4444",
                        "#f97316",
                        "#f59e0b",
                        "#eab308",
                        "#84cc16"
                    ]
                }]
            }
        }
    );

    /* ===================================
       FAIXA HORÁRIA
    =================================== */

    new Chart(
        document.getElementById("graficoHorarios"),
        {
            type: "radar",

            data: {

                labels: [
                    "00h-04h",
                    "04h-08h",
                    "08h-12h",
                    "12h-16h",
                    "16h-20h",
                    "20h-00h"
                ],

                datasets: [{

                    label: "Ocorrências",

                    data: [
                        4,
                        2,
                        1,
                        2,
                        9,
                        11
                    ],

                    backgroundColor:
                        "rgba(255,87,34,.2)",

                    borderColor:
                        "#ff5722",

                    pointBackgroundColor:
                        "#ff5722"
                }]
            }
        }
    );

    /* ===================================
       PERFIL DAS VÍTIMAS
    =================================== */

    new Chart(
        document.getElementById("graficoVitimas"),
        {
            type: "doughnut",

            data: {

                labels: [
                    "18-25",
                    "26-35",
                    "36-45",
                    "46-60",
                    "60+"
                ],

                datasets: [{

                    data: [
                        3,
                        6,
                        4,
                        3,
                        2
                    ],

                    backgroundColor: [
                        "#ef4444",
                        "#f97316",
                        "#f59e0b",
                        "#eab308",
                        "#84cc16"
                    ]
                }]
            }
        }
    );

    /* ===================================
       TIPO DE ABORDAGEM
    =================================== */

    new Chart(
        document.getElementById("graficoAbordagem"),
        {
            type: "pie",

            data: {

                labels: [
                    "Arma de Fogo",
                    "Arma Branca",
                    "Dupla em Moto",
                    "Grupo Organizado"
                ],

                datasets: [{

                    data: [
                        68,
                        12,
                        14,
                        6
                    ],

                    backgroundColor: [
                        "#ef4444",
                        "#f97316",
                        "#f59e0b",
                        "#eab308"
                    ]
                }]
            }
        }
    );

    /* ===================================
       COMPARATIVO ANUAL
    =================================== */

    new Chart(
        document.getElementById("graficoComparativo"),
        {
            type: "bar",

            data: {

                labels: [
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                    "2025"
                ],

                datasets: [

                    {
                        label: "Casos",

                        data: [
                            11,
                            14,
                            12,
                            16,
                            18
                        ],

                        backgroundColor:
                            "#ef4444"
                    },

                    {
                        label: "Prisões",

                        data: [
                            7,
                            10,
                            9,
                            12,
                            14
                        ],

                        backgroundColor:
                            "#f97316"
                    },

                    {
                        label: "Elucidados",

                        data: [
                            6,
                            8,
                            8,
                            11,
                            13
                        ],

                        backgroundColor:
                            "#eab308"
                    }
                ]
            }
        }
    );

    /* ===================================
       PREVISÃO
    =================================== */

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
                        "Previsão de Casos",

                    data: [
                        18,
                        19,
                        19,
                        20,
                        21,
                        22
                    ],

                    borderColor:
                        "#f97316",

                    backgroundColor:
                        "rgba(249,115,22,.2)",

                    fill: true,

                    tension: .4
                }]
            }
        }
    );

    /* ===================================
       MAPA
    =================================== */

    const mapa = L.map("mapaLatrocinio")
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

    /* ===================================
       DADOS DOS BAIRROS
    =================================== */

    const ocorrencias = [

    {
        nome: "Centro",
        lat: -23.684843,
        lng: -46.622567,
        casos: 8
    },

    {
        nome: "Taboão",
        lat: -23.657715,
        lng: -46.599922,
        casos: 5
    },

    {
        nome: "Canhema",
        lat: -23.677710,
        lng: -46.602220,
        casos: 3
    },

    {
        nome: "Serraria",
        lat: -23.702732,
        lng: -46.608171,
        casos: 2
    },

    {
        nome: "Eldorado",
        lat: -23.725493,
        lng: -46.618980,
        casos: 1
    }

];

    /* ===================================
       HEATMAP
    =================================== */

    const heatPoints = [];

    ocorrencias.forEach(local => {

        heatPoints.push([
            local.lat,
            local.lng,
            local.casos / 10
        ]);

    });

    L.heatLayer(
        heatPoints,
        {
            radius: 35,
            blur: 25,
            maxZoom: 17
        }
    ).addTo(mapa);

    /* ===================================
       MARCADORES INTERATIVOS
    =================================== */

    ocorrencias.forEach(local => {

        let cor = "#22c55e";

        if (local.casos >= 7)
            cor = "#ef4444";
        else if (local.casos >= 4)
            cor = "#f97316";
        else if (local.casos >= 2)
            cor = "#eab308";

        const marker =
            L.circleMarker(
                [local.lat, local.lng],
                {
                    radius:
                        local.casos * 2 + 8,

                    fillColor: cor,

                    color: cor,

                    fillOpacity: 0.7,

                    weight: 2
                }
            )
            .addTo(mapa);

        marker.bindPopup(`
            <div style="min-width:180px">
                <h5>${local.nome}</h5>

                <strong>
                    Casos:
                </strong>
                ${local.casos}
                <br>

                <strong>
                    Risco:
                </strong>

                ${
                    local.casos >= 7
                        ? "Alto"
                        : local.casos >= 4
                        ? "Médio"
                        : "Baixo"
                }
            </div>
        `);

        marker.on(
            "mouseover",
            function () {

                this.setStyle({
                    radius:
                        local.casos * 2 + 12
                });

            }
        );

        marker.on(
            "mouseout",
            function () {

                this.setStyle({
                    radius:
                        local.casos * 2 + 8
                });

            }
        );
    });

});
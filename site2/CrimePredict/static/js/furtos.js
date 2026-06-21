// ============================================
// EVOLUÇÃO HISTÓRICA DOS FURTOS
// ============================================

new Chart(document.getElementById('graficoEvolucao'), {
    type: 'line',
    data: {
        labels: ['2020','2021','2022','2023','2024','2025'],
        datasets: [{
            label: 'Furtos Registrados',
            data: [2900,3200,3550,3800,4100,4382],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59,130,246,0.15)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        },
        scales:{
            x:{
                ticks:{color:'white'},
                grid:{color:'#1F3561'}
            },
            y:{
                ticks:{color:'white'},
                grid:{color:'#1F3561'}
            }
        }
    }
});

// ============================================
// TIPOS DE FURTO
// ============================================

new Chart(document.getElementById('graficoTipos'), {
    type: 'bar',
    data: {
        labels:[
            'Veículos',
            'Celulares',
            'Residências',
            'Comércio',
            'Bicicletas'
        ],
        datasets:[{
            label:'Ocorrências',
            data:[1670,1210,620,480,402],
            backgroundColor:[
                '#3B82F6',
                '#22C55E',
                '#F59E0B',
                '#EF4444',
                '#8B5CF6'
            ],
            borderRadius:8
        }]
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        },
        scales:{
            x:{
                ticks:{color:'white'},
                grid:{display:false}
            },
            y:{
                ticks:{color:'white'},
                grid:{color:'#1F3561'}
            }
        }
    }
});

// ============================================
// FAIXA HORÁRIA
// ============================================

new Chart(document.getElementById('graficoHorario'), {
    type: 'radar',
    data: {
        labels:[
            '00-04h',
            '04-08h',
            '08-12h',
            '12-16h',
            '16-20h',
            '20-24h'
        ],
        datasets:[{
            label:'Ocorrências',
            data:[150,120,420,670,980,830],
            borderColor:'#22C55E',
            backgroundColor:'rgba(34,197,94,0.2)',
            pointBackgroundColor:'#22C55E'
        }]
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        },
        scales:{
            r:{
                angleLines:{color:'#1F3561'},
                grid:{color:'#1F3561'},
                pointLabels:{color:'white'},
                ticks:{color:'white'}
            }
        }
    }
});

// ============================================
// DIA DA SEMANA
// ============================================

new Chart(document.getElementById('graficoSemana'), {
    type: 'bar',
    data: {
        labels:[
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sáb',
            'Dom'
        ],
        datasets:[{
            label:'Furtos',
            data:[420,430,470,510,710,680,590],
            backgroundColor:'#3070d1',
            borderRadius:8
        }]
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        },
        scales:{
            x:{
                ticks:{color:'white'},
                grid:{display:false}
            },
            y:{
                ticks:{color:'white'},
                grid:{color:'#1F3561'}
            }
        }
    }
});

// ============================================
// DISTRIBUIÇÃO DOS FURTOS
// ============================================

new Chart(document.getElementById('graficoDistribuicao'), {
    type:'doughnut',
    data:{
        labels:[
            'Veículos',
            'Celulares',
            'Residências',
            'Comércio'
        ],
        datasets:[{
            data:[38,28,20,14],
            backgroundColor:[
                '#3B82F6',
                '#22C55E',
                '#F59E0B',
                '#EF4444'
            ],
            borderWidth:0
        }]
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                position:'bottom',
                labels:{
                    color:'white'
                }
            }
        }
    }
});

// ============================================
// MAPA DE CALOR DIadema
// ============================================

const mapa = L.map('mapaCalor').setView(
    [-23.6865, -46.6246],
    13
);

L.tileLayer(
'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
{
    attribution:'© OpenStreetMap © CARTO'
}
).addTo(mapa);

const pontosCalor = [

    [-23.6861,-46.6234,1.0], // Centro

    [-23.6812,-46.6110,0.9], // Piraporinha

    [-23.7140,-46.6050,0.8], // Eldorado

    [-23.6920,-46.6370,0.75], // Conceição

    [-23.6990,-46.6250,0.7], // Serraria

    [-23.6750,-46.6200,0.6], // Taboão

    [-23.6650,-46.6220,0.5], // Campanário

    [-23.6710,-46.6100,0.4] // Canhema

];

L.heatLayer(
    pontosCalor,
    {
        radius:45,
        blur:18,
        maxZoom:14,
        gradient:{
            0.2:'#00EAFF',
            0.5:'#00FF66',
            0.8:'#FF9900',
            1:'#FF0055'
        }
    }
).addTo(mapa);

// Marcadores

pontosCalor.forEach(ponto => {

    L.circleMarker(
        [ponto[0], ponto[1]],
        {
            radius:12,
            color:'#FF0055',
            fillColor:'#FF0055',
            fillOpacity:0.4,
            weight:2
        }
    ).addTo(mapa);

});

setTimeout(() => {
    mapa.invalidateSize();
}, 500);
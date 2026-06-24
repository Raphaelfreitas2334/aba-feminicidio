 window.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SÉRIE TEMPORAL (Casos vs Tentativas)
    // ==========================================
        new Chart(document.getElementById('graficoSerieTemporal'), {
            type: 'line',
            data: {
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                label: 'Casos Consumados',
                data: [4, 6, 3, 5, 2],
                borderColor: '#EF4444',
                backgroundColor: 'transparent',
                tension: 0.2
                },
                    {
                        label: 'Tentativas Registradas',
                        data: [18, 24, 15, 29, 22],
                        borderColor: '#3B82F6',
                        backgroundColor: 'transparent',
                        tension: 0.2
                    }
                ]
            },
                    options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { labels: { color: 'white' } } }
                }
            });

// ==========================================
// 2. FATORES DEMOGRÁFICOS (Faixa Etária)
// ==========================================
    new Chart(document.getElementById('graficoDemograficoIdade'), {
        type: 'bar',
        data: {
        labels: ['18-24 anos', '25-34 anos', '35-44 anos', '45-59 anos', '60+ anos'],
        datasets: [{
        label: '% de Vulnerabilidade Mapeada',
        data: [22, 41, 25, 10, 2],
        borderRadius: 6
        }]
        },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { labels: { color: 'white' } } }
                }
            });

// ==========================================
// 3. GRÁFICO DE PREDICÃO (Tendência)
// ==========================================
    new Chart(document.getElementById('graficoPredicao'), {
        type: 'line',
        data: {
        labels: ['Jul/26', 'Ago/26', 'Set/26', 'Out/26', 'Nov/26', 'Dez/26'],
        datasets: [{
        label: 'Tendência Preditiva (Casos Estimados)',
        data: [3.2, 2.8, 2.1, 1.9, 1.5, 1.2], 
        borderColor: '#10B981', 
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderDash: [5, 5] 
        }]
        },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: 'white' } } }
            }
        });

// ==========================================
// 4. GRÁFICO DE DELEGACIAS (Distribuição)
// ==========================================
    new Chart(document.getElementById('graficoDelegacias'), {
        type: 'bar',
        data: {
        labels: ['DDM Diadema', '1º D.P. Centro', '2º D.P. Piraporinha', '3º D.P. Taboão', '4º D.P. Eldorado'],
        datasets: [{
        label: 'Volume de Acolhimentos / Ocorrências',
        data: [55, 18, 12, 9, 6], 
        backgroundColor: '#8B5CF6', 
        borderRadius: 6
        }]
        },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: 'white' } } }
            }
        });

// ==========================================
// 5. RELAÇÃO COM O AGRESSOR
// ==========================================
    new Chart(document.getElementById('graficoRelacaoAgressor'), {
    type: 'doughnut',
    data: {
    labels: ['Companheiro/Ex', 'Familiar', 'Conhecido', 'Desconhecido'],
    datasets: [{
                data: [78, 14, 6, 2],
                backgroundColor: ['#EF4444', '#F59E0B', '#3B82F6', '#6B7280'],
                borderWidth: 0
                }]
        },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }
                }
            });

const mapa = L.map('mapaCalor').setView([-23.6865, -46.6246], 14);
setTimeout(() => {
    mapa.invalidateSize();
}, 500);


// ==========================================
// 6.MAPA DE CALOR
// ==========================================

// Mapa Base Dark (CartoDB)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(mapa);

// Coordenadas dos pontos críticos de Diadema
const pontosCalor = [
// Áreas de Alta Intensidade (Vermelho / Laranja)
[-23.6861, -46.6234, 1.0], // Centro
[-23.7142, -46.6048, 1.0], // Eldorado / Inamar
[-23.6912, -46.6385, 0.9], // Conceição
];

// Configuração agressiva para a mancha de calor ficar MUITO visível
const camadaCalor = L.heatLayer(pontosCalor, {
    radius: 40,         
    blur: 15,           // Diminuído o desfoque para a cor ficar mais sólida e forte
    maxZoom: 14,
    max: 1.0,           // Força a intensidade máxima do gradiente
    gradient: {
       0.2: '#00EAFF', // Azul neon para áreas frias
       0.5: '#00FF66', // Verde limão para áreas médias
       0.8: '#FF9900', // Laranja brilhante
       1.0: '#FF0055'  // Vermelho vivo/Neon para o foco crítico
    }
}).addTo(mapa);

// ADICIONANDO CÍRCULOS VISUAIS PARA DESTARCAR OS PONTOS EXATOS
// Isso garante que mesmo se o usuário tirar o zoom, os alvos continuam na tela
pontosCalor.forEach(function (ponto) {
    L.circleMarker([ponto[0], ponto[1]], {
        radius: 15,            // Tamanho do marcador físico
        color: '#FF0055',      // Cor da borda
        fillColor: '#FF0055',  // Cor do preenchimento
        fillOpacity: 0.4,      // Opacidade do preenchimento
        weight: 2              // Espessura da linha
    }).addTo(mapa);
});

    });

    // BOTÃO AJUDA
    // Função externa para o botão de ajuda
    function abrirAjuda() {
        alert(
            "\nSE VOCÊ ESTÁ CORRENDO PERIGO OU PRECISA DE AJUDA IMEDIATA:\n\n" +
            "• Ligue 190 para a Polícia Militar (Emergência).\n\n" +
            "• Ligue 180 para a Central de Atendimento à Mulher (Denúncias e Orientação 24h).\n" 
    
    );
}
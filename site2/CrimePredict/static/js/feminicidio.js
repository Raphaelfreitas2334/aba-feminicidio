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
                backgroundColor: '#60A5FA',
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
    // 3. RELAÇÃO COM O AGRESSOR
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

    // ==========================================
    // 4. GEOLOCALIZAÇÃO (Mapa de Calor com Alta Visibilidade)
    // ==========================================
    // Define o centro em Diadema
    const mapa = L.map('mapaCalor').setView([-23.6865, -46.6246], 14);

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

    // Áreas de Média Intensidade (Verde / Amarelo)
    [-23.6745, -46.6198, 0.6], // Taboão
    [-23.6820, -46.6025, 0.5], // Piraporinha
    [-23.6905, -46.6110, 0.55], // Casa Grande
    [-23.6990, -46.6250, 0.5], // Serraria

    // Áreas de Baixa Intensidade / Periferia do calor (Azul)
    [-23.6650, -46.6210, 0.3], // Campanário
    [-23.6710, -46.6100, 0.25], // Canhema
    [-23.6790, -46.6350, 0.35], // Paulicéia (Divisa)
    [-23.7080, -46.5950, 0.2]   // Alvarenga (Extremo Sul)
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

   // Força o ajuste de tamanho do mapa na tela
    setTimeout(() => {
    mapa.invalidateSize();
}   , 500);
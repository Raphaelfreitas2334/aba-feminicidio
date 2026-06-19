
function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

// Crimes por Categoria
new Chart(document.getElementById('graficoCategorias'), {
    type: 'bar',
    data: {
        labels: ['Tráfico','Furto','Assalto','Feminicídio','Latrocínio'],
        datasets: [{
            label: 'Ocorrências',
            data: [210,480,350,90,65],
            backgroundColor: [
                '#3B82F6',
                '#4F8CFF',
                '#60A5FA',
                '#7DB5FF',
                '#93C5FD'
            ],
            borderRadius: 10
        }]
    }
});

// Horários Mais Perigosos
new Chart(document.getElementById('graficoHorarios'), {
    type: 'line',
    data: {
        labels:['00h','03h','06h','09h','12h','15h','18h','21h'],
        datasets:[{
            label:'Crimes',
            data:[40,80,65,120,180,210,320,250],
            borderColor:'#3B82F6',
            backgroundColor:'#3B82F6',
            tension:0.4
        }]
    }
});

// Predição dos Próximos Meses
new Chart(document.getElementById('graficoPrevisao'), {
    type:'line',
    data:{
        labels:['Jul','Ago','Set','Out','Nov','Dez'],
        datasets:[{
            label:'Previsão',
            data:[620,650,700,740,780,850],
            borderColor:'#60A5FA',
            backgroundColor:'rgba(59,130,246,.25)',
            fill:true,
            tension:0.4
        }]
    }
});
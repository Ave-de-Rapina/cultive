window.addEventListener('load', onload);

function onload(event){
  chartT = createTemperatureChart();
  chartH = createHumidityChart();
}

// Adiciona uma nova série ao gráfico de temperatura para o estado do LED
function createTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart: { 
      renderTo: 'chart-temperature',
      type: 'spline',
      height: 300, // Mantém a altura compacta
      marginLeft: 70, // Mantém as margens ajustadas
      marginRight: 70,
    },
    series: [
      {
        name: 'Temperatura int',
        color: 'red'
      },
      {
        name: 'Temperatura ext',
        color: 'blue'
      },
      {
        name: 'Estado das Saídas', // Atualizado para "Estado das Saídas"
        color: 'orange', // Cor alterada para laranja
        yAxis: 1 // Usando um eixo Y secundário para o LED
      }
    ],
    title: { 
      text: undefined 
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true
        }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { 
        second: '%H:%M:%S',
        minute: '%H:%M:%S',
        hour: '%H:%M:%S'
      },
      labels: {
        formatter: function() {
          var date = new Date(this.value);
          date.setUTCHours(date.getUTCHours() - 3);
          return Highcharts.dateFormat('%H:%M:%S', date.getTime());
        },
        style: {
          fontSize: '10px' // Reduz o tamanho da fonte para o eixo X
        }
      }
    },
    yAxis: [
      {
        title: { 
          text: 'Temperatura &deg;C',
          style: {
            fontSize: '10px' // Mantém o tamanho da fonte do título do eixo Y
          },
          align: 'middle', // Centraliza o título do eixo Y
          rotation: 270, // Mantém o título na orientação vertical
          x: -5 // Aproxima o título do eixo, diminuindo o espaçamento
        },
        labels: {
          formatter: function() {
            return this.value.toFixed(1);
          },
          style: {
            fontSize: '10px' // Reduz o tamanho da fonte para as etiquetas do eixo Y
          }
        },
        tickPixelInterval: 20, // Diminui o espaçamento entre as marcas do eixo Y
      },
      {
        title: { 
          text: 'Estado das Saídas', // Texto atualizado para "Estado das Saídas"
          style: {
            fontSize: '10px' // Mantém o tamanho da fonte do título do eixo Y secundário
          },
          align: 'middle', // Centraliza o título do eixo Y secundário
          rotation: 90, // Mantém o título na orientação vertical
          x: 5 // Aproxima o título do eixo, diminuindo o espaçamento
        },
        opposite: true,
        max: 1,
        min: 0,
        tickPositions: [0, 1], // Define os ticks apenas em 0 e 1
        labels: {
          formatter: function() {
            return this.value === 1 ? 'On' : 'Off';
          },
          style: {
            fontSize: '10px' // Reduz o tamanho da fonte para as etiquetas do eixo Y secundário
          }
        }
      }
    ],
    credits: { 
      enabled: false 
    }
  });
  return chart;
}







// Create Humidity Chart
function createHumidityChart() {
  var chart = new Highcharts.Chart({
    chart: { 
      renderTo: 'chart-humidity',
      type: 'spline'  
    },
    series: [
      {
        name: 'Umidade int',
        color: 'blue' // Cor da série de umidade interna
      },
      // Você pode adicionar outra série de umidade aqui se precisar
       {
         name: 'Umidade ext',
         color: 'green' // Cor da segunda série de umidade
       }
    ],
    title: { 
      text: undefined
    },
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Umidade (%)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}

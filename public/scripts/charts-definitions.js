window.addEventListener('load', onload);

function onload(event){
  chartT = createTemperatureChart();
  chartH = createHumidityChart();
}

function createTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart: { 
      renderTo: 'chart-temperature',
      type: 'spline',
      height: 400, // Altura do gráfico
      marginLeft: 25, // Margem esquerda ajustada para acomodar a escala do eixo Y
      marginRight: 20, // Margem direita ajustada para acomodar a escala do eixo Y secundário
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
        name: 'Estado das Saídas',
        color: 'orange',
        yAxis: 1 // Usando um eixo Y secundário para o LED
      },
      {
        name: 'Ventilação',
        color: 'green',
        yAxis: 1 // Usando o mesmo eixo Y secundário
      },
      {
        name: 'Irrigação',
        color: 'purple',
        yAxis: 1 // Usando o mesmo eixo Y secundário
      }
    ],
    title: { 
      text: 'Temperatura (°C)', // Título do gráfico
      style: {
        fontSize: '18px', // Tamanho da fonte do título
        fontWeight: 'bold' // Negrito no título
      }
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
        y: 20, // Ajusta o espaçamento vertical dos rótulos do eixo X
        formatter: function() {
          return Highcharts.dateFormat('%H:%M:%S', this.value);
        },
        style: {
          fontSize: '10px' // Tamanho da fonte do eixo X
        }
      }
    },
    yAxis: [
      {
        title: { 
          text: null // Remove o texto do eixo Y esquerdo
        },
        labels: {
          align: 'left', // Alinha os rótulos do eixo Y à esquerda
          x: -20, // Ajusta a posição das etiquetas mais perto da margem, mas fora do gráfico
          formatter: function() {
            return this.value.toFixed(1) + '°';
          },
          style: {
            fontSize: '10px' // Tamanho da fonte dos rótulos do eixo Y
          }
        },
        tickPixelInterval: 20, // Intervalo entre as marcas do eixo Y
      },
      {
        title: { 
          text: null // Remove o texto do eixo Y direito
        },
        opposite: true, // Alinha o eixo Y à direita
        max: 1,
        min: 0,
        tickPositions: [0, 1], // Define as posições das marcas no eixo Y
        labels: {
          align: 'right', // Alinha os rótulos do eixo Y à direita
          x: 15, // Ajusta a posição das etiquetas mais perto da margem, mas fora do gráfico
          formatter: function() {
            return this.value === 1 ? 'On' : 'Off';
          },
          style: {
            fontSize: '10px' // Tamanho da fonte dos rótulos do eixo Y secundário
          }
        }
      }
    ],
    credits: { 
      enabled: false // Remove o crédito padrão da Highcharts
    }
  });

  return chart;
}

// Create Humidity Chart
function createHumidityChart() {
  var chart = new Highcharts.Chart({
    chart: { 
      renderTo: 'chart-humidity',
      type: 'spline',  
      height: 400, // Altura do gráfico
      marginLeft: 25, // Margem esquerda ajustada para acomodar a escala do eixo Y
      marginRight: 20, // Margem direita ajustada para acomodar a escala do eixo Y secundário
    },
    series: [
      {
        name: 'Umidade int',
        color: '#00008B', // Azul escuro
        data: [] // Inicializa com um array vazio
      },
      {
        name: 'Umidade ext',
        color: '#87CEFA', // Azul claro
        data: [] // Inicializa com um array vazio
      },
      {
        name: 'Estado das Saídas',
        color: 'orange',
        yAxis: 1, // Usando um eixo Y secundário para o LED
        data: [] // Inicializa com um array vazio
      },
      {
        name: 'Ventilação',
        color: 'green',
        yAxis: 1, // Usando o mesmo eixo Y secundário
        data: [] // Inicializa com um array vazio
      },
      {
        name: 'Irrigação',
        color: 'purple',
        yAxis: 1, // Usando o mesmo eixo Y secundário
        data: [] // Inicializa com um array vazio
      }
    ],
    title: { 
      text: 'Umidade (%)', // Título do gráfico
      style: {
        fontSize: '18px', // Tamanho da fonte do título
        fontWeight: 'bold' // Negrito no título
      }
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
      dateTimeLabelFormats: { second: '%H:%M:%S' },
      labels: {
        y: 20, // Ajusta o espaçamento vertical dos rótulos do eixo X
        formatter: function() {
          return Highcharts.dateFormat('%H:%M:%S', this.value);
        },
        style: {
          fontSize: '10px' // Tamanho da fonte do eixo X
        }
      }
    },
    yAxis: [
      {
        title: { 
          text: null // Remove o texto do eixo Y para umidade
        },
        labels: {
          align: 'left', // Alinha os rótulos do eixo Y à esquerda
          x: -20, // Ajusta a posição das etiquetas mais perto da margem, mas fora do gráfico
          formatter: function() {
            return Math.round(this.value) + '%'; // Exibe o valor inteiro seguido de %
          },
          style: {
            fontSize: '10px' // Tamanho da fonte dos rótulos do eixo Y
          }
        },
        tickPixelInterval: 20 // Intervalo entre as marcas do eixo Y
      },
      {
        title: { 
          text: null // Remove o texto do eixo Y direito para os estados dos LEDs
        },
        opposite: true, // Alinha o eixo Y à direita
        max: 1,
        min: 0,
        tickPositions: [0, 1], // Define as posições das marcas no eixo Y
        labels: {
          align: 'right', // Alinha os rótulos do eixo Y à direita
          x: 15, // Ajusta a posição das etiquetas mais perto da margem, mas fora do gráfico
          formatter: function() {
            return this.value === 1 ? 'On' : 'Off';
          },
          style: {
            fontSize: '10px' // Tamanho da fonte dos rótulos do eixo Y secundário
          }
        }
      }
    ],
    credits: { 
      enabled: false // Remove o crédito padrão da Highcharts
    }
  });

  return chart;
}


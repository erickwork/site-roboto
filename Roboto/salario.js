/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '1 - 2 Salários Mínimos',
        '3 - 5 Salários Mínimos',
        '6 - 8 Salários Mínimos',
        '9 - 10 Salários Mínimos',
        '+10 Salários Mínimos'
      ],
      datasets: [{
        data: [
          2.4,
          2.3,
          2.4,
          2.3,
          2.1
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()

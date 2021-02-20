export default{
        title:{
         // left:'40%',
          text:'Maruthi Suzuki Sales Report',
          subtext:'2020 Monthly Sales'
        },
        grid: {
          left:'20%',
          //right:'40%',
          top: 70
        },
        tooltip:{
          //   trigger: 'axis',
          //   axisPointer: {
          //     type: 'shadow'
          // }
        },
        legend: {
          right:'10%',
          data: ['Swift DZire', 'Ertiga', 'Baleno', 'Brezza']
        },
        xAxis: {
          type: 'category',
          data: getMonths()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          { 
          name: 'Swift DZire',
          data: [5000, 5500, 6000, 6500, 8000, 8400, 7500, 4000, 901, 1290, 1330, 1320],
          type: 'bar'
        }, { 
          name: 'Ertiga',
          data: [3000, 3500, 4000, 4500, 6000, 6400, 5500, 4000, 501, 1290, 1330, 1320],
          type: 'bar'
        }, { 
          name: 'Baleno',
          data: [5000, 5500, 6000, 6500, 8000, 8400, 7500, 4000, 901, 1290, 1330, 1320],
          type: 'bar'
        }, { 
          name: 'Brezza',
          data: [4000, 5500, 6000, 6500, 6000, 8400, 7500, 4000, 901, 1290, 8330, 1320],
          type: 'line'
        }
      ]
}

function getMonths() {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
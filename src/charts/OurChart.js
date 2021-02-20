import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import ChartDataOptions from './ChartDataOptions';

class OurChart extends Component{
    render() {
        return (
          <ReactEcharts option={ChartDataOptions} style={{width:"50%"}}/>
        );
      }
}

export default OurChart;

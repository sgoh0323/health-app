import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';
import { Card } from 'antd-mobile';

const MissionCard = () => {
    const [options, setOptions] = useState({
        tooltip: { show: true, trigger: 'item' },
        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            show: false
        },
        yAxis: {
            type: 'value',
            show: false,
            beginAtZero: true,
            min: 40
        },
        series: [
            {
                data: [50, 70, 90, 60, 47, 50, 70],
                type: 'line',
                symbol: 'circle',
                symbolSize: 20
            }
        ]
    });

    return <Card></Card>;
};
export default MissionCard;

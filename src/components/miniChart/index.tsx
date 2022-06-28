import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const MiniChart = ({ day = 31, activityRate = 40, mealRate = 90 }) => {
    const gaugeData = [
        {
            value: activityRate,
            name: '',
            // title: {
            //     offsetCenter: ['0%', '-30%']
            // },
            // detail: {
            //     valueAnimation: true,
            //     offsetCenter: ['0%', '-15%']
            // }
            itemStyle: { color: '#ef800a' }
        },
        {
            value: mealRate,
            name: day,
            title: {
                offsetCenter: ['0%', '0%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '15%']
            }
        }
    ];
    const [options, setOptions] = useState({
        series: [
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 1
                        // borderColor: '#464646'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 10
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    distance: 50
                },
                data: gaugeData,
                title: {
                    fontSize: 11,
                    show: true
                },
                detail: {
                    show: false,
                    width: 50,
                    height: 10,
                    fontSize: 10,
                    // color: 'auto',
                    // borderColor: 'auto',
                    borderRadius: 20,
                    borderWidth: 1,
                    // formatter: '{value}%'
                    formatter: '5'
                }
            }
        ]
    });

    return (
        <ECharts
            option={options}
            opts={{ height: 80 }}
            style={{
                height: '100%',
                width: '100%'
            }}
        />
    );
};
export default MiniChart;

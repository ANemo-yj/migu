$(() => {
    $.getJSON('/data', (json) => {

        // 基于准备好的dom，初始化echarts实例   主题：vintage、macarons
        var myChart = echarts.init(document.getElementById('main'), 'default');

        const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];

        // 指定图表的配置项和数据
        var option = {
            backgroundColor: '#fff',
            toolbox: { //可视化的工具箱
                show: true,
                feature: {
                    dataView: { //数据视图
                        show: true
                    },
                    restore: { //重置
                        show: true
                    },
                    dataZoom: { //数据缩放视图
                        show: true
                    },
                    saveAsImage: {//保存图片
                        show: true
                    },
                    magicType: {//动态类型切换
                        type: ['bar', 'line']
                    }
                }
            },
            title: {
                text: '咪咕音乐客户端内试听日趋势图',
                textStyle: {
                    fontSize:18,
                    fontWeight: 400
                },
                left:'center',
                top: '5%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        show: true,
                        backgroundColor: '#fff',
                        color: '#556677',
                        borderColor: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetY: 0
                    },
                    lineStyle: {
                        width: 0
                    }
                },
                backgroundColor: '#fff',
                textStyle: {
                    color: '#5c6c7c'
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
            },
            legend: {

                icon: 'circle',
                top: '5%',
                right: '5%',
                itemWidth: 6,
                itemGap: 20,
                textStyle: {
                    color: '#556677'
                }
            },
            grid: {
                top: '15%'
            },
            xAxis: [{
                type: 'category',
                data: json['data'][0]['data'],
                axisLine: {
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#556677'
                    },
                    margin: 15
                },
                axisPointer: {
                    label: {
                        padding: [11, 5, 7],
                        backgroundColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#33c0cd' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#33c0cd' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    }
                },
                splitLine: {
                    show: false
                }
            }, {
                type: 'value',
                position: 'right',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    },
                    formatter: '{value}'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name:json['data'][2]['column_name'],
                type: 'line',
                data: json['data'][2]['data'],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                yAxisIndex: 0,
                showSymbol: false,
                lineStyle: {
                    width: 5,
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#9effff'
                        },
                        {
                            offset: 1,
                            color: '#9E87FF'
                        }
                    ]),
                    shadowColor: 'rgba(158,135,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[0],
                        borderColor: colorList[0]
                    }
                }
            }, {
                name: json['data'][19]['column_name'],
                type: 'line',
                data: json['data'][19]['data'],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                yAxisIndex: 1,
                showSymbol: false,
                lineStyle: {
                    width: 5,
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                            offset: 0,
                            color: '#73DD39'
                        },
                        {
                            offset: 1,
                            color: '#73DDFF'
                        }
                    ]),
                    shadowColor: 'rgba(115,221,255, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
                itemStyle: {
                    normal: {
                        color: colorList[1],
                        borderColor: colorList[1]
                    }
                }
            },]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    })
});
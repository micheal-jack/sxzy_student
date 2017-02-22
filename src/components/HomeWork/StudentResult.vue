<template>
    <div class="result">
        <cui-navbar v-on:back="back" :title="title">
        </cui-navbar>
        <div id="quality">
        </div>
        <div id="errors">
        </div>
    </div>
</template>
<script>
import echarts from '../../lib/echarts.min.js'

export default {
    mounted() {
            var Quality = document.getElementById('quality');
            var Errors = document.getElementById('errors');
            //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            var resizemyMain = function() {
                Quality.style.width = window.innerWidth - 30 + 'px';
                Errors.style.width = window.innerWidth - 30 + 'px';
            };
            //设置容器高宽
            resizemyMain();
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(Quality);
            var myChart2 = echarts.init(Errors);


            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '作业整体质量统计'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'right',
                //     data: ['优', '良', '中', '差']
                // },
                color: ['#dbecf8', '#2c82be', '#53a8e2', '#76ddfb'],
                series: [{
                    name: '作业评阅',
                    type: 'pie',
                    radius: ['50%', '75%'], // 半径[内半径，外半径]
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '16'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 6,
                        name: '优'
                    }, {
                        value: 5,
                        name: '良'
                    }, {
                        value: 8,
                        name: '中'
                    }, {
                        value: 13,
                        name: '差'
                    }]
                }]
            };
            var option2 = {
                title: {
                    text: '错题情况统计'
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['第1题', '第2题', '第3题', '第4题', '第5题', '第6题', '第7题']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name: '错误人数',
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 230, 210]
                }]
            };


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            myChart2.setOption(option2);
            //用于使chart自适应高度和宽度
            window.onresize = function() {
                //重置容器高宽
                resizemyMain();
                myChart.resize();
                myChart2.resize();
            };

        },
        data() {
            return {
                title: '作业完成质量统计'
            }
        },
        methods: {
            back: function(evt) {
                console.log("back btn click");
            }
        }
}
</script>
<style scoped>
.result {
    min-height: 100%;
    background: #fff;
    padding-top: 110px;
}

#quality,
#errors {
    height: 300px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10);
    border-radius: 4px;
    margin: 0 auto;
}

#quality {
    margin-bottom: 40px;
}
</style>

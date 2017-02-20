<template>
    <div class="quality">
        <cui-navbar v-on:back="back" :title="title">
        </cui-navbar>
        <el-tabs type="border-card">
            <el-tab-pane label="作业" id="main-container">
                <div id="main"></div>
                <div id="line"></div>
            </el-tab-pane>
            <el-tab-pane label="练习">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import echarts from '../../lib/echarts.js'

export default {
    mounted() {
            var myMain = document.getElementById('main');
            var myLine = document.getElementById('line');
            //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            var resizemyMain = function() {
                myMain.style.width = window.innerWidth - 30 + 'px';
                myLine.style.width = window.innerWidth - 30 + 'px';
            };
            //设置容器高宽
            resizemyMain();
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(myMain);
            var myChart2 = echarts.init(myLine);


            var option = {
                title: {
                    text: '本学期各科作业质量分析'
                },
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color: ['#53A8E2', '#F8E81C', '#FF878B'],
                legend: {
                    x: 'right',
                    itemGap: 0,
                    data: ['优', '良', '差']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['数学', '语文', '英语', '音乐', '科学', '心理健康', '美术']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                        name: '优',
                        type: 'bar',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    }, {
                        name: '良',
                        type: 'bar',

                        data: [220, 182, 191, 234, 290, 330, 310]
                    }, {
                        name: '差',
                        type: 'bar',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }

                ]
            };
            var option2 = {
                title: {
                    text: '历史作业综合质量分析'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: '80%',
                    data: ['优', '良', '差']
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
                    data: ['2017年上', '2016年下', '2016年上', '2015年下', '2015年上', '2014年下', '2014年上']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                        name: '优',
                        type: 'line',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    }, {
                        name: '良',
                        type: 'line',

                        data: [220, 182, 191, 234, 290, 330, 310]
                    }, {
                        name: '差',
                        type: 'line',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }

                ]
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
                title: '学习质量分析-作业'
            }
        },
        methods: {
            back: function(evt) {
                console.log("back btn click");
            }
        }
}
</script>
<style>
.quality .el-tabs__header {
    width: 292px;
    height: 50px;
    margin: 0 auto 20px;
    border-radius: 25px;
    overflow: hidden;
}

.quality .el-tabs--border-card>.el-tabs__header>.el-tabs__item {
    border: none;
    width: 148px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #666;
    border: none;
    border-radius: 25px;
}

.quality .el-tabs--border-card>.el-tabs__header>.el-tabs__item.is-active {
    background: #36b991;
    color: #fff;
}
</style>
<style scoped>
.quality {
    height: 100%;
    padding-top: 90px;
    background: #fff;
}

.el-tabs--border-card {
    background: none;
    border: none;
    box-shadow: none;
}

#main,
#line {
    height: 300px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10);
    border-radius: 4px;
}

#main {
    margin-bottom: 40px;
}
</style>

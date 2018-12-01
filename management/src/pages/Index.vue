<template>
    <main>
        <div class="i-section message1">

            <div class="i-title">
                <i class="iconfont">&#xe7f9;</i>
                概况信息
                <i class="iconfont"></i>
            </div>

            <div class="i-content">
                <dl>
                    <dt>
                        <i class="iconfont">&#xe545;</i>
                        <span>访问量</span>
                    </dt>
                    <dd>
                        <p>
                            <span>总数：</span><i class="i-number">1342</i>
                        </p>
                        <p>
                            <span>上次浏览时间：</span><i>10月12日</i>
                        </p>
                        <p>
                            <span>最近一月浏览数量：</span><i>125</i>
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <i class="iconfont">&#xe711;</i>
                        <span>下载量</span>
                    </dt>
                    <dd>
                        <p>
                            <span>总数：</span><i class="i-number">508</i>
                        </p>
                        <p>
                            <span>上次下载时间：</span><i>10月12日</i>
                        </p>
                        <p>
                            <span>最近一月下载数量：</span><i>23</i>
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="i-section pie1">

            <div class="i-title">
                <i class="iconfont">&#xe7f9;</i>
                访问来源
                <i class="iconfont"></i>
            </div>

            <div class="i-content">
               
            </div>
        </div>
        <div class="i-section line1">

            <div class="i-title">
                <i class="iconfont">&#xe7f9;</i>
                统计
                <i class="iconfont"></i>
            </div>

            <div class="i-content">
               
            </div>
        </div>
        <div class="i-section zline1">

            <div class="i-title">
                <i class="iconfont">&#xe7f9;</i>
                统计
                <i class="iconfont"></i>
            </div>

            <div class="i-content">
               
            </div>
        </div>
        <div class="i-section radar1">

            <div class="i-title">
                <i class="iconfont">&#xe7f9;</i>
                雷达图
                <i class="iconfont"></i>
            </div>

            <div class="i-content">
               
            </div>
        </div>
    </main>
</template>

<script>
import echarts from './../../node_modules/echarts/dist/echarts'

export default {
    name: 'Index',
    mounted(){
        let pie1 =  echarts.init(document.querySelector('.pie1 .i-content'));
        let line1 =  echarts.init(document.querySelector('.line1 .i-content'));
        let zline1 =  echarts.init(document.querySelector('.zline1 .i-content'));
        let radar1 =  echarts.init(document.querySelector('.radar1 .i-content'));
        let optionPie1 = {
            // color: ['rgba(255,255,255,0.8)','rgba(0,0,0,0.2)'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                textStyle:{
                    color: 'rgba(255,255,255,0.9)'
                },
                orient: 'vertical',
                x: 'left',
                data:['直接访问','CSDN','脚本之家','简书','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'CSDN'},
                        {value:310, name:'脚本之家'},
                        {value:234, name:'简书'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        }
        let optionLine1 = {
            color: 'rgba(255,255,255,0.8)',
            grid: { // 折线图(含坐标轴) 与 四周 的间隙
                left:0,
                right:5,
                top:5,
                bottom:0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.9)"
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.9)'
                        }
                    }
                },
                axisTick: {
                    length:0
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.9)"
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.9)'
                        }
                    }
                },
                axisTick: {
                    length:0
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
        let optionZLine1 = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle:{
                    color: 'rgba(255,255,255,0.9)'
                },
                data:['CSDN','脚本之家','简书','直接访问','搜索引擎']
            },
            grid: {
                left: 0,
                right: 12,
                bottom: 3,
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.9)"
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.9)'
                        }
                    }
                },
                axisTick: {
                    length:0
                },
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.9)"
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.9)'
                        }
                    }
                },// 刻度线超出距离
                axisTick: {
                    length:0
                },
            },
            series: [
                {
                    name:'CSDN',
                    type:'line',
                    stack: '总量',
                    data:[12, 13, 10, 13, 9, 23, 21]
                },
                {
                    name:'脚本之家',
                    type:'line',
                    stack: '总量',
                    data:[22, 18, 19, 23, 29, 33, 31]
                },
                {
                    name:'简书',
                    type:'line',
                    stack: '总量',
                    data:[15, 23, 20, 15, 19, 33, 41]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[32, 33, 31, 34, 30, 30, 32]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[82, 93, 91, 93, 120, 130, 132]
                }
            ]
        };
        let optionRadar1 = {
            tooltip: {},
            legend: {
                textStyle:{
                    color: 'rgb(238, 197, 102)'
                },
                left: -3,
                top: -5,
                data: ['预算分配（Allocated Budget）']
            },
            radar: {
                shape: 'circle',
                // 名称样式
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                indicator: [
                { name: 'sales', max: 650},
                { name: 'Administration', max: 1600},
                { name: 'Information Techology', max: 3000},
                { name: 'Customer Support', max: 3800},
                { name: 'Development', max: 5200},
                { name: 'Marketing', max: 2500}
                // { name: '销售（sales）', max: 650},
                // { name: '管理（Administration）', max: 1600},
                // { name: '信息技术（Information Techology）', max: 3000},
                // { name: '客服（Customer Support）', max: 3800},
                // { name: '研发（Development）', max: 5200},
                // { name: '市场（Marketing）', max: 2500}
                ],
                splitArea: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.2)', 'rgba(238, 197, 102, 0.4)',
                            'rgba(238, 197, 102, 0.6)', 'rgba(238, 197, 102, 0.8)',
                            'rgba(238, 197, 102, 0.9)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                // 中心分割线
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [430, 1000, 2800, 3500, 5000, 1900],
                        name : '预算分配（Allocated Budget）'
                    }
                ],
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#F9713C'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                // 数据line
                lineStyle:{
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }
                }
            }]
        };
        pie1.setOption(optionPie1);
        line1.setOption(optionLine1);
        zline1.setOption(optionZLine1);
        radar1.setOption(optionRadar1);

        window.addEventListener("resize", () => { 
            pie1.resize();  
            line1.resize();  
            zline1.resize();
            radar1.resize();
        });
    }
}
</script>

<style lang='scss' scoped>
main{ 
    padding: 15px 20px;
    font-size:14px; 
    width: 80%;
    // background: black;
    min-height:100%;
    margin-left:20%;
    color: rgba(255,255,255,0.7);
    overflow: hidden;
    padding-right: 10px;
}

main::-webkit-scrollbar{
    display: none;
}

.i-section{
    background:rgba(0,0,0,0.6);
    width:30%;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
}
.i-section .i-title{
    background:rgba(0,0,0,0.2);
    line-height: 25px;
    
}
.i-section .i-title .iconfont{
    padding: 0 5px;
    vertical-align: middle;
}
.i-section .i-title .iconfont:last-child{
    float:right;
}
.i-section .i-content{
    color: rgba(255,255,255,0.7);
    width: 100%;
    padding: 5px 10px;
}
.i-section .i-content dl{
    height: 130px;
}

.i-section .i-content dl dt{
    float: left;
    width: 30%;
    height: 100%;
    text-align: center;
}

.i-section .i-content dl dt i.iconfont{
    font-size: 50px;
    line-height: 130%;
    display: block;
}

.i-section .i-content dl dd{
    // height: 100%;
    padding-left: 35%;
}

.i-section .i-content dl dd p:first-child{margin-bottom: 12px;}
.i-section .i-content dl dd p{
    line-height: 22px;
    font-size: 12px;
}

.i-number{
    line-height: 45px;
    font-size: 30px;
    vertical-align: middle;
}

.pie1{
    width: 40%;
}

.line1{
    width: 28%;
}

.zline1{
    width: 50%;
}

.radar1{
    width: 48%;
    margin-left: 5px;
}

@media (max-width: 991px) {
    .message1{
        width: 50%;
    }
    .pie1{
        width: 48%;
    }
    .line1{
        width: 48%;
        margin-right: 5px;   
    }

    .radar1{
        width: 98%;
        margin-left: 2.5px;
    }
}

.i-section .i-content{
    height: 270px;
}
</style>

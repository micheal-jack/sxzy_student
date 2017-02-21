<template>
    <div class="mythread">
        <cui-navbar v-on:back="back" :title="title">
            <a v-on:click="showCategoryList" class="menu-button" slot="right">
                <i class="el-icon-menu large"></i>
            </a>
        </cui-navbar>
        <a v-on:click="" class="search-btn">
            <i class="el-icon-search"></i>
        </a>
        <scroller style="top:100px;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
            <div class="container">
                <el-select v-model="value" placeholder="请选择" class="term-list">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-tabs type="border-card">
                    <el-tab-pane label="最新提问">
                        <el-row class="content">
                            <el-col :span="20" v-for="item in course_list">
                                <div class="item">
                                    <div class="item-left">
                                        <img class="avatar" src="static/img/avatar-finn.png" alt="">
                                        <p class="name">张同学</p>
                                    </div>
                                    <div class="item-right">
                                        <p class="chapter">三年级语文（上）大海故乡<span><i class="el-icon-time"></i>2016-7-7  12:30</span></p>
                                        <p class="question">这课的重点是什么？重点词汇需要掌握哪些不清楚哪些不清楚哪些不清楚哪些不清楚</p>
                                        <div class="answer">
                                            <p class="answer-top"><span>全部回答（64）</span><a class="to-answer" href="javascript:;">我要回答</a></p>
                                            <div class="answer-list">
                                                <div>
                                                    <img class="answerer" src="static/img/avatar-finn.png" alt="">
                                                    <span class="answerer-name">张同学</span>
                                                    <span class="answer-time"><i class="el-icon-time"></i>2016-7-7  12:30</span>
                                                </div>
                                                <p class="answer-content">重点词汇是大海、故乡、希望</p>
                                            </div>
                                            <div class="answer-list">
                                                <div>
                                                    <img class="answerer" src="static/img/avatar-finn.png" alt="">
                                                    <span class="answerer-name">张同学</span>
                                                    <span class="answer-time"><i class="el-icon-time"></i>2016-7-7  12:30</span>
                                                </div>
                                                <p class="answer-content">重点词汇是大海、故乡、希望</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="最新回答">
                        <el-row class="content">
                            <el-col :span="20" v-for="item in course_list">
                                <div class="item">
                                    <div class="item-left">
                                        <img class="avatar" src="static/img/avatar-finn.png" alt="">
                                        <p class="name">李同学</p>
                                    </div>
                                    <div class="item-right">
                                        <p class="chapter">六年级英语（上）hello world<span><i class="el-icon-time"></i>2016-7-7  12:30</span></p>
                                        <p class="question">这课的重点是什么？重点词汇需要掌握哪些不清楚哪些不清楚哪些不清楚哪些不清楚</p>
                                        <div class="answer">
                                            <p class="answer-top"><span>全部回答（64）</span><a class="to-answer" href="javascript:;">我要回答</a></p>
                                            <div class="answer-list">
                                                <div>
                                                    <img class="answerer" src="static/img/avatar-finn.png" alt="">
                                                    <span class="answerer-name">张同学</span>
                                                    <span class="answer-time"><i class="el-icon-time"></i>2016-7-7  12:30</span>
                                                </div>
                                                <p class="answer-content">重点词汇是大海、故乡、希望</p>
                                            </div>
                                            <div class="answer-list">
                                                <div>
                                                    <img class="answerer" src="static/img/avatar-finn.png" alt="">
                                                    <span class="answerer-name">张同学</span>
                                                    <span class="answer-time"><i class="el-icon-time"></i>2016-7-7  12:30</span>
                                                </div>
                                                <p class="answer-content">重点词汇是大海、故乡、希望</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </scroller>
        <a class="quiz" href="javascript:;">
        </a>
    </div>
</template>
<script>
import Scroller from "vue-scroller/src/components/Scroller.vue"
export default {
    name: 'my_course',
    components: {
        Scroller
    },
    mounted() {
        for (var i = 1; i <= 6; i++) {
            this.course_list.push({
                course_id: i,
                course_title: '课程 ' + i
            })
        }
    },
    methods: {
        refresh() {
            console.log('refresh')
            setTimeout(() => {
                var start = 1
                var l = [];
                for (var i = start; i < 7; i++) {
                    l.push({
                            course_id: i,
                            course_title: '课程New ' + i
                        })
                        // this.course_list.splice(0, 0, {course_id:i,course_title:'课程New '+i});
                }
                this.course_list = l
                if (this.$refs.my_scroller)
                    this.$refs.my_scroller.finishPullToRefresh();
            }, 1000)
        },
        infinite() {
            console.log('加载更多')
            setTimeout(() => {
                var start = this.course_list.length + 1;
                console.log(start)
                if (start >= 20) {
                    this.$refs.my_scroller.finishInfinite(true);
                    return
                }
                for (var i = start; i < start + 7; i++) {
                    this.course_list.push({
                        course_id: i,
                        course_title: '课程 ' + i
                    });
                }
                setTimeout(() => {
                    this.$refs.my_scroller.finishInfinite();
                })
            }, 1000)
        },
        back: function(evt) {
            console.log("back btn click");
        },
        showCategoryList: function(evt) {
            console.log("show category list");
        }
    },
    data() {
        return {
            title: '我的问答',
            course_list: [],
            options: [{
                value: '选项1',
                label: '2017年上'
            }, {
                value: '选项2',
                label: '2016年下'
            }, {
                value: '选项3',
                label: '2016年上'
            }, {
                value: '选项4',
                label: '2015年下'
            }, {
                value: '选项5',
                label: '2015年上'
            }],
            value: ''
        }
    }
}
</script>
<style>
.mythread p {
    margin: 0;
}

.mythread .quiz {
    width: 58px;
    height: 58px;
    display: block;
    background: url(/static/img/assets/mythread/quiz.png);
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-size: 100%;
}

.mythread nav .title {
    margin-top: 24px;
}

.mythread .el-tabs__header {
    width: 292px;
    height: 50px;
    margin: 0 auto 20px;
    border-radius: 25px;
    overflow: hidden;
    background: #fff;
}

.mythread .el-tabs--border-card>.el-tabs__header>.el-tabs__item {
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

.mythread .el-tabs--border-card>.el-tabs__header>.el-tabs__item.is-active {
    background: #36b991;
    color: #fff;
}

.mythread .el-tabs--border-card>.el-tabs__content {
    padding: 0 30px;
}
</style>
<style scoped>
.search-btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #9B9B9B;
    color: #9B9B9B;
    display: block;
    position: fixed;
    top: 15px;
    right: 74px;
    z-index: 1000;
}

.search-btn i {
    font-size: 30px;
    line-height: 42px;
    display: block;
    text-align: center;
}

.menu-button {
    float: right;
}

.el-tabs--border-card {
    background: none;
    border: none;
    box-shadow: none;
}

.container {
    position: relative;
}

.el-select {
    position: absolute;
    top: 7px;
    right: 32px;
}

.el-col {
    width: 100%;
}

.item {
    width: 100%;
    height: 457px;
    padding-top: 23px;
    box-sizing: border-box;
    border-radius: 12px;
    background: #fff;
    margin-bottom: 20px;
}

.item-left {
    float: left;
    width: 10%;
}

.item-left .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 32%;
}

.item-left .name {
    width: 60px;
    font-size: 14px;
    color: #666;
    margin-left: 32%;
    text-align: center;
}

.item-right {
    width: 83%;
    float: left;
    margin-left: 25px;
}

.chapter {
    font-size: 18px;
    color: #333;
}

.chapter span {
    font-size: 14px;
    color: #999;
    float: right;
}

.chapter span i {
    margin-right: 6px;
}

.question {
    font-size: 16px;
    color: #666;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.answer {
    width: 100%;
    height: 340px;
    background: #ECECEC;
    border-radius: 6px;
    padding: 0 2.5%;
    box-sizing: border-box;
}

.answer-top {
    height: 52px;
}

.answer-top span {
    float: left;
    font-size: 14px;
    color: #666;
    line-height: 52px;
}

.answer-top .to-answer {
    width: 87px;
    height: 32px;
    background: #36b991;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    margin-top: 10px;
    display: block;
    float: right;
    text-decoration: none;
    border-radius: 16px;
}

.answer-list {
    width: 100%;
    background: #fff;
    height: 120px;
    margin-bottom: 10px;
    padding-left: 2.6%;
    box-sizing: border-box;
}

.answerer {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
    margin-top: 10px;
}

.answer-list > div {
    height: 61px;
    border-bottom: 1px solid #ededed;
}

.answerer-name,
.answer-time {
    line-height: 60px;
    font-size: 14px;
    color: #666;
    margin-left: 10px;
}

.answerer-name {
    float: left;
}

.answer-time {
    float: right;
    color: #999;
    margin-right: 25px;
}

.answer-time i {
    margin-right: 6px;
}

.answer-content {
    font-size: 18px;
    color: #333;
    line-height: 58px;
}
</style>

<template>
    <div class="quiz">
        <el-button type="success">提问</el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
            <el-tab-pane label="我的提问" name="first">
                <a class="question-list" href="javascript:;" v-for="item in items">
                    <p class="ql-question">{{item.question}}</p>
                    <p class="ql-time">{{item.time}} <span class="number">{{item.number}}</span>回答</p>
                </a>
            </el-tab-pane>
            <el-tab-pane label="同学提问" name="second"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: 'course_detail_thread',
    data() {
        return {
            title: '课程详情页-提问',
            activeName: 'second',
            items: [{
                question: "“垚”这个字的读音是什么？",
                time: "发表于21天前 ",
                number:" 1 "
            }]

        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style>

.tabs .el-tabs__header {
	margin-bottom: 0;
}
.tabs .el-tabs__content {
	height: 66px;
}
.tabs .el-tabs__item.is-active {
	color: #36b991;
}
.tabs .el-tabs__active-bar {
	background-color: #36b991;
}
</style>
<style scoped>
.quiz {
    width: 100%;
}

.el-button--success {
    background: #36b991;
    margin-top: 10px;
    margin-right: 20px;
    float: right;
}

.el-tabs {
    clear: both;
}

.question-list {
	width: 100%;
	height: 65px;
	border-bottom: 1px solid #e7e7e7;
	display: block;
	text-decoration: none;
	padding-top: 10px;
	box-sizing: border-box;
}
.question-list p{
	margin: 0;
	line-height: 28px;
	text-indent: 10px;
}
.ql-question {
	font-size: 16px;
	color: #666;

}
.ql-time {
	font-size: 12px;
	color: #BCBCBC;
}
.ql-time .number {
	color: #36b991;
}

</style>

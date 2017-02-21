<template>
<div class="container">
  <cui-navbar v-on:back="back" :title="title">
  </cui-navbar>
  <div class="content">
      <el-row v-for="item in test_list">
        <p class="tag">{{item.tag}}</span></p>
        <hr class="line" />
        <div class="item-wrapper">
          <div class="question-box" v-for="(question, index) in item.questions" >
              <img class="item-badge" v-if="question.isDone && question.isRight" src="static/img/assets/homework/correct.png"></img>
              <img class="item-badge" v-if="question.isDone && !question.isRight" src="static/img/assets/homework/error.png"></img>
              <div :class="['item-index', question.isDone ? 'item-selected' : '']">
                <p>{{index+1}}</p>
              </div>
          </div>
        </div>
      </el-row>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    	title:'答题卡',
      test_list: [
        {
          tag: "一 填空题",
          questions: [
            {
              id: "1",
              "answer": "A",
              "correct_answer": "B",
              isRight: true,
              isDone: true
            },
            {
              id: "2",
              "answer": "D",
              "correct_answer": "D",
              isRight: false,
              isDone: true
            },
            {
              id: "3",
              "answer": "",
              "correct_answer": "C",
              isRight: false,
              isDone: false
            },
          ]
        },
        {
          tag: "二 单选题"
        },
        {
          tag: "三 多选题"
        }
      ]
    }
  },
  methods: {
    back: function () {

    }
  }
}
</script>

<style scoped>
.container {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  overflow-y: auto;
}

.content {
  position: relative;
  top: 85px;
  margin: 40px 0px 60px 60px;
}

hr {
  border: 1px solid #EBEBEB;
}

p.tag {
  font-size: 24px;
  color: #000000;
}

.item-wrapper {
 padding-left: 25px;
}

.item-wrapper > * {
  line-height: normal;
  vertical-align: top;
}

.question-box {
  display: inline-block;
  margin: 10px 10px 10px 10px;
}

.item-index {
  /*background: #36B991;  selected */
  background: #FFFFFF;
  border: 1px solid #D1D1D1;
  border-radius: 3px;
  font-size: 26px;
  color: #999999;
  width: 46px;
  height: 46px;
}

.item-index > p {
  width: 46px;
  line-height: 46px;
  margin: 0 0;
  text-align: center;
  padding-left: 3px;
}

.item-selected {
  background: #36B991;
  border: none;
  color: #fff;
}

.item-badge {
  width: 20px;
  height: 20px;
  /*background-color: #333;
  border-radius: 100%;*/
  position: relative;
  float: right;
  margin-top: -10px;
  margin-right: -8px;
}

</style>

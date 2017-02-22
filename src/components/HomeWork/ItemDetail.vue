<template>
<div class="container">
  <cui-navbar v-on:back="back" :title="title">
    <div slot="right">
      <a class="menu-button">
        <img src="static/img/assets/homework/abcd.png" />
      </a>
      <a class="menu-button">
        <img src="static/img/assets/homework/group.png" />
      </a>
      <a class="menu-button">
        <el-dropdown>
        <img src="static/img/assets/homework/edit.png" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>下次答题</el-dropdown-item>
          <el-dropdown-item>提交作业</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </a>
    </div>
  </cui-navbar>

  <div class="content">
    <div class="content-head">
      <div class="question-title-group">
        <p class="question-count">题目总数 <span>30</span></p>
        <hr />
        <p class="question-title-content">2.幼儿园有什么动物(多选)</p>
      </div>
    </div>

    <div class="question-container">
       <component v-bind:is="questionType"></component>
    </div>
  </div>

</div>
</template>

<script>

import MultiChoice from 'components/HomeWork/Question/MultiChoice.vue'
import Calculation from 'components/HomeWork/Question/Calculation.vue'
import ComprehensiveQuestion from 'components/HomeWork/Question/ComprehensiveQuestion.vue'
import DrawingQuestion from 'components/HomeWork/Question/DrawingQuestion.vue'
import FillInTheBlank from 'components/HomeWork/Question/FillInTheBlank.vue'
import Judgment from 'components/HomeWork/Question/Judgment.vue'
import ShortAnswer from 'components/HomeWork/Question/ShortAnswer.vue'
import SingleChoice from 'components/HomeWork/Question/SingleChoice.vue'

export default {
  components: {
    "MultiChoice" : MultiChoice,
    "Calculation" : Calculation,
    "ComprehensiveQuestion" : ComprehensiveQuestion,
    "DrawingQuestion" : DrawingQuestion,
    "FillInTheBlank" : FillInTheBlank,
    "Judgment" : Judgment,
    "ShortAnswer" : ShortAnswer,
    "SingleChoice" : SingleChoice
  },
  data () {
    return {
    	title:'古诗词欣赏课上练习',
      questionType: "MultiChoice"
    }
  },
  methods: {
    back: function () {

    }
  }
}
</script>

<style scoped>
.el-dropdown-menu {
  background: #49484A;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0.49px;
}

.el-dropdown-menu::before {
   content: "";
   width: 0;
   height: 0;
   border: 12px solid #49484A;
   border-color: transparent transparent #49484A transparent;
   position:absolute;
   top: -22px;
   right: 10px;
}

.content {
  margin-top: 85px;
  width: 100%;
  height: inherit;
}

.content-head {
   width: 100%;
   position: absolute;
   height: 30%;
   background-image: url('/static/img/assets/homework/repeat-x.png');
   background-repeat: repeat-x;
   background-size: contain;
}

.question-title-group {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 22px 0 32px 0;
  margin: 30px 32px 32px 32px;
}

.question-title-group > p {
  font-size: 20px;
  color: #36B991;
  line-height: 20px;
  text-align: center;
  margin: 0 auto;
}

.question-title-group > p.question-title-content {
  margin-top: 16px;
}

.question-title-group > hr {
  border: 1px solid #EAEAEA;
  margin-top: 16px;
  margin-top: 16px;
}

.question-container {
  width: 100%;
  top: 30%;
  height: 70%;
  position: absolute;
  padding-top: 105px;
}

</style>

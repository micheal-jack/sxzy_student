<template>
<div>
  <cui-navbar v-on:back="back" :title="title">
  </cui-navbar>
  <el-table :data="scheduleData" :show-header="true"
  stripe
  @cell-click="handleCellClick"
  @cell-mouse-enter="handleMouseEnter"
  @cell-mouse-leave="handleMouseLeave"
  @current-change="handleCurrentChange"
   style="top: 85px; width: 100%; height: 100%;">
    <el-table-column type="index" label="" header-align="center" width="75">
    </el-table-column>
    <el-table-column style="height: 88px;"  prop="day1" header-align="center" label="星期一">
       <template scope="scope">
         <p :class="{'schedule-cell': true,color1:matchColor(scope.row.day1,1),color2:matchColor(scope.row.day1,2),color3:matchColor(scope.row.day1,3),color4:matchColor(scope.row.day1,4),color5:matchColor(scope.row.day1,5),color6:matchColor(scope.row.day1,6)}">{{scope.row.day1}}</p>
       </template>
    </el-table-column>
    <el-table-column prop="day2" header-align="center"  label="星期二">
      <template scope="scope">
        <div :class="{'schedule-cell': true,color1:matchColor(scope.row.day2,1),color2:matchColor(scope.row.day2,2),color3:matchColor(scope.row.day2,3),color4:matchColor(scope.row.day2,4),color5:matchColor(scope.row.day2,5),color6:matchColor(scope.row.day2,6)}">{{scope.row.day2}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="day3" header-align="center"  label="星期三">
      <template scope="scope">
        <div :class="{'schedule-cell': true,color1:matchColor(scope.row.day3,1),color2:matchColor(scope.row.day3,2),color3:matchColor(scope.row.day3,3),color4:matchColor(scope.row.day3,4),color5:matchColor(scope.row.day3,5),color6:matchColor(scope.row.day3,6)}">{{scope.row.day3}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="day4" header-align="center"  label="星期四">
      <template scope="scope">
        <div :class="{'schedule-cell': true,color1:matchColor(scope.row.day4,1),color2:matchColor(scope.row.day4,2),color3:matchColor(scope.row.day4,3),color4:matchColor(scope.row.day4,4),color5:matchColor(scope.row.day4,5),color6:matchColor(scope.row.day4,6)}">{{scope.row.day4}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="day5" header-align="center"  label="星期五">
      <template scope="scope">
        <div :class="{'schedule-cell': true,color1:matchColor(scope.row.day5,1),color2:matchColor(scope.row.day5,2),color3:matchColor(scope.row.day5,3),color4:matchColor(scope.row.day5,4),color5:matchColor(scope.row.day5,5),color6:matchColor(scope.row.day5,6)}">{{scope.row.day5}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="day6" header-align="center"  label="星期六">
      <template scope="scope">
        <div :class="{'schedule-cell': true,color1:matchColor(scope.row.day6,1),color2:matchColor(scope.row.day6,2),color3:matchColor(scope.row.day6,3),color4:matchColor(scope.row.day6,4),color5:matchColor(scope.row.day6,5),color6:matchColor(scope.row.day6,6)}">{{scope.row.day6}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="day7" header-align="center"  label="星期日">
      <template scope="scope">
        <div :class="{'schedule-cell': true,color1:matchColor(scope.row.day7,1),color2:matchColor(scope.row.day7,2),color3:matchColor(scope.row.day7,3),color4:matchColor(scope.row.day7,4),color5:matchColor(scope.row.day7,5),color6:matchColor(scope.row.day7,6)}">{{scope.row.day7}}</div>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: '我的课表',
      cellColors: [
        {
          "语文": true
        },
        {
          "思想品德教育": true
        },
        {
          "美术": true
        },
        {
          "英语": true
        },
        {
          "数学": true
        },
        {
          "心理健康": true
        }
      ],
      matchColor: function (name,index) {
        let colorIndex = parseInt(index) - 1;
        if (colorIndex > -1 && colorIndex < this.cellColors.length) {
          if (this.cellColors[colorIndex].hasOwnProperty(name)) {
            return true;
          }
        }else {
          return false;
        }
      },
      scheduleData: [{
        day1: '语文',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }, {
        day1: '思想品德教育',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }, {
        day1: '英语',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }, {
        day1: '语文',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }, {
        day1: '语文',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }, {
        day1: '语文',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }, {
        day1: '语文',
        day2: '数学',
        day3: '英语',
        day4: '英语',
        day5: '英语',
        day6: '英语',
        day7: '英语'
      }]
    }
  },
  methods: {
    back: function() {

    },
    handleCurrentChange: function() {

    },
    handleCellClick: function () {

    },
    handleMouseEnter: function () {

    },
    handleMouseLeave: function () {

    }
  }
}
</script>

<style>

.cell {
  text-align: center;
}

.el-table th>.cell {
  word-wrap: normal;
  text-overflow: ellipsis;
  line-height: 85px;
  width: 100%;
  box-sizing: border-box;
  font-size: 24px;
}

 .schedule-cell {
   font-size: 20px;
   text-align: center;
   line-height: 28px;
   width: 100%;
   padding: 8px;
   word-wrap: break-word;
   vertical-align: middle;
 }

 .color1 {
   color: #12AFD8;
 }
 .color2 {
   color: #C57A00;
 }
 .color3 {
   color: #FF5A5F;
 }
 .color4 {
   color: #594993;
 }
 .color5 {
   color: #00A28D;
 }
 .color6 {
   color: #415E9D;
 }
</style>

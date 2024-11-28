<script setup lang="ts">
import { defineProps, defineEmits,computed } from "vue";
import {RefreshRight,MoreFilled,SuccessFilled}from "@element-plus/icons-vue"

const props = defineProps({
  tableData: Array, // 表格当前页数据
  total: Number, // 总条目数
  currentPage: Number, // 当前页码
  pageSize: Number, // 每页条数
});

const emits = defineEmits(["update:currentPage", "update:pageSize", "remove"]);

const handleRemove = (index: number) => emits("remove", index);
const handlePageChange = (page: number) => emits("update:currentPage", page);
const handleSizeChange = (size: number) => emits("update:pageSize", size);

// const buildStatusContentColor=computed(()=>{

// })

// 表格标题字段
interface ITableColumnFields{
  fielsd:ITableColumnField[]
}
interface ITableColumnField{
  prop:string
  label:string
}



</script>

<template>
  <div>
    <el-table :data="tableData" stripe height="85vh" style="width: 100%">
      <el-table-column type="index" />
      <el-table-column prop="id" label="任务编号" />
      <el-table-column prop="startDate" label="开始时间" />
      <el-table-column prop="finishDate" label="完成时间" />
      <el-table-column prop="convertUsecaseCount" label="转换用例数" />
      <el-table-column prop="usecaseSource" label="用例来源" />
      <el-table-column prop="targetPosition" label="目标位置" />
      <el-table-column label="生成状态">
        <template #default="scope">
          <!-- <el-button type="primary" size="small" text loading>{{scope.row.buildStatus}}</el-button> -->
          <!-- <el-icon><RefreshRight /></el-icon> -->
          <div class="buildStatusWrapper">
            <!-- todo： 根据 buildStatus 动态调整图标 -->
            <div class="buildStatusContent  --flex-center --buildStatus-color--executing" v-if='scope.row.buildStatus ==="执行中"'>
              <el-icon  class="is-loading " ><RefreshRight /></el-icon>
              <span>{{ scope.row.buildStatus }}</span>
            </div>
            <div class="buildStatusContent  --flex-center --buildStatus-color--waiting" v-else-if='scope.row.buildStatus ==="等待中"'>
              <el-icon ><MoreFilled /></el-icon>
              <span>{{ scope.row.buildStatus }}</span>
            </div>
            <div class="buildStatusContent  --flex-center --buildStatus-color--finished" v-else-if='scope.row.buildStatus ==="已完成"'>
              <el-icon ><SuccessFilled /></el-icon>
              <span>{{ scope.row.buildStatus }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" min-width="120">
        <template #default="scope">
          <el-button type="" @click="handleRemove(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[20, 40, 60, 80]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @current-change="handlePageChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-pagination .btn-prev) {
  margin-left: auto;
}
.buildStatusContent{
  justify-content: flex-start;
  // color:var(--buildStatus--waiting);
  .el-icon{
    margin-right:0.1rem ;
  }
}
</style>

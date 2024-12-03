<script setup lang="ts">
import { computed, ref } from "vue";
import {
  RefreshRight,
  MoreFilled,
  SuccessFilled,
  CircleClose,
} from "@element-plus/icons-vue";

// import type{ITableColumnFields} from "@/types"

const props = defineProps({
  tableData: Array, // 表格当前页数据
  total: Number, // 总条目数
  currentPage: Number, // 当前页码
  pageSize: Number, // 每页条数
  pageSizes: Array, //每页条数 选项
  waitingRowsLengthInAll: Number, //“等待中”数据总数
});

// const data=ref(props.tableData)

const emits = defineEmits([
  "update:currentPage",
  "update:pageSize",
  "remove",
  "update:index",
]);

const handleRemove = (index: number) => emits("remove", index);
const handlePageChange = (page: number) => {
  emits("update:currentPage", page);
};
const handleSizeChange = (size: number) => {
  emits("update:pageSize", size);
};

const handleCancel = (curPageIndex) => {};
const handleMoveUp = (curPageIndex) => {
  console.log("currentPage====", props.currentPage);

  const index = (props.currentPage - 1) * props.pageSize + curPageIndex;
  if (index > 0) {
    console.log("上移 index", index);
    const preIndex = index - 1;
    // 通知父组件更新数据
    emits("update:index", index, preIndex); // 通过事件将更新的数据传递给父组件
  }
};
const handleMoveDown = (curPageIndex) => {
  const index = (props.currentPage - 1) * props.pageSize + curPageIndex;
  const nextIndex = index + 1;
  if (props.waitingRowsLengthInAll - 1 >= nextIndex) {
    console.log("xia移 index", index);

    // 通知父组件更新数据
    emits("update:index", index, nextIndex); // 通过事件将更新的数据传递给父组件
  }
};
const handleStop = (curPageIndex) => {};
const handleStopToNext = (curPageIndex) => {};

// const buildStatusContentColor=computed(()=>{
// })

// const tableColumnFields:ITableColumnFields= ref([]);

// const operationsContent = {};
</script>

<template>
  <div>
    <!-- :default-sort="{ prop: 'buildStatus', order: 'descending' }" -->
    <el-table
      :data="tableData"
      stripe
      height="85vh"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column type="index" fixed />
      <el-table-column prop="id" label="任务编号" />
      <el-table-column prop="start" label="开始时间">
        <template #default="{ row }">
          <span :style="{ fontSize: '12px' }">{{ row.start }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="finish" label="完成时间">
        <template #default="{ row }">
          <span :style="{ fontSize: '12px' }">{{ row.finish }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="convertUsecaseCount"
        label="转换用例数"
        show-overflow-tooltip
      />
      <el-table-column
        prop="usecaseSource"
        label="用例来源"
        show-overflow-tooltip
      />
      <el-table-column
        prop="targetPosition"
        label="目标位置"
        show-overflow-tooltip
      />
      <!-- sortable -->
      <el-table-column prop="buildStatus" label="生成状态">
        <template #default="scope">
          <!-- <el-button type="primary" size="small" text loading>{{scope.row.buildStatus}}</el-button> -->
          <!-- <el-icon><RefreshRight /></el-icon> -->
          <div class="buildStatusWrapper">
            <!-- todo： 根据 buildStatus 动态调整图标 -->
            <div
              class="buildStatusContent --flex-center --buildStatus-color--executing"
              v-if="scope.row.buildStatus === '执行中'"
            >
              <el-icon class="is-loading --buildStatus-color--executing"
                ><RefreshRight
              /></el-icon>
              <span>{{ scope.row.buildStatus }}</span>
            </div>
            <div
              class="buildStatusContent --flex-center --buildStatus-color--waiting"
              v-else-if="scope.row.buildStatus === '等待中'"
            >
              <el-icon class="isWaiting --buildStatus-color--waiting"
                ><MoreFilled
              /></el-icon>
              <span>{{ scope.row.buildStatus }}</span>
            </div>
            <div
              class="buildStatusContent --flex-center --buildStatus-color--finished"
              v-else-if="scope.row.buildStatus === '已完成'"
            >
              <el-icon class="--buildStatus-color--finished"
                ><SuccessFilled
              /></el-icon>
              <span>{{ scope.row.buildStatus }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" min-width="100">
        <template #default="scope">
          <!-- todo： 根据 buildStatus 动态调整可执行操作 -->
          <div class="operationsWrapper">
            <!-- 等待中 -->
            <div
              class="operationsContent"
              v-if="scope.row.buildStatus === '等待中'"
            >
              <el-button
                link
                type="primary"
                size="small"
                @click="handleCancel(scope.$index)"
              >
                <!-- <el-icon><CircleClose /></el-icon> -->
                <img
                  src="../assets/cancel.svg"
                  class="cancel icon"
                  alt="cancel icon"
                  srcset=""
                />
                取消</el-button
              >
              <el-button
                link
                type="primary"
                size="small"
                :disabled="scope.$index ? false : true"
                @click="handleMoveUp(scope.$index)"
              >
                <img
                  src="../assets/moveUp.svg"
                  class="moveUp icon"
                  alt="moveUp icon"
                  srcset=""
                />
                上移</el-button
              >
              <el-button
                link
                type="primary"
                size="small"
                :disabled="
                  scope.$index ===
                  waitingRowsLengthInAll - (currentPage - 1) * pageSize - 1
                    ? true
                    : false
                "
                @click="handleMoveDown(scope.$index)"
              >
                <img
                  src="../assets/moveDown.svg"
                  class="moveDown icon"
                  alt="moveDown icon"
                  srcset=""
                />
                下移</el-button
              >
            </div>
            <!-- 执行中 -->
            <div
              class="operationsContent"
              v-if="scope.row.buildStatus === '执行中'"
            >
              <!-- <el-button
                link
                type="primary"
                size="small"
                @click="handleRemove(scope.$index)"
                >删除</el-button
              > -->
              <el-button
                link
                type="primary"
                size="small"
                @click="handleStop(scope.$index)"
              >
                <!-- <el-icon><VideoPause /></el-icon> -->
                <img
                  src="../assets/stop.svg"
                  class="stop icon"
                  alt="stop icon"
                  srcset=""
                />
                停止</el-button
              >
              <el-button
                link
                type="primary"
                size="small"
                @click="handleStopToNext(scope.$index)"
              >
                <img
                  src="../assets/next.svg"
                  class="next icon"
                  alt="next icon"
                  srcset=""
                />
                跳过并执行下一个</el-button
              >
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
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
.buildStatusContent {
  justify-content: flex-start;
  // color:var(--buildStatus--waiting);
  .el-icon {
    margin-right: 0.1rem;
    border-radius: 50%;
    color: white;
  }
  .--buildStatus-color--finished {
    color: #1dc872;
  }
  .is-loading {
    background-color: #409eff;
  }
  .isWaiting {
    background-color: #cdcdcd;
  }
  .isFinished {
    background-color: lightgreen;
  }
}
.operationsWrapper {
  .operationsContent {
    .el-button + .el-button {
      margin: auto;
      //  margin:0;
    }
  }
}
:deep(.el-button.is-link) {
  padding: 4px;
}
:deep(.el-table__body colgroup col:nth-child(3)) {
  font-size: 10px;
}
.icon {
  height: 1em;
  width: 1em;
  // color: var(--el-color-primary);//#409eff
}
</style>

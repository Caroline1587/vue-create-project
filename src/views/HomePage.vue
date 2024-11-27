<script setup lang="ts">
import { ComponentSize } from "element-plus";
import { ref } from "vue";
import { Timer, ArrowDown } from "@element-plus/icons-vue";

import TaskTable from "../components/TaskTable.vue";
import DynamicForm from "../components/DynamicForm.vue";

const tableData = ref([]); // 当前页数据
const total = ref(1000); // 总条目数
const currentPage = ref(1); // 当前页码
const pageSize = ref(20); // 每页条数

// const size = ref<ComponentSize>("default");//页码形状大小
// const background = ref(false);
// const disabled = ref(false);

// 模拟获取分页数据（可替换为真实的后端 API 调用）
const fetchTableData = (page: number, size: number) => {
  const allData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    startDate: `2024-11-${(index % 30) + 1}`,
    finishDate: `2025-11-${(index % 30) + 1}`,
    convertUsecaseCount: Math.floor(Math.random() * 100),
    usecaseSource: `source-${index + 1}`,
    targetPosition: `target-${index + 1}`,
    buildStatus: index % 2 === 0 ? "等待中" : "执行中",
    operation: ["删除", "下移"],
  }));
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  tableData.value = allData.slice(startIndex, endIndex);
};

// 初始化数据
fetchTableData(currentPage.value, pageSize.value);

// 页码变化处理
const handlePageChange = (page: number) => {
  currentPage.value = page;
  fetchTableData(page, pageSize.value);
};

// 每页条数变化处理
const handleSizeChange = (size: number) => {
  pageSize.value = size;
  currentPage.value = 1; // 重置页码
  fetchTableData(currentPage.value, pageSize.value);
};

// 删除某行数据
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1);
};

//
const dialogVisible = ref(false);
const dynamicForm = ref([]);
const createCommand = ref("");

const handleCommand = (command: string) => {
  dialogVisible.value = true;
  createCommand.value = `${command} 导入`;
  dynamicForm.value =
    command === "excel"
      ? [
          {
            label: "任务编号",
            key: "taskId",
            type: "input",
            placeholder: "请输入任务编号",
          },
          {
            label: "用例文件",
            key: "usecaseFile",
            type: "select",
            placeholder: "请选择任务文件",
            options: ["文件1", "文件3", "文件2"],
          },
          {
            label: "目标路径",
            key: "targetPath",
            type: "select",
            placeholder: "请选择目标路径",
            options: ["路径2", "路径1", "路径1"],
          },
        ]
      : [
          {
            label: "用例来源",
            key: "usecaseSource",
            type: "input",
            placeholder: "TPA",
            disabled: true,
          },
          {
            label: "项目名称",
            key: "usecaseSource",
            type: "select",
            placeholder: "请选择项目名称",
            options: ["项目3", "项目2", "项目1"],
          },
        ];
};
</script>

<template>
  <div class="home-warpper">
    <div class="header">
      <div class="header__title">任务记录</div>
      <div class="header__btn --flex-center">
        <!-- <el-button class="mt-4" type="primary" style="width:fit-content;" @click="onAddItem">
          Add Item
        </el-button> -->
        <el-dropdown @command="handleCommand" class="header__btn__create">
          <el-button type="primary">
            新建任务<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="excel"
                >EXCEL导入
                <!-- <el-button plain @click="dialogFormVisible = true">
                  Open a Form nested Dialog
                </el-button> -->
              </el-dropdown-item>
              <el-dropdown-item command="test-management">
                Test management导入
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button class="header__btn__monitor" type="primary">
          任务监控器
        </el-button>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" :title="createCommand">
      <DynamicForm :fields="dynamicForm" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>

    <TaskTable
      class="main"
      :table-data="tableData"
      :total="total"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      @remove="deleteRow"
    />
  </div>
</template>

<style lang="scss" scoped>
.home-warpper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: scroll;
  //   height: 100vh;
  //   width: 100vw;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;

    position: sticky;
    /* 吸顶效果 */
    top: 0;
    z-index: 100; /* 保证在其他内容之上 */

    .header__title {
      font-weight: bolder;
    }
    .header__btn {
      &__create {
        margin-right: 0.5rem;
        // .el-tooltip__trigger {
        //   text-align: center;
        // }
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 80%;
    overflow: scroll;
    width: 100%;
    :deep(.el-pagination) {
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      margin-top: 0.5rem;
    }
  }
}
</style>

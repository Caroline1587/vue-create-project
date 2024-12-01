<script setup lang="ts">
import { ComponentSize, ElMessageBox } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { Timer, ArrowDown } from "@element-plus/icons-vue";

import TaskTable from "../components/TaskTable.vue";
import DynamicForm from "../components/DynamicForm.vue";

// 模拟获取分页数据（可替换为真实的后端 API 调用）
const allData = ref(
  Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    startDate: `2024-11-${(index % 30) + 1}`,
    finishDate: `2025-11-${(index % 30) + 1}`,
    convertUsecaseCount: Math.floor(Math.random() * 100),
    usecaseSource: `source-${index + 1}`,
    targetPosition: `target-${index + 1}`,
    buildStatus: index % 2 === 0 ? "等待中" : "执行中",
    operation: ["删除", "下移"],
  }))
);
const fetchTableData = (page: number, size: number) => {
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  tableData.value = allData.value.slice(startIndex, endIndex);
};

//
const dialogVisible = ref(false);
// const innerVisible = ref(false);

const dynamicForm = ref([]);
const createCommand = ref("");

const handleCommand = (command: string) => {
  dialogVisible.value = true; //打开对话框
  createCommand.value = `${command} 导入`;

  const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }));

  const byExcelFields = [
    {
      label: "任务编号",
      key: "taskId",
      type: "input",
      placeholder: "请输入任务编号",
    },
    {
      label: "用例文件",
      key: "usecaseFile",
      // type: "select",
      type: "file",
      placeholder: "请选择任务文件",
      // options,
    },
    {
      label: "目标路径",
      key: "targetPath",
      // type: "select",
      type: "folder",
      placeholder: "请选择目标路径",
      // options,
    },
  ];
  const byTestManagementFields = [
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
      options,
    },
  ];
  dynamicForm.value =
    command === "excel" ? byExcelFields : byTestManagementFields;
};

//清空select下拉框的值
const clearOptionValue = () => {};

//关闭dialog对话框前的操作
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      clearOptionValue();
      done();
    })
    .catch(() => {
      // catch error
    });
};

const isConversionScopeShown = ref(false);

const formData = ref(null);
const hasChanged = (value: string | number | undefined | null) => {
  console.log("update方法之执行======", value);
  formData.value = value;
  console.log("formData======", formData.value);

  // console.log('update方法之执行======',typeof(value));
  if (value) isConversionScopeShown.value = true;
};

const tableData = ref([]); // 当前页数据
const total = ref(1000); // 总条目数
const currentPage = ref(1); // 当前页码
const pageSize = ref(20); // 每页条数
const pageSizes = ref([20, 40, 60, 80]);

// const size = ref<ComponentSize>("default");//页码形状大小
// const background = ref(false);
// const disabled = ref(false);
// 初始化数据
fetchTableData(currentPage.value, pageSize.value);

// 页码变化处理
const handlePageChange = (page: number) => {
  currentPage.value = page;
  console.log("cur page ", currentPage);
  console.log("page=====", page);

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
  allData.value.splice(index, 1);
  fetchTableData(currentPage.value, pageSize.value); //重新获取数据
};

const onConfirm = () => {
  dialogVisible.value = false; //关闭对话框
  //todo: 数据展示在table中
};
</script>

<template>
  <div class="home-warpper">
    <div class="header">
      <div class="header__title">任务记录</div>
      <div class="header__btn --flex-center">
        <!-- inert -->
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
        <el-button
          class="header__btn__monitor"
          type="primary"
          aria-label="任务监控器"
        >
          任务监控器
        </el-button>
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      :title="createCommand"
      :before-close="handleClose"
    >
      <DynamicForm
        :fields="dynamicForm"
        @update:modelValue="(modelValue) => hasChanged(modelValue)"
      >
        <!-- 插入动态内容 -->
        <template #selectExtra>
          <!-- && dynamicForm.find((item)=>item.key==='usecaseFile') -->
          <div
            v-if="isConversionScopeShown"
            class="innerConversionScope --flex-center"
          >
            <span class="innerConversionScope__title">转换范围</span>

            <el-card class="innerConversionScope__content">
              <template #header>
                <div class="card-header --flex-center">
                  <span class="card-header__page">sheet 页</span>
                  <span class="card-header__range">编号范围</span>
                </div>
              </template>
              <div
                class="card__content --flex-center"
                v-for="(range, index) in formData.ranges"
                :key="index"
              >
                <div class="card__content__page">
                  {{ range.sheetName }}
                </div>
                <div class="card__content__range">
                  {{ range.range }}
                </div>
              </div>

              <template #footer>Footer content</template>
            </el-card>
          </div>
        </template>
      </DynamicForm>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="onConfirm"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>

    <TaskTable
      class="main"
      :table-data="tableData"
      :total="total"
      :pageSizes="pageSizes"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      @remove="deleteRow"
      @update:currentPage="(page: number) => handlePageChange(page)"
      @update:pageSize="(size:number)=>handleSizeChange(size)"
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;

    // position: sticky;
    // /* 吸顶效果 */
    // top: 0;
    // z-index: 100; /* 保证在其他内容之上 */

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
  .innerConversionScope {
    // height: 200px;
    margin-bottom: 18px;
    &__content {
      flex: 1;
      max-width: 100%;
      max-height: 200px;
      overflow-y: auto;
    }
    &__title {
      box-sizing: border-box;
      width: 120px;
      text-align: end;
      align-self: first baseline;
      padding: 0 12px 0 0;
    }

    .card-header,
    .card__content {
      &__page,
      &__range {
        text-align: left;
      }
      &__page {
        flex: 1;
      }
      &__range {
        flex: 2;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 80%;
    // overflow: scroll;
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

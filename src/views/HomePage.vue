<script setup lang="ts">
import { ComponentSize, ElMessageBox } from "element-plus";
import { computed, onMounted, provide, reactive, ref } from "vue";
import { Timer, ArrowDown } from "@element-plus/icons-vue";
import dayjs from "dayjs";
import { useTaskStore } from "@/stores/task";

import {
  fetchTaskData,
  createTask,
  cancelTask,
  cancelAllTask,
  moveUpByTaskId,
  moveDownByTaskId,
  fetchTargetPath,
  getProjectsLinkStatus,
  getLinkedSequencesByTpaId,
} from "@/api/task";
import TaskTable from "@/views/components/TaskTable.vue";
import DynamicForm from "@/views/dialogContent/DynamicForm.vue";
import TpaUsecaseImport from "@/views/dialogContent/TpaUsecaseImport.vue";
import { ITask, ParamsToCreateTask } from "@/types";

export interface ITaskInTable extends ITask {
  operations?: string[] | null;
}
const taskStore = useTaskStore();

const allTask = ref<ITask[]>([]);
//todo: 异步获取数据并赋值
async function fetchAllTableData() {
  try {
    const data = await fetchTaskData(); //获取所有任务数据
    if (Array.isArray(data)) {
      allTask.value = data;
      console.log('allTask===fetchAllTableData',allTask);
    } else {
      console.error("Invalid data format: expected an array.");
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// const isUpdated=ref(false)
fetchAllTableData();
// onMounted(()=>{
//   fetchAllTableData();
//   fetchTableData(currentPage.value,pageSize.value)
// })

const length = computed(() => sortedAllTableData.value.length);
const total = ref(length); // 总条目数
const currentPage = ref(1); // 当前页码
const pageSize = ref(20); // 每页条数
const pageSizes = ref([20, 40, 60, 80]);
// const size = ref<ComponentSize>("default");//页码形状大小
// const background = ref(false);
// const disabled = ref(false);


//不同状态对应的操作选项
const waitingOperations = ref(["取消", "上移", "下移"]);
const inProgressOperations = ref(["停止当前"]);
// 分离并按状态分组, 同时添加对应操作
const waitingRows = computed(() =>
  allTask.value
    .filter((task: ITask) => task.generate_status === 0)
    .map((task: ITask) => ({
      ...task,
      operations: waitingOperations,
    }))
);
const inProgressRows = computed(() =>
  allTask.value
    .filter((task: ITask) => task.generate_status === 1)
    .map((task: ITask) => ({
      ...task,
      operations: inProgressOperations,
    }))
); //
const completedRows = computed(() =>
  allTask.value.filter((task: ITask) => task.generate_status === 2)
);
const cancelledRows = computed(() =>
  allTask.value.filter((task: ITask) => task.generate_status === 3)
);

const waitingRowsLengthInAll = computed(() => waitingRows.value.length);

// 合并按状态排序后的行
const sortedAllTableData = computed(() => {
  console.log("waitingRows", waitingRows.value);
  console.log("inProgressRows", inProgressRows.value);
  return [
    ...waitingRows.value,
    ...inProgressRows.value,
    ...completedRows.value,
    ...cancelledRows.value,
  ];
});



// let startIndex = ref((currentPage.value - 1) * pageSize.value);
// let startIndex = computed(()=>(currentPage.value - 1) * pageSize.value);
// let endIndex = computed(()=> (startIndex.value + pageSize.value));
// let endIndex = ref(startIndex.value + pageSize.value);
const tableData=ref([])
// const tableData=computed(()=>{
//   sortedAllTableData.value.slice(startIndex.value, endIndex.value)
// })

//获取当前页表格数据
const fetchTableData = (page: number, size: number) => {
  // console.log('sortedAllTableData.value.',sortedAllTableData.value);
  // currentPage.value=page;
  // pageSize.value=size;
   let startIndex = (page - 1) * size;
   let endIndex = startIndex + size;
  tableData.value = sortedAllTableData.value.slice(startIndex, endIndex);
  console.log('startIndex, endIndex',startIndex, endIndex);
  console.log('sortedAllTableData',sortedAllTableData.value);
  
  console.log('sortedAllTableData.value.slice(startIndex, endIndex);',sortedAllTableData.value.slice(startIndex, endIndex));
};


// const testManagementVisible = ref(false);


// onMounted(()=>{
//   fetchAllTableData();//初始化
// })
function mySetInterval(fn,fn1,timeout) {
  // 控制器，控制定时器是否继续执行
  var intervalController = {
    flag: true,
    stop: function() {
      this.flag = false;
    }
  };
  
  // 设置递归函数，模拟定时器执行
  function interval() {
    if (intervalController.flag) {
      fn();
      fn1(currentPage.value,pageSize.value);
      console.log('timer执行====');
      
      setTimeout(interval, timeout); // 继续调用自己
    }
  }

  // 启动定时器
  setTimeout(interval, timeout);

  // 返回控制器，并提供停止定时器的方法
  return intervalController;
}
// 启动定时器

const controller = mySetInterval(fetchAllTableData,fetchTableData,1000);

// // 停止定时器的调用（10秒后停止定时器）
// setTimeout(() => {
//   controller.stop(); // 停止定时器
// }, 10000);




// 模拟获取分页数据（可替换为真实的后端 API 调用）
//0-等待中 1-执行中 2-已完成 3-已取消
const allTaskMock = ref(
  Array.from({ length: 100 }, (_, index) => ({
    id: `A0${index + 1}`,
    case_number: "20",
    create_time: `2024-11-${(index % 30) + 1} 00:00:00`,
    finish_time: `2025-11-${(index % 30) + 1} 00:00:00`,
    converted_case_num: Math.floor(Math.random() * 100),
    case_source: Math.random() > 0.5 ? 1 : 2,
    order_index: index + 1,
    target_location: `target-${index + 1}`,
    generate_status: index % 2 === 0 ? 0 : 1,
    operations: ["删除", "下移"],
  }))
);

// allTask.value = allTaskMock.value;


// const tableData = ref<ITaskInTable[]>([]); // 当前页数据
  // const tableData =computed(()=>{
  //   return sortedAllTableData.value.slice(startIndex, endIndex);
  // })


const dynamicForm = ref([]);

const importDialog = ref<HTMLElement | null>(null);
const importDialogVisible = ref(false);
const commandTitle = ref("");
const case_source = ref(0);

//下拉框提供不同引入选项
const handleCommand = (command: string) => {
  importDialogVisible.value = true; //打开对话框
  removeInert(importDialog.value);
  commandTitle.value = command;
  if (command == "excel") case_source.value = 1;
  else case_source.value = 2;

  // 模拟数据：
  // const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  // const options = Array.from({ length: 1000 }).map((_, idx) => ({
  //   value: `Option ${idx + 1}`,
  //   label: `${initials[idx % 10]}${idx}`,
  // }));


  const options=ref([])

  //todo: 获取目标路径options

  const byExcelFields = [
    {
      label: "任务编号",
      value: "case_number",
      type: "input",
      placeholder: "请输入任务编号",
    },
    {
      label: "用例文件",
      value: "excelPath", //case_source:1
      // type: "select",
      type: "file",
      placeholder: "请选择任务文件",
      // options,
    },
    {
      label: "目标路径",
      value: "target_location",
      type: "select",
      placeholder: "请选择目标路径",
      options, //点击下拉框时获取
    },
  ];
  const byTestManagementFields = [
    {
      label: "用例来源",
      value: "linkedIdList", //case_source=2
      type: "input",
      placeholder: "TPA",
      disabled: true,
    },
    {
      label: "项目名称",
      value: "projectName", //link...
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

const setInert = (element: HTMLElement | null) => {
  if (element && element instanceof HTMLElement)
    element.setAttribute("inert", ""); //禁止交互
};
const removeInert = (element: HTMLElement | null) => {
  if (element && element instanceof HTMLElement)
    element.removeAttribute("inert"); //交互
};

//关闭dialog对话框前的操作
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      clearOptionValue();
      setInert(importDialog.value);
      done();
    })
    .catch(() => {
      // catch error
    });
};

const isConversionScopeShown = ref(false);

const formData = ref(null);

const onSourceFileSelect = (
  formVal: { [key: string]: string | object } | null
) => {
  formData.value = formVal;
  console.log("formData======", formData.value);
  if (formData.value.excelPath) isConversionScopeShown.value = true;
};

const targetLocation=ref('')
const onOptionSelect = (option: string) => {
  console.log("目标文件目录 选择", option);
  targetLocation.value=option;
};

// 初始化数据
onMounted(() => fetchTableData(currentPage.value, pageSize.value));

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
  allTask.value.splice(index, 1);
  fetchTableData(currentPage.value, pageSize.value); //重新获取数据
};


const handleUpdate=()=>{
  fetchAllTableData()//更新数据
  fetchTableData(currentPage.value, pageSize.value);
}
//todo：调用接口======== 上移下移操作：更改index
const handleIndexUpdate = (curIndex:number,changedIndex:number) => {

  // console.log("父组件接受的index", curIndex);

  handleUpdate();
  // 交换当前项和上/下一项

  //依据id
  //todo: moveUpByTaskId(task_id)
  //      moveDownByTaskId(task_id)

  // const temp = allTask.value[curIndex];
  // allTask.value[curIndex] = allTask.value[changedIndex];
  // allTask.value[changedIndex] = temp;
  // console.log("allTask", allTask.value);
  // console.log("allTask.value[curIndex]",allTask.value[curIndex]);
  // console.log("allTask.value[changedIndex]",allTask.value[changedIndex]);


    // 使用 splice 交换
    // allTask.value.splice(curIndex, 1, allTask.value[changedIndex]);
    // allTask.value.splice(changedIndex, 1, temp);

  // console.log("index ,changing index",curIndex,changedIndex);

};

// const isClearForm=ref(false);

//excel: 确认关闭对话框前：记录并保存form数据
async function getCreateRes(params: ParamsToCreateTask) {
  let res = await createTask(params);

  // console.log("创建成功时返回的数据",res);

  // if (res) await fetchAllTableData();
}
//excel-确认导入
const onConfirm = () => {
  importDialogVisible.value = false; //关闭对话框
  setInert(importDialog.value);
  //todo: 数据展示在table中
  //todo:创建新任务======createTask(params)
  //- excel:
  const params: ParamsToCreateTask = {
    case_number: formData.value.taskId,
    converted_case_num: formData.value.converted_case_num,
    target_location: formData.value.target_location,
    case_source: formData.value.case_source, //1
    other_info:
      formData.value.case_source === 1
        ? { excelPath: formData.value.excelPath }
        : { linkedIdList: [""] },
  };
  console.log("formdata====", formData.value);

  console.log("params===", params);
  const res = getCreateRes(params);
  // const id = res[0].id;
  console.log("创建成功时返回的数据", res); //[{"id":1}]
  // const create_time = dayjs().format("YYYY-MM-DD HH:mm:ss"); //返回当前时间
  // const finish_time = dayjs().endOf("month").format("YYYY-MM-DD HH:mm:ss"); //todo:完成时间
  // console.log("date===========", create_time);
  // const converted_case_num = formData.value.converted_case_num;
  // const case_source = formData.value.case_source;
  // const target_location = formData.value.target_location; //todo
  // const generate_status = 2; //todo
  // const operations = [""];
  // const id = formData.value.taskId;
  // const order_index = 111;
  // const newTask = {
  //   id,
  //   create_time,
  //   finish_time,
  //   converted_case_num,
  //   case_source,
  //   order_index,
  //   target_location,
  //   generate_status,
  //   operations,
  // };

  // allTask.value.push(newTask);
  // console.log("allTask===", allTask);

  // console.log("each====", newTask);
  console.log("currentPage===", currentPage.value);

  fetchTableData(currentPage.value, pageSize.value);
  //todo: 当前对话框数据清空
  // isClearForm.value=true;
  // provide('isClearForm',true);
};

//2. test management导入
const testManagementVisible = ref(false);
const testManagementDialog = ref<HTMLElement | null>(null);
const onNext = () => {
  console.log("next ");
  testManagementVisible.value = true; //打开下一个对话框
  removeInert(testManagementDialog.value);
};

const handleCloseTestManagement = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      setInert(testManagementDialog.value);
      done();
    })
    .catch(() => {
      // catch error
    });
};

//todo：停止所有任务
const onStopAll = () => {
  cancelAllTask();
};

const selectedRowsInTae = ref([]);
const caseNumberContainer=ref([]);
const count=ref<number>(0);

const caseNumberProduct=()=>{
    caseNumberContainer.value.push(`TASK-${count}`);
    count.value=count.value+1;
}

//todo: tae导入的数据 加入
const onConfirmTAEImport = () => {
  testManagementVisible.value = false; //关闭当前窗口；
  setInert(testManagementDialog.value);

  importDialogVisible.value = false; //关闭项目选项窗口；
  setInert(importDialog.value);

 const ids=selectedRowsInTae.value.map((row)=>row.id);
 console.log('ids  in homepage',ids);
 console.log("form data in home",formData.value);


 //每条usecase为一个任务
selectedRowsInTae.value.forEach((row,index)=>{
  const params: ParamsToCreateTask = {
    case_number: `TASK-${index}`,//formData.value.taskId,
    converted_case_num: 1,//formData.value.converted_case_num,//
    target_location: formData.value.target_location,//
    case_source: formData.value.case_source, //2
    other_info:
      formData.value.case_source === 1
        ? { excelPath: formData.value.excelPath }
        : { linkedIdList: [row.id] },
  };
  getCreateRes(params);
  console.log('params====',params);
})

  // console.log("res=====",res);

  // const id = res[0].id;/

  //targetLocation
  // //todo=====加入table中: selectedRowsInTae
  console.log("selectedRowsInTae.value", ...selectedRowsInTae.value);

  fetchAllTableData();//获取所有数据

  // const dealtData = selectedRowsInTae.value.map((row) => {
  //   const create_time = dayjs().format("YYYY-MM-DD HH:mm:ss"); //返回当前时间
  //   const finish_time = dayjs().endOf("month").format("YYYY-MM-DD HH:mm:ss"); //todo:完成时间
  //   const converted_case_num = 9999;
  //   const case_source = "tae====";
  //   const target_location = targetLocation.value; //todo
  //   const generate_status = 2; //todo
  //   const operations = [""];
  //   const order_index = 888;
  //   const { id, testcaseNumber } = row;
  //   return {
  //     id,
  //     create_time,
  //     finish_time,
  //     converted_case_num,
  //     case_source,
  //     order_index,
  //     target_location,
  //     generate_status,
  //     operations,
  //   };
  // });

  // console.log(dealtData);

  // allTask.value = [...allTask.value, ...dealtData];

  fetchTableData(currentPage.value, pageSize.value); //刷新
};

const onSelectedRows = (selectedRows) => {
  console.log("selectedRows in homepage===", selectedRows);
  selectedRowsInTae.value = selectedRows;
};

const onCancel=(case_number: string)=>{
  console.log("case_number in homepage cancel",case_number);
//  let changedRow= allTask.value.findIndex((task)=>{
//     return task.case_number==case_number;
//   })

//   console.log('allTask',allTask.value);
//   console.log('changedRow',changedRow);
//   allTask.value[changedRow].generate_status=3
//   // cancelTask()
}
</script>

<template>
  <div class="home-warpper" id="home">
    <div class="header">
      <div class="header__left --flex-center">
        <img src="../assets/bigAIIcon.svg" alt="ai logo" class="header__icon" />
        <div class="header__title">任务记录</div>
      </div>

      <div class="header__btn --flex-center">
        <!-- inert -->
        <el-dropdown @command="handleCommand" class="header__btn__create">
          <el-button type="primary">
            新建任务<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- 注释：暂时取消 EXCEL导入-->
              <!-- <el-dropdown-item command="excel">EXCEL导入 </el-dropdown-item> -->
              <el-dropdown-item command="test-management">
                Test management导入
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button
          class="header__btn__monitor"
          type="danger"
          aria-label="停止所有"
          @click="onStopAll"
        >
          停止所有
        </el-button>
      </div>
    </div>
    <el-dialog
      v-model="importDialogVisible"
      :title="`${commandTitle} 导入`"
      :before-close="handleClose"
      v-if="importDialogVisible"
      ref="importDialog"
    >
      <!-- :isClearForm="isClearForm" -->
      <DynamicForm
        :fields="dynamicForm"
        @update:formDataValue="(formData) => onSourceFileSelect(formData)"
        @update:selectedOption="(option) => onOptionSelect(option)"
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
          <el-button
            @click="
              () => {
                importDialogVisible = false;
                setInert(importDialog.value);
              }
            "
            >Cancel</el-button
          >
          <el-button
            v-if="commandTitle === 'excel'"
            type="primary"
            @click="onConfirm"
          >
            Confirm
          </el-button>
          <el-button
            v-else-if="commandTitle === 'test-management'"
            type="primary"
            @click="onNext"
          >
            next
          </el-button>
        </div>
      </template>
    </el-dialog>

    <!-- test management导入框：树形结构 -->
    <el-dialog
      ref="testManagementDialog"
      class="tpe-usecase-import"
      v-model="testManagementVisible"
      title="新建任务"
      modal-class="usecase-modal"
      :before-close="handleCloseTestManagement"
    >
      <template #header="{}">
        <div class="my-header">
          <div class="rectangle"></div>
          <div class="title">新建任务</div>
        </div>
      </template>
      <TpaUsecaseImport @update:selectedRows="onSelectedRows" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="testManagementVisible = false">Cancel</el-button>
          <el-button type="primary" @click="onConfirmTAEImport"> Ok </el-button>
        </div>
      </template>
    </el-dialog>

    <TaskTable
      class="main"
      :table-data="tableData"
      :total="total"
      :pageSizes="pageSizes"
      :waitingRowsLengthInAll="waitingRowsLengthInAll"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      @remove="deleteRow"
      @update:cancel="(id:string)=>onCancel(id)"
      @update:index="handleIndexUpdate"
      @update:all="handleUpdate"
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
    height: 40px;
    .header__left {
      .header__icon {
        width: 50px;
      }
      .header__title {
        font-weight: bolder;
      }
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
  :deep(.el-overlay .el-overlay-dialog) {
    // width: fit-content; //1600px
    min-height: 400px; //880px
    // overflow: visible;
    // top: 100px;
    // left: 160px;
    gap: 0px;
    // opacity: 0;
    .my-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 172px;
      height: 29px;
      box-sizing: border-box;
      gap: 8px;
      opacity: 0px;

      .rectangle {
        width: 3px;
        height: 17px;
        gap: 0px;
        opacity: 0px;
        background: #5a78ff;
      }
      .title {
        width: 118px;
        height: 29px;
        gap: 0px;
        opacity: 0px;
        color: #283a64;
        font-family: Noto Sans SC;
        font-size: 16px;
        font-weight: 700;
        line-height: 28.96px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
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
:deep(.tpe-usecase-import) {
  width: fit-content;
}
</style>

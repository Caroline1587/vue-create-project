<script setup lang="ts">
import { ref } from 'vue'
import { Timer,ArrowDown } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import Modal from '../components/Model.vue'


// import dayjs from 'dayjs'

// const now = new Date()

defineProps<{ msg: string }>()


export interface IRecord {
  id: string
  startDate: string
  finishDate: string
  convertUsecaseCount: number
  usecaseSource: string
  targetPosition: string
  buildStatus: string
  operation: string[]
}

const pageSize4 = ref(20);
const currentPage4 = ref(1);
const tableData = ref<IRecord[]>([
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '等待中', operation: ['取消', '下移'] },
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '执行中', operation: ['取消', '下移'] },
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '等待中', operation: ['取消', '下移'] },
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '已完成', operation: ['取消', '下移'] },
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '已完成', operation: ['取消', '下移'] },
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '等待中', operation: ['取消', '下移'] },
  { id: '23232', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '已完成', operation: ['取消', '下移'] },
]);

// const count = ref(0)

// const onAddItem = () => {
//   let newItem = { id: '11111', startDate: '2016-05-03 17:12:00', finishDate: '2026-05-03 17:12:00', convertUsecaseCount: 100, usecaseSource: 'd/work/cc', targetPosition: 'd/work/cc', buildStatus: '等待中', operation: ['取消', '下移'] }

//   tableData.value.push(newItem)
// }

const method=ref('');

const handleCommand = (command: string | number | object) => {
  method.value=command;
  ElMessage(`click on item ${command}`)
 
}

const formatter = (row: IRecord, column: TableColumnCtx<IRecord>) => {
  return row.operation
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header_title">任务记录</div>
      <div class="header_btn">
        <!-- <el-button class="mt-4" type="primary" style="width:fit-content;" @click="onAddItem">
          Add Item
        </el-button> -->
        <el-dropdown  @command="handleCommand">
          <el-button type="primary">
            Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="excel">EXCEL导入</el-dropdown-item>
              <el-dropdown-item command="test-management">Test management导入</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

    <div class="content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" width="40" />

        <el-table-column prop="id" label="任务编号" width="100" />
        <el-table-column prop="startDate" label="开始时间" width="180" />
        <el-table-column prop="finishDate" label="完成时间" width="180" />
        <el-table-column prop="convertUsecaseCount" label="转换用例数" width="120" />
        <el-table-column prop="usecaseSource" label="用例来源" width="180" />
        <el-table-column prop="targetPosition" label="目标位置" width="180" />
        <!-- <el-table-column prop="buildStatus" label="生成状态" sortable width="150"> -->
        <el-table-column label="生成状态" sortable width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon>
                <timer />
              </el-icon>
              <span style="margin-left: 10px">{{ scope.row.buildStatus }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="operations" fixed="right" label="操作" min-width="120" :formatter="formatter">
          <template #default="scope">
            <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
              Remove
            </el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <div class="demo-pagination-block">
      <!-- <div class=s"demonstration">All combined</div> -->
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[20, 40, 60, 80]"
        :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="2340" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>

  </div>
  <Modal :method="method.value"/>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    // justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    &_title,
    &_btn {
      align-self: center;
    }

    &_btn {
      .example-showcase .el-dropdown+.el-dropdown {
        margin-left: 15px;
      }
      .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
    }
  }

  .content {
    max-width: 100%;
    flex: 1;
  }

  .demo-pagination-block {
    // flex: 1;
    height: fit-content;
    align-self: flex-end;
  }
}

.read-the-docs {
  color: #888;
}
</style>

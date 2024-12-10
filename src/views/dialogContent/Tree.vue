<template>
  <div class="allContainer">
    <div class="treeContainer">
      <el-input v-model="filterText" placeholder="Filter keyword" />
      <!-- :load="loadNode"
        lazy -->
      <el-tree
        ref="treeRef"
        :props="defaultProps"
        :data="treeData"
        show-checkbox
        node-key="id"
        :default-expanded-keys="currentNodeExpand"
        :default-checked-keys="currentNodeChecked"
        :expand-on-click-node="expandOnClickNode"
        :auto-expand-parent="autoExpandParent"
        :highlight-current="true"
        :filter-node-method="filterNode"
       
        @check-change="handleCheckChange"
        @node-click="nodeClick"
        @node-expand="nodeExpand"
        @node-collapse="nodeCollapse"
      >
      </el-tree>
    </div>
    <div class="tableContainer">
      <el-table
        ref="tableRef"
        :data="tableData"
        style="width: 100%"
        max-height="60vh"
        border
        @selection-change="handleSelectionChange"
      >
        <!-- 表格的多选框 -->
        <el-table-column type="selection" width="50px" fixed />
        <!-- 数据列 -->
        <el-table-column
          v-for="column in columns"
          :key="column.prop"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          sortable
        />
      </el-table>
    </div>
  </div>
</template>
<script setup lang="ts">
// import TreeInput from "./TreeInput.vue"; // 如果有自定义的输入组件
import { ElTree } from "element-plus";
import type Node from "element-plus/es/components/tree/src/model/node";
import {  ref, watch, defineEmits } from "vue";
import { getLinkedSequencesByTpaId } from "@/api";
import { ILinkedSequence, ITestcase, ITestcaseInfo } from "@/types";
import {useDebounce} from "@/hooks"
const props=defineProps<{linkedId:string}>();
const linkedId=ref(props.linkedId)

interface TreeNodeData {
  id: string; //id
  name: string; //name
  childrenList: TreeNodeData[]; //childrenList
  hasChildren: boolean; // //hasChildren用于标记是否是叶节点
  testcaseList: ITestcase[];
  isPenultimate?: boolean;
}
// 树形节点的属性配置
const defaultProps = {
  label: "name",
  children: "childrenList",
  isLeaf: "hasChildren",
};

// 表格数据与列配置
const tableData = ref<ILinkedSequence[]>([]);

interface TableColumn {
  label: string;
  prop: string;
  width?: string;
  minWidth?: string;
}

const columns = ref<TableColumn[]>([
  {
    prop: "testcaseNumber",
    label: "用例编号",
    minWidth: "20%",
    width: "160px",
  },
  { prop: "testcaseName", label: "用例名称", minWidth: "60%" },
  { prop: "priority", label: "优先级", minWidth: "10%", width: "100px" },
]);

// 树的节点展开和选择相关的状态
const expandOnClickNode = ref(true);
const autoExpandParent = ref(true);
const currentNodeExpand = ref<string[]>([]); //["r2"]; // 例如默认展开 id 为 r2 的节点
const currentNodeChecked = ref<string[]>([]);
const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();

const debounceFilter = useDebounce(filterText,1000);
watch(debounceFilter,(newVal)=>{
  if(newVal){
    treeRef.value?.filter(newVal);//调用 Tree 实例对象的 filter 方法来过滤树节点。 方法的参数就是过滤关键字
  }
});
//过滤函数:  树节点的筛选
const filterNode = (inputValue: string, data: TreeNodeData) => {
  if (!inputValue) return true;
  const normalizedValue = inputValue.trim().toLowerCase();
  return data.name.toLowerCase().includes(normalizedValue);
};


// ====== todo：懒加载子数据,仅当 lazy 属性为true 时生效
// let count = 1;
// let time = 0;
// const loadNode = (
//   node: Node,
//   resolve: (data: TreeNodeData[]) => void,
//   reject: () => void
// ) => {
//   if (node.level === 0) {
//     return resolve();
//   }
//   time++;
//   if (node.level > 3) return resolve([]);
//   //生成数据
//   setTimeout(() => {
//     // if (time < 2) return reject(); //模拟加载失败，调用 reject 以保持节点状态，并允许远程加载继续
//     let data: TreeNodeData[] = [];

//     resolve(data); //返回给下一层的数据
//   }, 500);
// };

const treeData = ref<TreeNodeData[]>([]);
const allData = ref([]);

const selectedNodes = ref<TreeNodeData[]>([]); // 用于存储选中节点的数据
const expandedNodes = ref<TreeNodeData[]>([]); // 用于存储zhankai节点的数据

//依据选中的节点更新表格数据
const updateTableData = () => {
  // 表格数据是与树节点的某些数据有关
  const selectedTestcases =selectedNodes.value.flatMap(
    (node: TreeNodeData) =>
      node.testcaseList?.map(
        (testcase: { testcaseInfo: ITestcaseInfo }) => testcase.testcaseInfo
      ) || []
  );
  tableData.value = selectedTestcases;
  // selectTableRows(selectedTestcases)
};
const tableRef = ref();

// 选择表格行
const selectTableRows=(testcaseInfos) =>{
  if (!tableRef.value) return;
  console.log('tableRef',tableRef);
  // 清除当前的选中状态
  tableRef.value.clearSelection();
}


// 选中节点的回调
const handleCheckChange = async (
  checkNode: TreeNodeData,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log("handleCheckChange", checkNode, checked, indeterminate);
  if (checked) {
    // 如果节点被选中，加入到选中节点列表
    if (!selectedNodes.value.includes(checkNode)) {
      selectedNodes.value.push(checkNode);
    }

    // if (checkNode.testcaseList && checkNode.testcaseList.length > 0) {
    //   // 如果当前节点有 testcases，展示它们
    //   tableData.value = checkNode.testcaseList.map(
    //     (testcase: { testcaseInfo: ITestcaseInfo }) => testcase.testcaseInfo
    //   );
    //   //todo：选中这些testcases
    //   console.log('todo：选中这些testcases',tableData.value);
    //   tableRef.value.toggleAllSelection();

    // } else {
    //   // 如果需要调用后端接口，可以在这里添加
    //   // fetchTestcaseList(data.id).then((response) => {
    //   //   tableData.value = response.data.map((testcase) => testcase.testcaseInfo);
    //   // });
    // }

    // ======todo: 根据节点 ID 请求后端数据 async
    //
    // const {childrenList,hasChildren,id,name,testcaseList} = await getLinkedSequencesByTpaId();
    // const response = {
    //   data: [
    //     { number: "aw1", name: "知道，前方无目标车", priority: "低" },
    //     { number: "aw2", name: "知道，前方无目标车", priority: "高" },
    //     { number: "aw3", name: "知道，前方无目标车", priority: "低" },
    //     { number: "aw34", name: "知道，前方无目标车", priority: "高" },
    //     { number: "aw34", name: "知道，前方无目标车", priority: "高" },
    //     { number: "aw34", name: "知道，前方无目标车", priority: "高" },
    //     { number: "aw34", name: "知道，前方无目标车", priority: "高" },
    //     { number: "aw34", name: "知道，前方无目标车", priority: "高" },
    //     { number: "aw34", name: "知道，前方无目标车", priority: "高" },
    //   ],
    // };
    // tableData.value = response; // 返回的数据是数组
  } else {
    // 如果节点取消选中，从选中节点列表移除
    selectedNodes.value = selectedNodes.value.filter(
      (node: TreeNodeData) => node !== checkNode
    );
  }

  tableRef.value.toggleAllSelection();

  // 更新 tableData
  updateTableData();
};

//展开、选择当前节点de其子节点
const checkChildren = (data: TreeNodeData[]) => {
  data.forEach((each) => {
    // if (!currentNodeChecked.value.includes(each.id)) {
    //   currentNodeChecked.value.push(each.id); // 记录选中节点的 ID
    //   //加入选中结点 列表
    //   if (!selectedNodes.value.includes(each)) {
    //     selectedNodes.value.push(each);
    //   }
    // }
    if (!currentNodeExpand.value.includes(each.id)) {
      currentNodeExpand.value.push(each.id); // 记录展开节点的 ID
       //加入zhankai 结点 列表
      if (!expandedNodes.value.includes(each)) {
        expandedNodes.value.push(each);
      }
    }

    // 如果当前节点不是叶子节点，递归处理其子节点
    if (each.hasChildren && each.childrenList && each.childrenList.length > 0) {
      checkChildren(each.childrenList);
    }
  });
};


//linkedId
//获取全部数据
(async () => {
  const res = await getLinkedSequencesByTpaId(linkedId);
  const data= res;

  allData.value =data;
  treeData.value = data;

  console.log("selectedNodes", selectedNodes.value);

  //展开及选中第一项及其子项
  currentNodeExpand.value.push(data[0].id);
  // currentNodeChecked.value.push(data[0].id);
  checkChildren(data[0].childrenList);

  updateTableData();
})();

interface IEmits {
  (e: "update:selectedRows", value: any): void;
  (e: "update:selectedRowsLength", value: any): void;
}
const emits = defineEmits<IEmits>();

// 记录选择的表格行
const selectedRows = ref<ITestcase[]>([]);
const selectedRowsLenth=ref(0);

const handleSelectionChange = (rows: any) => {
  selectedRows.value = rows;
  selectedRowsLenth.value=rows.length;
  console.log("当前选择的行:", selectedRows.value);

  emits("update:selectedRows", selectedRows.value);
  emits("update:selectedRowsLength", selectedRowsLenth.value);
};

const nodeClick = (data: TreeNodeData, node: Node) => {
  console.log("节点点击:", data, node);
  // 根据点击的树节点，更新表格的数据
  updateTableData(data);
};

const nodeExpand = (data: TreeNodeData, node: Node) => {
  console.log("节点展开:", data, node);
};
const nodeCollapse = (data: TreeNodeData, node: Node) => {
  console.log("节点折叠:", data, node);
};

const handleCancel = (node: Node) => {
  // 处理取消编辑操作
  console.log("编辑取消:", node);
};
const handleSave = (node: Node, newData: TreeNodeData) => {
  // 处理保存编辑的操作
  console.log("编辑保存:", node, newData);
};
</script>

<style lang="scss" scoped>
.allContainer {
  width: 100%;
  display: flex;

  .treeContainer {
    display: flex;
    flex-direction: column;
    flex: 2;
  }
  .tableContainer {
    flex: 8;
    overflow: auto;
    // max-width: 800px;
    max-height: 100%;
    :deep(.el-table__header-wrapper) {
      // min-width: 220px;
    }
  }
}

// .tree_node {
//   cursor: pointer;
// }

// .tree_node.is-current {
//   color: #409eff;
// }
</style>

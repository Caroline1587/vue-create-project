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
          :data="tableData"
          style="width: 100%"
          max-height="50vh"
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
// import type { TreeNodeData } from "element-plus/es/components/tree/src/tree.type";
import { ref, watch } from "vue";
import {getLinkedSequencesByTpaId} from "@/api"

interface TreeNodeData {
  id: string;//id
  label: string;//name
  children?: TreeNodeData[];//childrenList
  leaf?: boolean;// //hasChildren用于标记是否是叶节点
  isPenultimate?: boolean;
}
// 树形节点的属性配置
const defaultProps = {
  label: "label",
  children: "children",
  isLeaf: "leaf",
};

// 表格数据与列配置
const tableData = ref([]);

interface TableColumn {
  label: string;
  prop: string;
  width?: string;
  minWidth?: string;
}

const columns = ref<TableColumn[]>([
  { prop: "testcaseNumber", label: "用例编号", minWidth: "20%", width: "160px" },
  { prop: "testcaseName", label: "用例名称", minWidth: "60%" },
  { prop: "priority", label: "优先级", minWidth: "10%", width: "100px" },
]);

// 树的节点展开和选择相关的状态
const expandOnClickNode = ref(true);
const autoExpandParent = ref(true);
const currentNodeExpand = ref<string[]>(['07e09902fcb64b8e8cad7097a9ff5051']);//["r2"]; // 例如默认展开 id 为 r2 的节点
const currentNodeChecked= ref<string[]>(['07e09902fcb64b8e8cad7097a9ff5051']);
const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();

watch(filterText, (val) => {
  treeRef.value!.filter(val); //调用 Tree 实例对象的 filter 方法来过滤树节点。 方法的参数就是过滤关键字
  console.log(treeRef.value);
});
//过滤函数:  树节点的筛选
const filterNode = (inputValue: string, data: TreeNodeData) => {
  if (!inputValue) return true;
  const normalizedValue = inputValue.trim().toLowerCase();
  return data.label.toLowerCase().includes(normalizedValue);
};

//====== todo：filter防抖
// const debounceFilter = useDebounce((val: string) => {
//   treeRef.value?.filter(val);
// }, 300);
// watch(filterText, debounceFilter);

// let count = 1;
// let time = 0;
// ====== todo：懒加载子数据,仅当 lazy 属性为true 时生效
// const loadNode = (
//   node: Node,
//   resolve: (data: Tree[]) => void,
//   reject: () => void
// ) => {
//   if (node.level === 0) {
//     return resolve([
//       { label: "Root1", id: "r1" },
//       { label: "Root2", id: "r2" },
//     ]);
//   }
//   time++;
//   if (node.level > 3) return resolve([]);
//   //生成数据
//   let hasChild = false;
//   if (node.data.label === "Root1") {
//     hasChild = true;
//   } else if (node.data.label === "Root2") {
//     hasChild = false;
//   } else {
//     hasChild = Math.random() > 0.5;
//   }
//   setTimeout(() => {
//     // if (time < 2) return reject(); //模拟加载失败，调用 reject 以保持节点状态，并允许远程加载继续
//     let data: Tree[] = [];
//     if (hasChild) {
//       data = [
//         {
//           label: `zone${count++}`,
//           id: `r-zone${count++}`,
//         },
//         {
//           label: `zone${count++}`,
//           id: `r-zone${count++}`,
//         },
//       ];
//     } else {
//       data = [];
//     }
//     resolve(data); //返回给下一层的数据
//   }, 500);
// };

// 静态树数据

// const mockData=[
//   {
//     id: "node1",
//     label: "Node 1",
//     children: [{ id: "node1-1", label: "Node 1-1" }],
//   },
//   { id: "node2", label: "Node 2" },
// ]

const treeData = ref<TreeNodeData[]>([]);

const allData=ref([])
(async () => {
  const {childrenList,hasChildren,id,name,testcaseList}=await getLinkedSequencesByTpaId();
  
// interface TreeNodeData {
//   id: string;//id
//   label: string;//name
//   children?: TreeNodeData[];//childrenList
//   leaf?: boolean;// //hasChildren用于标记是否是叶节点
//   isPenultimate?: boolean;
// }
  
  const data={
    id,
    label:name,
    children:childrenList,
    leaf:!hasChildren,
  }
  allData.value=data;

})()//获取全部数据

// 选中节点的回调
const handleCheckChange = (
  data: TreeNodeData,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log("handleCheckChange", data, checked, indeterminate);
  if (checked) {
    console.log("选中节点:", data);
    // ======todo: 根据节点 ID 请求后端数据 async
    //getLinkedSequencesByTpaId
    // const response = await axios.get(`/api/data/${data.id}`);
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
    tableData.value = response.data; // 假设后端返回的数据是数组
  }
};

// 记录选择的表格行
const selectedRows = ref([]);
const handleSelectionChange = (rows: any[]) => {
  selectedRows.value = rows;
  console.log("当前选择的行:", selectedRows.value);
};

// const treeData: TreeNodeData[] = [
//   {
//     id: "l1",
//     label: "Level one 1",
//     children: [
//       {
//         id: "l1-1",
//         label: "Level two 1-1",
//         children: [
//           {
//             id: "l1-1-1",
//             label: "Level three 1-1-1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "l2",
//     label: "Level one 2",
//     children: [
//       {
//         id: "l2-1",
//         label: "Level two 2-1",
//         children: [
//           {
//             id: "l2-1-1",
//             label: "Level three 2-1-1",
//           },
//         ],
//       },
//       {
//         id: "l2-2",
//         label: "Level two 2-2",
//         children: [
//           {
//             id: "l2-2-1",
//             label: "Level three 2-2-1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "l3",
//     label: "Level one 3",
//     children: [
//       {
//         id: "l3-1",
//         label: "Level two 3-1",
//         children: [
//           {
//             id: "l3-1-1",
//             label: "Level three 3-1-1",
//           },
//         ],
//       },
//       {
//         id: "l3-2",
//         label: "Level two 3-2",
//         children: [
//           {
//             id: "l3-2-1",
//             label: "Level three 3-2-1",
//           },
//         ],
//       },
//     ],
//   },
// ];

// 当前展开的节点（通过节点 id 控制展开）

 // 更新表格数据

 const updateTableData = (node: TreeNodeData) => {
    // 这里假设表格数据是与树节点的某些数据有关
    tableData.value = node.children || [];
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

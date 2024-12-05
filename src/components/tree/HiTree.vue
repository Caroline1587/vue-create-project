<template>
  <el-popover
    ref="tooltipRef"
    v-model:visible="visible"
    trigger="focus"
    enterable
    :offset="5"
    placement="bottom"
    :popper-options="{
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            adaptive: false,
            enabled: false,
          },
        },
      ],
    }"
    :virtual-ref="buttonRef"
    virtual-triggering
    popper-class="folderMenu"
    @after-leave="handleTree"
  >
    <ul class="folderMenuList">
      <li
        v-for="item in treeMenuData"
        :key="item.cmd"
        :disabled="
          currentNode?.level === item.flag ||
          !props.role[item.roleLabel] ||
          currentNodeData?.isFullPermission === 0
        "
        @click="changeCurrentCmd(item.cmd, currentNode?.level === item.flag)"
      >
        {{ item.label }}
      </li>
      <slot
        name="customMenu"
        :node="currentNode"
        :change-current-cmd="changeCurrentCmd"
      ></slot>
    </ul>
  </el-popover>
  <el-tree
    ref="treeRef"
    class="custom-tree"
    node-key="id"
    highlight-current
    :default-expand-all="false"
    v-bind="$attrs"
    :filter-node-method="filterNode"
    :expand-on-click-node="false"
    :data="props.treeData"
    :props="defaultProps"
    :default-expanded-keys="currentNodeExpand"
    :auto-expand-parent="false"
    @node-click="nodeClick"
    @node-expand="nodeExpand"
    @node-collapse="nodeCollapse"
  >
    <template #default="{ node, data }">
      <span
        v-if="!data.edit"
        class="tree_node"
        :style="node.isCurrent ? 'color:var(--el-color-primary)' : ''"
        @contextmenu.stop.prevent="nodeContextMenu($event, data, node)"
      >
        <slot name="customLabel" :node="node"></slot>
      </span>
      <span v-else class="tree_node">
        <TreeInput
          ref="treeInputRef"
          :tree-label="treeLabel"
          @cancel="cancel"
          @save="saveFolder"
        />
      </span>
    </template>
  </el-tree>
</template>

<script setup lang="ts">
import { ElTree } from "element-plus";
import { errorMessage } from "../utils/message";
import TreeInput from "./TreeInput.vue";
import { computed, nextTick, ref, watch } from "vue";
// const { t } = useI18n()
const props = withDefaults(
  defineProps<{
    folderExpand: boolean;
    treeData: any;
    defaultProps: any;
    filterText?: string;
    role: {
      enableFolderAdd: boolean;
      enableFolderEdit: boolean;
      enableFolderDelete: boolean;
    };
  }>(),
  {
    filterText: () => {
      return "";
    },
  }
);
const emits = defineEmits([
  "deleteNode",
  "checkNode",
  "nodeClick",
  "exportOrImport",
]);
// 树形节点数据
const currentNodeData = ref();
const currentNode = ref();

// 树形结构数据
const treeRef = ref<InstanceType<typeof ElTree>>();
const customNodeClass = (data: any) => {
  if (data.highlight) {
    return "is-filter";
  }
  return "";
};
const defaultProps = computed(() => {
  return {
    ...props.defaultProps,
    class: customNodeClass,
  };
});
const filterNode = (value: string, data: any, node: any) => {
  if (!value) {
    node.data.highlight = false;
  } else if (node.label?.includes(value)) {
    node.data.highlight = true;
  } else {
    node.data.highlight = false;
  }
  return true;
};
watch(
  () => props.filterText,
  (val) => {
    treeRef.value?.filter(val);
  }
);

// 树形节点操作菜单
const visible = ref(false);
const buttonRef = ref();
const tooltipRef = ref();
const treeMenuData = ref([
  {
    // label: t('xinJianZiWenJianJia'),
    label: "xinJianZiWenJianJia",
    cmd: "addFolder",
    flag: 10,
    roleLabel: "enableFolderAdd",
  },
  {
    // label: t('zhongMingMingWenJianJia'),
    label: "zhongMingMingWenJianJia",
    cmd: "editFolder",
    flag: 1,
    roleLabel: "enableFolderEdit",
  },
  {
    // label: t('shanChuWenJianJia'),
    label: "shanChuWenJianJia",
    cmd: "deleteFolder",
    flag: 1,
    roleLabel: "enableFolderDelete",
  },
]);
const nodeClick = (data: any, node: any) => {
  if (data.id !== "-1") {
    currentNodeData.value = data;
    currentNode.value = node;
    emits("nodeClick", data, node);
  }
};
const nodeExpand = (data: any, node: any) => {
  node.expanded = true;
  currentNodeExpand.value.push(data.id);
};
const nodeCollapse = (data: any, node: any) => {
  node.expanded = false;
  currentNodeExpand.value.splice(currentNodeExpand.value.indexOf(data.id), 1);
};
const nodeContextMenu = (event: any, data: any, node: any) => {
  if (data.id !== "-1") {
    currentCmd.value = "";
    currentNodeData.value = data;
    currentNode.value = node;
    buttonRef.value = event.currentTarget;
    visible.value = !visible.value;
  }
};
const currentCmd = ref("");
const changeCurrentCmd = (val: string, disabled: boolean) => {
  if (!disabled) {
    currentCmd.value = val;
    visible.value = false;
  }
};
// 控制树形节点展开与否
const currentNodeExpand = ref<string[]>([]);
// 输入框树形节点
let oldName = "";
const treeInputRef = ref();
const treeLabel = ref("");
const handleTree1 = (tempCmd: string, node: any) => {
  let key = node;
  currentCmd.value = tempCmd;
  currentNode.value = treeRef.value?.getNode(key);
  currentNodeData.value = currentNode.value.data;
  handleTree();
};
const handleTree = () => {
  let key = currentNodeData.value.id;
  currentNode.value = treeRef.value?.getNode(key);
  let cmd = currentCmd.value;
  if (cmd === "addFolder") {
    if (currentNode.value.level >= 10) {
      // errorMessage(t('wenJianJiaCengJiShenDuXianZhiZuiDaWei_10CengDangQianJieDianWuFaXinJianZiJieDian'))
      errorMessage(
        "wenJianJiaCengJiShenDuXianZhiZuiDaWei_10CengDangQianJieDianWuFaXinJianZiJieDian"
      );
      return;
    }
    const newChild = { id: "-1", label: "", children: [], edit: true };
    treeLabel.value = "";
    if (!currentNode.value.data.childrenList) {
      currentNode.value.data.childrenList = [];
    }
    treeRef.value?.append(newChild, key);
    // 处理节点关闭的情况
    if (!currentNode.value.expanded) {
      currentNode.value.expanded = true;
      currentNodeExpand.value.push(key);
      nextTick(() => {
        // 等待树形结构展开
        nextTick(() => {
          treeInputRef.value.input.focus();
        });
      });
    }
  } else if (cmd === "editFolder") {
    treeLabel.value = currentNode.value.label;
    oldName = treeLabel.value;
    currentNode.value.data.edit = true;
  } else if (cmd === "deleteFolder") {
    emits("deleteNode", currentNodeData.value);
  } else {
    emits("exportOrImport", cmd);
  }
};
const cancel = () => {
  let node: any = treeRef.value?.getNode("-1");
  treeRef.value?.remove(node);
  nextTick(() => {
    // 保持父节点高亮
    treeRef.value?.setCurrentKey(currentNodeData.value.id);
    emits("nodeClick", currentNodeData.value);
  });
};
const saveFolder = async (newFolderName: string, input: any) => {
  if (currentCmd.value === "editFolder" && oldName === newFolderName) {
    currentNode.value.data.edit = false;
    oldName = "";
    return;
  }
  let parentId =
    currentCmd.value === "editFolder"
      ? currentNodeData.value.parentId
      : currentNodeData.value.id;
  emits(
    "checkNode",
    parentId,
    newFolderName,
    currentCmd.value,
    input,
    currentNodeData.value
  );
};
// 控制树形节点是否全部展开
const expandAllTreeNode = (val: boolean) => {
  let nodes = treeRef.value?.store.nodesMap;
  if (nodes) {
    if (val) {
      currentNodeExpand.value = Object.keys(nodes);
    } else {
      currentNodeExpand.value = [props.treeData[0].id];
    }
    Object.keys(nodes).forEach((item) => {
      if (nodes && nodes[item]) {
        nodes[item].expanded = false;
      }
    });
    currentNodeExpand.value.forEach((item) => {
      if (nodes && nodes[item]) {
        nodes[item].expanded = true;
      }
    });
  }
};
watch(
  () => props.treeData,
  (newValue, oldValue) => {
    if (newValue.length > 0 && oldValue.length === 0) {
      nextTick(() => {
        // 默认展开全部的节点
        expandAllTreeNode(true);
      });
    }
  }
);

watch(
  () => props.folderExpand,
  (newValue) => {
    expandAllTreeNode(newValue);
  }
);
defineExpose({
  treeRef,
  currentNodeData,
  nodeClick,
  handleTree: handleTree1,
});
</script>
<style lang="scss" scoped>
.el-tree {
  font-size: 0;
  display: inline-block;
  min-width: 100%;
  :deep(.el-icon) {
    font-size: 12px;
  }
  :deep(.el-tree-node__children) {
    min-width: 100%;
    display: inline-block;
  }
  :deep(.el-tree-node__label) {
    width: 100%;
    padding: 0 5px 0 0;
    height: 100%;
  }
  .tree_node {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    position: relative;
    font-size: 14px;
    > span {
      display: flex;
      align-items: center;
      .el-icon {
        margin-right: 4px;
      }
    }
    .el-input {
      height: 100%;
    }
  }
}
</style>

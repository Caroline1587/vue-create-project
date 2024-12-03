<template>
  <el-tree
    ref="treeRef"
    :data="treeData"
    :props="defaultProps"
    :load="loadNode"
    lazy
    show-checkbox
    :highlight-current="true"
    :expand-on-click-node="false"
    :default-expanded-keys="currentNodeExpand"
    :auto-expand-parent="false"
    @check-change="handleCheckChange"
    @node-click="nodeClick"
    @node-expand="nodeExpand"
    @node-collapse="nodeCollapse"
  >
    <!-- 自定义节点显示 -->
    <template #default="{ node, data }">
      <span
        v-if="!data.edit"
        :class="['tree_node', { 'is-current': node.isCurrent }]"
      >
        {{ data.label }}
      </span>
      <!-- <TreeInput
        v-else
        :node="node"
        :data="data"
        @cancel="handleCancel"
        @save="handleSave"
      /> -->
    </template>
  </el-tree>
</template>

<script setup lang="ts">
import TreeInput from './TreeInput.vue'; // 如果有自定义的输入组件
import type Node from 'element-plus/es/components/tree/src/model/node'


interface Tree {
  // id:number
  label: string
  children?: Tree[]
  leaf?: boolean
}    

const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate)
}
let count = 1
let time = 0
const loadNode = (node: Node, resolve: (data: Tree[]) => void,reject: () => void) => {
  if (node.level === 0) {
    return resolve([{ label: 'Root1' }, { label: 'Root2' }])
  }
  time++
  if (node.level > 3) return resolve([])

  let hasChild = false
  if (node.data.label === 'region1') {
    hasChild = true
  } else if (node.data.label === 'region2') {
    hasChild = false
  } else {
    hasChild = Math.random() > 0.5
  }
 

  //
  setTimeout(() => {
    if(time < 2) return reject()
    let data: Tree[] = []
    if (hasChild) {
      data = [
        {
          label: `zone${count++}`,
        },
        {
          label: `zone${count++}`,
        },
      ]
    } else {
      data = []
    }

    resolve(data)
  }, 500)
}

// 树的数据
    const treeData:Tree[]= [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
    // 树形节点的属性配置
    const  defaultProps= {
      children: 'children',
      label: 'label',
    }
      // 当前展开的节点（通过节点 id 控制展开）
    const currentNodeExpand= [1]// 例如默认展开 id 为 1 的节点
    const nodeClick=(data:Tree, node) =>{
      console.log('节点点击:', data, node);
      // 这里可以添加更多的逻辑，例如改变样式或执行其他操作
    }
    const nodeExpand=(data:Tree, node)=> {
      console.log('节点展开:', data, node);
    }
    const nodeCollapse=(data:Tree, node) => {
      console.log('节点折叠:', data, node);
    }
    const handleCancel=(node:Tree)=>  {
      // 处理取消编辑操作
      console.log('编辑取消:', node);
    }
    const handleSave=(node:Tree, newData)=>  {
      // 处理保存编辑的操作
      console.log('编辑保存:', node, newData);
    }
</script>

<style lang="scss" scoped>
.tree_node {
  cursor: pointer;
}

.tree_node.is-current {
  color: #409eff;
}
</style>

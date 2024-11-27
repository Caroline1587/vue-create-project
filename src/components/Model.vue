
<script setup lang="ts">
import { ref, onMounted,defineProps } from 'vue'
// 1. 创建弹框对象
// 通过 ref 获取 modal 元素

// 引入 Bootstrap 的类型定义
declare global {
    interface Window {
        bootstrap: any
    }
}
const props=defineProps()

const modal = ref<HTMLElement | null>(null)
const task = ref<HTMLInputElement | null>(null)
let bootstrapModal: any = null

// 在组件挂载时初始化 Modal
onMounted(() => {
    // // 使用 window.bootstrap 来访问 Modal 类
    // const bootstrapModal = new (window as any).bootstrap.Modal(modal.value);
    // // 将 Modal 绑定到 ref
    // modal.value = bootstrapModal

    if (modal.value) {
        bootstrapModal = new (window as any).bootstrap.Modal(modal.value)
        // modal.value = bootstrapModal
    }
})

// // 显示 Modal 的方法
// const showModal = () => {
//     if (modal.value) {
//         modal.value.show()
//     }
// }
// 显示 Modal 的方法
const showModal = () => {
  if (bootstrapModal) {
    bootstrapModal.show()
  }
}

// 保存按钮点击事件，获取用户名并打印
const saveTask = () => {
    if (task.value) {
        const taskVal = task.value.value
        console.log('保存的任务:', taskVal)
        if (bootstrapModal) {
          bootstrapModal.hide()
        }
    }
}

// 点击 EXCEL 导入按钮时触发显示 modal
const create = () => {
    showModal()
}

</script>

<template>
    <button type="button" ref="modal" class="btn btn-primary edit-btn" @click="create">
        EXCEL导入（props）
    </button>

    <!-- Modal 模态框 -->
    <div ref="modal" class="modal task-box" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">EXCEL导入.{{ method }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <span>任务编号</span>
                        <input type="text" class="taskId">
                        <span>任务编号</span>
                        <input type="text" class="taskId">
                        <span>任务编号</span>
                        <input type="text" class="taskId">
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary save-btn" @click="saveTask">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss"></style>
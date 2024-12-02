<script setup lang="ts">
import { ref, onMounted} from "vue";
import { Modal } from "bootstrap";

// 定义接收的 props
defineProps({
  method: {
    type: String,
    required: true, // 必传
  },
});

// 通过 ref 获取 modal 元素
const modal = ref<HTMLElement | null>(null);
const task = ref<HTMLInputElement | null>(null);
let bootstrapModal: Modal | null = null;

// 在组件挂载时初始化 Modal
onMounted(() => {
  if (modal.value) {
    bootstrapModal = new Modal(modal.value); // 初始化 Modal
  }
});

// 显示 Modal 的方法
const showModal = () => {
  if (bootstrapModal) {
    // 移除 inert 属性，允许交互
    modal.value.removeAttribute("inert");

    bootstrapModal.show();
  }
};
// 隐藏 Modal 的方法
const hideModal = () => {
  if (bootstrapModal) {
    // 添加 inert 属性，禁用交互
    modal.value.setAttribute("inert", "");

    bootstrapModal.hide();
  }
};
// 暴露方法供父组件调用
defineExpose({
  showModal,
  hideModal,
});

// 保存按钮点击事件，获取用户名并打印
const saveTask = () => {
  if (task.value) {
    const taskVal = task.value.value;
    console.log("保存的任务:", taskVal);
    hideModal();
  }
};

// // 点击 EXCEL 导入按钮时触发显示 modal
// const create = () => {
//     showModal()
// }
</script>

<template>
  <!-- <button type="button" ref="modal" class="btn btn-primary edit-btn" @click="create">
        EXCEL导入（props）
    </button> -->

  <!-- Modal 模态框 -->
  <div ref="modal" class="modal task-box" tabindex="-1" inert>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">EXCEL导入===={{ method }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <span>任务编号</span>
            <input type="text" class="taskId" />
            <span>任务编号</span>
            <input type="text" class="taskId" />
            <span>任务编号</span>
            <input type="text" class="taskId" />
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary save-btn"
            @click="saveTask"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<template>
  <span class="tree_node">
	<!-- :placeholder="t('qingShuRuMingCheng')" -->
    <el-input
      ref="input"
      v-model="newFolder"
      @keyup.enter="finishInput"
      @blur="inputBlur"
	  :placeholder="ph"
    />
  </span>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted } from 'vue'
const ph="qingShuRuMingCheng";
// const { t } = useI18n()
const props = withDefaults(
	defineProps<{
		treeLabel: string
	}>(),
	{}
)
const emits = defineEmits(['save', 'cancel'])
const newFolder = ref('')
const finishInput = () => {
	input.value.blur()
}
const inputBlur = () => {
	if (newFolder.value === '') {
		// 空字符串取消本次添加
		emits('cancel')
	} else {
		emits('save', newFolder.value, input)
	}
}
const input = ref()
onMounted(() => {
	newFolder.value = props.treeLabel
	input.value.focus()
})
defineExpose({
	input
})
</script>
<style
  lang='scss'
  scoped
>
	.el-input {
		height: 100%;
		:deep(.el-input__inner){
			height: 100%;
		}
	}
</style>

<!-- DynamicForm.vue -->
<template>
  <el-form :model="formData" label-width="120px">
       <!-- 遍历字段，渲染el-form-item -->
    <template v-for="(field, index) in fields" :key="index">
  
      <el-form-item
            :label="field.label"
          >
            <el-input
              v-if="field.type === 'input'"
              v-model="formData[field.key]"
              :placeholder="field.placeholder"
              :disabled="field?.disabled"
            />
            <!-- <el-input
              type="textarea"
              v-if="field.type === 'textarea'"
              v-model="formData[field.key]"
              :placeholder="field.placeholder"
            /> -->
            <el-select-v2
              v-if="field.type === 'select'"
              v-model="formData[field.key]"
              :placeholder="field.placeholder"
              :options="field.options"
              @change="(value:string|number)=>emits('update:modelValue',value)"
            >
              <!-- <el-option
                v-for="option in field.options"
                :key="option"
                :label="option"
                :value="option"
              /> -->
            </el-select-v2>

      </el-form-item>
        <!-- 如果当前字段是usecaseFile，后面显示插槽内容 -->
      <template v-if="field.key === 'usecaseFile'">
        <slot name="selectExtra"></slot>
      </template>
      
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  fields: Array,
});
// const emits = defineEmits(["update"]);
interface IEmits{
  (e:"update:modelValue",value?:string|number):void
  (e:"inputClick"):void
}
const emits=defineEmits<IEmits>()

const formData = reactive({});
</script>

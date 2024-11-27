<!-- DynamicForm.vue -->
<template>
  <el-form :model="formData" label-width="120px">
    <el-form-item
      v-for="(field, index) in fields"
      :key="index"
      :label="field.label"
    >
      <el-input
        v-if="field.type === 'input'"
        v-model="formData[field.key]"
        :placeholder="field.placeholder"
      />
      <el-input
        type="textarea"
        v-if="field.type === 'textarea'"
        v-model="formData[field.key]"
        :placeholder="field.placeholder"
      />
      <el-select
        v-if="field.type === 'select'"
        v-model="formData[field.key]"
        :placeholder="field.placeholder"
      >
        <el-option
          v-for="option in field.options"
          :key="option"
          :label="option"
          :value="option"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  fields: Array,
});
const emits = defineEmits(["update"]);

const formData = reactive({});
</script>

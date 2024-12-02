<!-- DynamicForm.vue -->
<template>
  <el-form :model="formData" label-width="120px">
    <!-- 遍历字段，渲染el-form-item -->
    <template v-for="(field, index) in fields" :key="index">
      <el-form-item :label="field.label">
        <el-input
          v-if="field.type === 'input'"
          v-model="formData[field.key]"
          :placeholder="field.placeholder"
          :disabled="field?.disabled"
        />
        <!-- <el-upload
          v-if="field.type === 'file'"
          v-model="formData[field.key]"
          :placeholder="field.placeholder"
          :disabled="field?.disabled"
          @change="handleFileSelect"
          :key="formData[field.key]"
        /> -->

        <div
          v-else-if="field.type === 'file' && field.key === 'usecaseFile'"
          class="el-form-item__content el-input el-input__wrapper --flex-center"
          tabindex="-1"
        >
          <label for="file_uploads" class="input-file-label">
            {{ selectedFile ? selectedFile : field.placeholder }}</label
          >

          <!-- v-if="field.type === 'file'" -->
          <!-- :value="formData[field.key]" -->
          <input
            type="file"
            id="file_uploads"
            class="el-input__inner input-file-self"
            @change="handleFileSelect"
            accept=".xlsx,.xls"
          />
        </div>

        <div
          v-else-if="field.type === 'folder'"
          class="el-form-item__content el-input el-input__wrapper --flex-center"
          tabindex="-1"
        >
          <label for="folder_uploads" class="input-file-label">
            {{ selectedFolder ? selectedFolder : field.placeholder }}</label
          >
          <input
            type="file"
            id="folder_uploads"
            class="el-input__inner input-file-self"
            @change="handleFolderSelect"
            webkitdirectory
          />
        </div>
        <!-- style="opacity: 0" -->
        <!-- v-model="formData[field.key]" -->
        <!-- <el-input
          v-else-if="field.type === 'folder'"
          type="file"
          :placeholder="field.placeholder"
          webkitdirectory
          directory
          @change="handleFolderChange"
        >
        </el-input> -->

        <el-select-v2
          v-else-if="field.type === 'select'"
          v-model="formData[field.key]"
          :placeholder="field.placeholder"
          :options="field.options"
          @change="handleChange"
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

      <!-- 显示解析的编号范围 -->
      <!-- <el-form-item label="编号范围"> -->
      <!-- {{ formData.ranges }} -->
      <!-- <el-input v-model="formData.ranges" placeholder="编号范围" disabled /> -->
      <!-- </el-form-item> -->
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { computed, inject, reactive, ref, watch } from "vue";
import * as XLSX from "xlsx";
import dayjs from 'dayjs'


// import type{IBuildStatus }from "@/types"
import { BuildStatus } from "../config";

const props = defineProps({
  fields: Array,
  // isClearForm:Boolean
});
// const emits = defineEmits(["update"]);
interface IEmits {
  (e: "resetFormData"): void;
  (e: "update:modelValue", value?: string | number): void;
  (e: "inputClick"): void;
}
const emits = defineEmits<IEmits>();

// 触发清空的标志
// const formCleared = ref(false);
// watch(()=>props.isClearForm,(newItem, oldItem) => {
//     if (newItem) {
//       console.log('数据项发生变化:', newItem);
//       // 清空 formData 内容
//       Object.keys(formData).forEach(key => {
//       if (Array.isArray(formData[key])) {
//         formData[key] = []; // 清空数组字段
//       } else {
//         formData[key] = ''; // 清空非数组字段
//       }
//     });
//     emits('resetFormData')
//     formCleared.value = true; // 更新状态，表示表单已清空
//     } else {
//       console.log('该项已删除');
//     }
//   },
//   { deep: true, immediate: true } // 深度监听，立即执行
// )


// let isClear=ref(false);
// isClear.value=inject("clearForm");
// 用来存储解析后的文件数据
const formData = reactive({
  ranges: [], // 假设我们要提取“编号范围”数据并显示
  convertUsecaseCount:0,//
});

export interface ISheetRange {
  sheetName: String;
  range: String;
}
// const formData = reactive({});
// enum BuildStatus {
//   Waiting,
//   Execting,
//   Finished,
// }

const handleFolderSelect = () => {
  console.log("folder select");
};

const selectedFile = ref<String | null>(null);
const selectedFolder = ref<String | null>(null);

// 上传前的钩子，检查文件类型
// const beforeUpload = (file: File) => {
//   const isExcel = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel';
//   if (!isExcel) {
//     this.$message.error('只能上传 Excel 文件');
//   }
//   return isExcel;  // 返回 false 将会阻止文件上传
// };

// 处理文件选择
const handleFileSelect = (event: Event) => {
  // console.log("File selection triggered");
  const inputElement = event.target as HTMLInputElement;
  console.log("input element value:===", inputElement.value);
  selectedFile.value = inputElement.value;

  if (!inputElement || !inputElement.files) {
    console.error("No files selected");
    return;
  }
  formData["usecaseFile"] = inputElement.value;

  const file = inputElement.files[0]; // 获取选中的文件
  if (!file) {
    console.error("No file selected");
    return;
  }
  console.log("Selected file:", file);

  let count=0;
  // 使用 FileReader 读取文件
  const reader = new FileReader();
  // 绑定事件
  reader.onload = (e) => {
    const data = e.target?.result;
    if (!data) return;

    // 使用 xlsx 库解析 Excel 文件
    const workbook = XLSX.read(data, { type: "array" });

    // 解析每个 sheet 的数据
    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonSheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      console.log(`Sheet ${sheetName}:`, jsonSheetData);

      // 查找“编号范围”列的索引
      const headerRow = jsonSheetData[0];
      const rangeColumnIndex = headerRow.indexOf("编号范围"); // 查找“编号范围”列
      if (rangeColumnIndex !== -1) {
        // 提取“编号范围”列的所有数据
        const ranges = jsonSheetData
          .slice(1)
          .map((row) => row[rangeColumnIndex]);
        console.log(`编号范围 in ${sheetName}:`, ranges);

        const eachSheet: ISheetRange = {
          sheetName,
          range: ranges.join(", "),
        };
        // 将结果存储到 formData 中，用于在页面显示
        formData.ranges.push(eachSheet);
        count+=ranges.length;//统计数
        // formData.ranges[sheetName] = ranges.join(", "); // 将数组合并为字符串
      } else {
        console.error(
          `Sheet ${sheetName} does not have the "编号范围" column.`
        );
      }
      formData.convertUsecaseCount=count;
      console.log("formdatada", formData);
      emits("update:modelValue", formData);
    });
  };

  // 读取文件为 ArrayBuffer（二进制数据）
  reader.readAsArrayBuffer(file);

  //确定用例文件
};

const initStatus: BuildStatus = ref(BuildStatus.Waiting); //初始状态

const handleChange = (usecaseFile: string) => {
  emits("update:modelValue", usecaseFile); //确定用例文件

  // excelParse(usecaseFile); //解析excel文件
};
</script>
<style lang="scss" scoped>
::-webkit-file-upload-button {
  font-size: inherit;
  // font-stretch: narrower;
  height: inherit;
  color: red;
}
.input-file-self {
  width: auto;
  opacity: 0;
}
.input-file-label {
  color: #a8abb2;
}
</style>

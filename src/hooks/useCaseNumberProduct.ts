import { Ref, ref } from "vue";

// const caseNumberContainer=ref<string[]>([]);
// const count=ref<number>(0);
const number=ref(0)
export const caseNumberProduct=(initCaseNumber:Ref<number>)=>{
    number.value=initCaseNumber.value;
    // caseNumberContainer.value.push(`TASK-${count}`);
    number.value=number.value+1;
    return number;
}
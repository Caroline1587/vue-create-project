import request from "@/utils/request"
import type{ParamsToCreateTask} from "@/types"

//获取所有任务信息
export function fetchTaskData(){

    return request.get('/v2/caseGen/task')

        // request.get('/v2/caseGen/task',{
        //     params:{
        //         id
        //     }
        // })
}

//新建任务
export function createTask(params:ParamsToCreateTask){

    return request.post('/v2/caseGen/task',params)
}

//取消指定任务
export function cancelTask(task_id:number){

    return request.put(`/v2/caseGen/task/${task_id}/cancel`)
}

//取消所有任务
export function cancelAllTask(){

    return request.put('/v2/caseGen/task/cancel')
}

//指定任务上移
export function moveUpByTaskId(task_id:number){

    return request.put(`/v2/caseGen/task/${task_id}/moveUp`)
}

//指定任务下移
export function moveDownByTaskId(task_id:number){

    return request.put(`/v2/caseGen/task/${task_id}/moveDown`)
}




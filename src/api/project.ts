import request from "@/utils/request"


//## 路径等信息获取相关

//目标位置接口
//   获取所有允许保存位置：
export function fetchTargetPosition(){

    return request.get('/v2/project')
}

//项目名称位置下拉信息
export function getProjectsLinkStatus():{

    return request.get('/tae/getProjectsLinkStatus')

}

//项目列表展示信息获取
export function getLinkedSequencesByTpaId(){

    return request.get('/tae/getLinkedSequencesByTpaId')

}








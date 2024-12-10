import request from "@/utils/request";
import type {
  projectPath,
  IProjectsLinkStatus,
  ILinkedSequences,
} from "@/types";
import getMockData from "@/api/data";

//## 路径等信息获取相关

//目标位置接口
//- 获取所有允许保存位置：
export const fetchTargetPath = (): projectPath[] => {
  return request.get("/v2/project");
};
// "data": [
//   {
//       "projectName": "aaa",
//       "relPath": "/aaa",
//       "absPath": "D:\\1-hirain\\TAE\\Workspace1\\aaa"
//   },
//   {
//       "projectName": "demo",
//       "relPath": "/demo",
//       "absPath": "D:\\1-hirain\\TAE\\Workspace1\\demo"
//   },
//   {
//       "projectName": "用例同步",//====
//       "relPath": "/用例同步",
//       "absPath": "D:\\1-hirain\\TAE\\Workspace1\\用例同步"//===目标路径
//   }
// ]

//项目名称位置下拉信息
export const getProjectsLinkStatus = (): IProjectsLinkStatus => {
  return request.get("/tae/getProjectsLinkStatus");
};
// data": [
//   {
//       "isLinked": false,
//       "linkedId": null,
//       "projectName": "aaa"
//   },
//   {
//       "isLinked": false,
//       "linkedId": null,
//       "projectName": "demo"
//   },
//   {
//       "isLinked": true,
//       "linkedId": "5e6a6b20937f4db991203b369c9d9686",
//       "linkedProjectName": "TAE生成序列项目",//====
//       "projectName": "用例同步"//本地名称
//   }
// ],
//项目列表展示信息获取
export const getLinkedSequencesByTpaId = (TpaId:string): ILinkedSequences => {
  return getMockData().data;
  return request.get("/tae/getLinkedSequencesByTpaId");
};

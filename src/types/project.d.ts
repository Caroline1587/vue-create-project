//目标位置
export interface projectPathAbout {
  projectName: string;
  relPath: string;
  absPath: string;
}

////项目名称位置下拉信息
export interface IProjectsLinkStatus {
  isLinked: boolean;
  linkedId: string | null;
  projectName: string;
  linkedProjectName?: string; //==========
}

export interface IChildrenList{

}
// TODO:项目列表展示信息
export interface ILinkedSequences {
  childrenList:IChildrenList[],//=======
  createTime:string,
  creator:string,
  hasChildren:boolean,//========
  id:string,//======== "07e09902fcb64b8e8cad7097a9ff5051"
  isFullPermission:number,
  lastModifyTime:null|string,
  lastModifyUser:null|string,
  libraryId:string,
  name:string,//"供应商AAEBS"
  parentId:string,//"5e6a6b20937f4db991203b369c9d9686"
  parentPath:string,//"5e6a6b20937f4db991203b369c9d9686"
  selfCtcCount:number,
  selfLtcCount:number,
  testcaseList:ITestcaseList[],//======
  type:string//"testcase_project"
}
export interface ITestcaseList{

}
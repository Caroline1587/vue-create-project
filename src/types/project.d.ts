import { Interface } from "readline";

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

// TODO:项目列表展示信息
export interface ILinkedSequence {
  childrenList: ILinkedSequence[]; //=======
  createTime: string;
  creator: string;
  hasChildren: boolean; //========
  id: string; //========
  isFullPermission: number;
  lastModifyTime: null | string;
  lastModifyUser: null | string;
  libraryId: string;
  name: string; //"供应商AAEBS"
  parentId: string; //"5e6a6b20937f4db991203b369c9d9686"
  parentPath: string; //"5e6a6b20937f4db991203b369c9d9686"
  selfCtcCount: number;
  selfLtcCount: number;
  testcaseList: ITestcase[]; //======
  type: string; //"testcase_project"
}
export interface ITestcase {
  testcaseInfo: ITestcaseInfo;
  variables: [];
}
export interface ITestcaseInfo {
  choosedCtcNum?: null | number;
  createTime?: string;
  createUser?: string;
  createUserDelete?: string | null;
  createUserName?: string | null;
  ctcs?: [];
  customFieldData?: string | null;
  customValue?: string | null;
  description?: string | null;
  folderId?: string | null;
  hasDeleted?: string | null | boolean;
  id: string;
  modifyTime?: string | null;
  modifyUser?: string | null;
  modifyUserName?: string | null;
  preConditionDesc?: string | null;
  priority: string; //======
  prop?: string | null;
  requireNumberAndId?: string | null;
  resetDesc?: string | null;
  rootId?: string | null;
  steps?: IStep[];
  tags?: string | null;
  templateType?: string | null;
  testType?: string | null;
  testcaseId: string; //
  testcaseName: string; //======
  testcaseNumber: string; //======
  testcaseTestStage?: string | null;
}
export interface IStep {
  expectResult?: string | null;
  id: string;
  orderNum: number;
  stepId?: string | null;
  testStep?: string | null;
  testcaseId: string;
}

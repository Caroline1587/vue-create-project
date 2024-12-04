export interface projectPath {
  projectName: string;
  relPath: string;
  absPath: string;
}

export interface IProjectsLinkStatus {
  isLinked: boolean;
  linkedId: string | null;
  projectName: string;
  linkedProjectName?: string; //==========
}

// TODO
export interface ILinkedSequences {}

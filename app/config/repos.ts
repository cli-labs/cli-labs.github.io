export interface RepoItem {
   id: number;
   title: string;
   description?: string;
   repositoryUrl?: string;
}

export const tools: RepoItem[] = [
   {
      id: 1,
      title: "skeleton",
   },
   {
      id: 2,
      title: "scripts",
   },
]

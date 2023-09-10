export interface ITag {
  id: number;
  name: string;
  created_at: Date;
  created_by: number;
  updated_at: Date;
  updated_by: number;
  deleted_at: null;
  deleted_by: number;
}

export interface ITagDetail {
  id: number;
  tag: string;
}

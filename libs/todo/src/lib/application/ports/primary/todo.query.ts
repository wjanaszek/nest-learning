export enum TodoStatusEnum {
  New = 'New',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

export interface TodoQuery {
  id: string;
  description: string;
  status: TodoStatusEnum;
}

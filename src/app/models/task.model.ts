export interface Task {
    title: string;
    description: string;
    done: boolean;
    date: Date;
    list: TaskList;
}

export interface TaskList {
    type: object;
    ref: 'List';
}

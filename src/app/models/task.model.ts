export interface Task {
    title: string;
    description: string;
    done: boolean;
    date: Date;
    list: TaskList;
    _id: string;
    __v: string;
}

export interface TaskList {
    type: object;
    ref: 'List';
}

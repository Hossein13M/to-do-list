import { List } from './list.model';

export interface Task {
    title: string;
    description: string;
    done: boolean;
    date: Date;
    list: List;
    _id: string;
    __v: string;
}

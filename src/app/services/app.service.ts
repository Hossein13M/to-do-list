import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';

@Injectable()
export class AppService {
    constructor(private readonly http: HttpClient) {}

    public getTasks(): Observable<any> {
        return this.http.get<any>(`/tasks`);
    }

    public addTask(taskTitle: { title: string; list: List }): Observable<any> {
        return this.http.post<any>(`/tasks`, taskTitle);
    }

    public getTaskByListId(listId: string): Observable<any> {
        return this.http.get<any>(`/tasks/query/${listId}`);
    }

    public getTaskById(taskId: number): Observable<any> {
        return this.http.get<any>(`/tasks/${taskId}`);
    }

    public removeTaskById(taskId: string): Observable<any> {
        return this.http.delete<any>(`/tasks/${taskId}`);
    }

    public updateTaskById(taskId: string, taskName: string): Observable<any> {
        return this.http.put<any>(`/tasks/${taskId}`, { title: taskName });
    }

    public getAllCompletedTasks(): Observable<any> {
        // the API has mistyping
        return this.http.get<any>(`/compeleted`);
    }

    public getMainList(): Observable<any> {
        return this.http.get<any>(`/mainList`);
    }

    public getLists(): Observable<Array<List>> {
        return this.http.get<Array<List>>(`/lists`);
    }

    public getListById(listId: string): Observable<List> {
        return this.http.get<List>(`/lists/${listId}`);
    }

    public removeListById(listId: string): Observable<any> {
        return this.http.delete<any>(`/lists/${listId}`);
    }

    public updateListById(listId: string, listName: string): Observable<any> {
        return this.http.put<any>(`/lists/${listId}`, { title: listName });
    }

    public createList(listName: string): Observable<any> {
        return this.http.post<any>(`/lists/`, { title: listName });
    }
}

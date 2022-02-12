import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    constructor(private readonly http: HttpClient) {}

    public getTasks(): Observable<any> {
        return this.http.get<any>(`/tasks`);
    }

    public addTask(task: Task): Observable<any> {
        return this.http.post<any>(`/tasks`, task);
    }

    public getTaskByListId(listId: number): Observable<any> {
        return this.http.get<any>(`/tasks/query/${listId}`);
    }

    public getTaskById(taskId: number): Observable<any> {
        return this.http.get<any>(`/tasks/${taskId}`);
    }

    public removeTaskById(taskId: number): Observable<any> {
        return this.http.delete<any>(`/tasks/${taskId}`);
    }

    public updateTaskById(taskId: number, task: Task): Observable<any> {
        return this.http.put<any>(`/tasks/${taskId}`, task);
    }

    public getAllCompletedTasks(): Observable<any> {
        // the API has mistyping
        return this.http.get<any>(`/compeleted`);
    }

    public getMainList(): Observable<any> {
        return this.http.get<any>(`/mainList`);
    }

    public getLists(): Observable<any> {
        return this.http.get<any>(`/lists`);
    }

    public getListById(listId: number): Observable<any> {
        return this.http.get<any>(`/lists/${listId}`);
    }

    public removeListById(listId: number): Observable<any> {
        return this.http.delete<any>(`/lists/${listId}`);
    }

    public updateListById(listId: number, list: List): Observable<any> {
        return this.http.put<any>(`/lists/${listId}`, list);
    }
}

import { Injectable } from '@angular/core';
import { Observable ,Subject,BehaviorSubject} from 'rxjs';
import { ITodo } from '../modulese/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    { "titel": "Kali phosphoricum, Kreosotum, Nitricum acidum, Pulsatilla, Sepia", "description": "2FMDK3JC9AB372385", "isArchived": true, "isComplleted": false, "endDate": "4/16/2022" },
    {"titel":"Avobenzone Homosalate Octisalate Octocrylene","description":"1GTN1UEH3FZ873660","isArchived":true,"isComplleted":false,"endDate":"12/25/2021"},
    {"titel":"Wheat Pollen","description":"3C6TD4MT0CG990166","isArchived":false,"isComplleted":false,"endDate":"12/9/2021"},
    {"titel":"Isopropyl alcohol","description":"WAUJC68E25A815233","isArchived":true,"isComplleted":false,"endDate":"7/4/2022"},
    {"titel":"Omeprazole magnesium","description":"1C3BCBFG0CN691476","isArchived":true,"isComplleted":true,"endDate":"7/7/2022"},
    {"titel":"Octinoxate and Titanium Dioxide","description":"5GAEV237X8J446871","isArchived":true,"isComplleted":true,"endDate":"2/6/2022"},
    {"titel":"Loblolly Pine","description":"1GYS3CEF6BR705067","isArchived":false,"isComplleted":false,"endDate":"10/21/2022",},
    ];

  private _todosubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  constructor() { }

  public getTodo(): Observable<Array<ITodo>>{
    return this._todosubject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  namesTable = ['Adam', 'Aga', 'Arek'];
  namesTableSubject = new BehaviorSubject<Array<string>>([]);
  constructor() {
    this.namesTableSubject.next(this.namesTable);
  }
  pushTableTest(array: Array<string>) {
    this.namesTable = array;
    this.namesTableSubject.next(this.namesTable);
  }
  getNameTable(): Observable<Array<string>> {
    return this.namesTableSubject.asObservable();
  }
}

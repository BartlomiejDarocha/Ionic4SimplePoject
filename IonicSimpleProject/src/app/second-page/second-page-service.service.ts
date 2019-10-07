import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondPageServiceService {

  constructor() { }
  private testObs = new BehaviorSubject<string>('');

  setTest(testString: string) {
    this.testObs.next(testString);
  }

  getTest(): Observable<string> {
    return this.testObs.asObservable();
  }
}

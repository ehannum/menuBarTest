import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ButtonGroupsService {
  private groups = new BehaviorSubject<any>({});
  group = this.groups.asObservable();
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//import { MessageService } from './message.service';
import { CAREERS } from './mock-careers';
import { Careers } from './models/careers';


@Injectable()
export class CareersService {

  private careersUrl = './api/careers/careers.json';

  constructor(
    //private messageService: MessageService
    ) {
  }

  getCareers(): Observable<Careers[]> {
    //this.messageService.add('CareersService: fetched heroes');
    return of(CAREERS);
  }

  getCareer(id: number): Observable<Careers> {
    //this.messageService.add(`CareersService: fetched careers id=${id}`);
    return of(CAREERS.find(careers => careers.id === id));
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareersService } from '../careers.service';
import { CAREERS } from '../mock-careers'
import { Careers } from '../models/careers';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  careers: Careers[] = [];
  

  

  constructor(public router: Router,
    private route: ActivatedRoute, private careersService:  CareersService) { }

  ngOnInit(): void {
    this.getCareers();
    
    
  }

  getCareers(): void {
    this.careersService.getCareers()
      .subscribe(heroes => this.careers = heroes.slice());
  }
  

 

}

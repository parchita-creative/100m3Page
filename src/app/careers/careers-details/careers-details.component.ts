import { Component, Input, OnInit } from '@angular/core';
import { Careers } from 'src/app/models/careers';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from 'src/app/careers.service';
import { Location } from '@angular/common';
import { CAREERS } from 'src/app/mock-careers';




@Component({
  selector: 'app-careers-details',
  templateUrl: './careers-details.component.html',
  styleUrls: ['./careers-details.component.scss']
})
export class CareersDetailsComponent implements OnInit {
  careers: Careers;
  
      




  constructor(private route: ActivatedRoute, private careersService: CareersService, private location: Location) {
    

  }

  ngOnInit(): void {
    this.getCareer();
    console.log(this.careers.reqDes);
    


  }

  getCareer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.careersService.getCareer(id)
      .subscribe(careers => this.careers = careers);
  }

  goBack(): void {
    this.location.back();
  }




}

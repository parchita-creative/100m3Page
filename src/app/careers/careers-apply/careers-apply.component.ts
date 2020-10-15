import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CareersService } from 'src/app/careers.service';
import { ActivatedRoute } from '@angular/router';
import { Careers } from 'src/app/models/careers';

@Component({
  selector: 'app-careers-apply',
  templateUrl: './careers-apply.component.html',
  styleUrls: ['./careers-apply.component.scss']
})
export class CareersApplyComponent implements OnInit {
  careers: Careers;
  constructor(
    private route: ActivatedRoute,
    private careersService: CareersService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCareer();
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

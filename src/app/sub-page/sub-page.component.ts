import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.css']
})
export class SubPageComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
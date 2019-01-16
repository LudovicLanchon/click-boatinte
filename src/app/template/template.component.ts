import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  @Input() page;
  userSelected;
  boatSelected;

  constructor(private _location: Location) { }

  ngOnInit() {
    console.log(this.page);
  }

  backClicked() {
    if (this.page === 'second') {
      this._location.back();
    }
  }

  user(param) {
    this.userSelected = param;
    console.log(this.userSelected);
  }

  boat(param) {
    this.boatSelected = param;
    console.log(this.boatSelected);
  }

}

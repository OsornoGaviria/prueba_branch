import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registro-succes',
  templateUrl: './registro-succes.page.html',
  styleUrls: ['./registro-succes.page.scss'],
})
export class RegistroSuccesPage implements OnInit {

  constructor(private routerLink: Router) { }

  ngOnInit() {
  }


  allData(){
    this.routerLink.navigate(['/all-registros'])
  }

}

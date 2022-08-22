import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../Servicios/api-rest.service';

@Component({
  selector: 'app-all-registros',
  templateUrl: './all-registros.page.html',
  styleUrls: ['./all-registros.page.scss'],
})
export class AllRegistrosPage implements OnInit {

  allregistros;

  constructor(private apiRestService:ApiRestService) { }

  ngOnInit() {
    this.cargarRegistros()
  }


  cargarRegistros(){
    let data = {
      funcion: 'allRegistros',
    }
    this.apiRestService.cargarRegistros(data).subscribe(res=>{
      this.allregistros=res;
    })
  }

}

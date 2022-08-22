import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../Servicios/api-rest.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { ValidacionesService  } from '../../Servicios/validaciones.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resgitro-participante',
  templateUrl: './resgitro-participante.page.html',
  styleUrls: ['./resgitro-participante.page.scss'],
})


export class ResgitroParticipantePage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  vEmail: boolean = false;
  vNombre: boolean = false;
  vApellido: boolean = false;
  vtelefono: boolean = false;
  vCiudad: boolean = false;
  vDepto: boolean = false;
  codCiudad;
  deptos; citys;


  constructor(private apiRestService:ApiRestService,
    public toastController: ToastController,
    public formBuilder: FormBuilder,
    private validaciones: ValidacionesService,
    private routerLink: Router) {

      this.ionicForm = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.maxLength(50)]],
        apellido:['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.maxLength(30)]],
        departamento:[''],
        ciudad:[''],
        telefono:['', [Validators.required, Validators.maxLength(15)]],
        comentario:['', [Validators.required, Validators.maxLength(200)]]
     })
    }

  ngOnInit() {
    let data = {
      funcion: 'searchDeptos',
    }
    this.apiRestService.searchDeptos(data).subscribe(res=>{
      this.deptos=res;
    })
  }


  submitForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
       this.messageError()
       return false;
    } else {

      if(!this.vtelefono && !this.vEmail && !this.vNombre && !this.vApellido){
        this.saveData()
      }else{
        this.messageError()
        return false;
      }
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  verCiudades(event){
      let data = {
        funcion: 'searchCitys',
        codDepto: event.detail.value
      }
      this.apiRestService.searchCitys(data).subscribe(res=>{
        this.citys=res;
      })

  }

  async messageError() {
    const toast = await this.toastController.create({
      message: 'Verifique sus datos e intente nuevamente.',
      duration: 2000
    });
    toast.present();
  }


  //OtrasValidaviones


  validaCel(event){
    this.vtelefono =  this.validaciones.validaCel(event.detail.value)
  }

  validaEmail(event){
    this.vEmail= this.validaciones.validaEmail(event.detail.value)
  }

  validaName(event){
    this.vNombre= this.validaciones.validaName(event.detail.value)
  }

  validaLastName(event){
    this.vApellido= this.validaciones.validaLastName(event.detail.value)
  }

  saveData(){
    let data = {
      funcion: 'saveRegistre',
      dataUser: this.ionicForm.value
    }
    this.apiRestService.saveRegistre(data).subscribe(res=>{
          if(res==true){
            this.routerLink.navigate(['/succes'])
          }else{
              this.messageError();
          }
    })
  }



}

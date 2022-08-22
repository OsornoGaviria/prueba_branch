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

  deptos=[
    {
      codigo: '01',
      descripcion: 'Amazonas'
    },
    {
      codigo: '02',
      descripcion: 'Antioquia'
    },
    {
      codigo: '03',
      descripcion: 'Bolivar'
    }
  ]

  citys=[
     { codigo:'01',
       deptoid:'01',
       descripcion: 'Leticia'
    },
    { codigo:'02',
      deptoid:'01',
      descripcion: 'Puerto Narino'
    },
    { codigo:'03',
      deptoid:'02',
      descripcion: 'Medellin'
    } ,
    { codigo:'04',
      deptoid:'02',
      descripcion: 'Bello'
    },
    { codigo:'05',
      deptoid:'02',
      descripcion: 'Envigado'
    } ,
    { codigo:'06',
      deptoid:'03',
      descripcion: 'Barranquilla'
    } ,
    { codigo:'7',
      deptoid:'03',
      descripcion: 'Soledad'
    }
  ]

  constructor(private apiRestService:ApiRestService,
    public toastController: ToastController,
    public formBuilder: FormBuilder,
    private validaciones: ValidacionesService,
    private routerLink: Router) {

      this.ionicForm = this.formBuilder.group({
        nombres: ['', [Validators.required, Validators.maxLength(50)]],
        apellidos:['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.maxLength(30)]],
        departamento:[''],
        ciudad:[''],
        telefono:['', [Validators.required, Validators.maxLength(15)]],
        comentarios:['', [Validators.required, Validators.maxLength(200)]]
     })
    }

  ngOnInit() {
    // this.apiRestService.searcDeptos().subscribe(res=>{
    //   console.log(res)
    // })
  }


  submitForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
       this.messageError()
       return false;
    } else {

      if(!this.vtelefono && !this.vEmail && !this.vNombre && !this.vApellido){
        this.routerLink.navigate(['/succes'])
      }else{
        this.messageError()
        return false;
      }
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  cambio(event){
      this.codCiudad=event.detail.value;
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





}

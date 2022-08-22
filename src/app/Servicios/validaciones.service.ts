import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }


  validaEmail(email){
    var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,14}))$/;
    if (email.match(EMAIL_REGEX)){
      return false
     }
     else{
      return true
     }
  }

  validaCel(phone){
    var phonev = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone);
    if(phonev==true){
      return false
    }
    else{
     return true
    }
  }

  validaName(event){
    var nombre = /^[a-z\\s\u00E0-\u00FC\u00f1]*$/i.test(event);
    console.log(nombre)
    if(nombre==true){
      return false
    }
    else{
     return true
    }
  }

  validaLastName(event){
    var apellidos = /^[a-z\\s\u00E0-\u00FC\u00f1]*$/i.test(event);
    if(apellidos==true){
      return false
    }
    else{
     return true
    }
  }

}

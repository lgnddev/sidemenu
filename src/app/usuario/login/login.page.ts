import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  @ViewChild("title", {read: ElementRef, static: true}) title: ElementRef;
  user : String;

  field:string="";
  constructor(private router: Router, private animationCtrl: AnimationController, public toastController: ToastController) { }
  ngOnInit() {}

  sendUser(){
    if(this.validateModel(this.user)){
      let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigate([''], navigationExtras);
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)) {
      if (value=="") {
        this.field=key;
        return false;
      }
    }
    return true;
  }

 async presentToast(message:string, duration?:number){
   const toast = await this.toastController.create(
     {
       message:message,
       duration:duration?duration:2000
     }
   );
   toast.present();
 }
  
}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  @ViewChild("title", {read: ElementRef, static: true}) title: ElementRef;
  user : String;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 70;
  public load: Boolean = false;
  field: string="";

  
  constructor(private router: Router, private animationCtrl: AnimationController, public toastController: ToastController) { }

  ngOnInit() {
  }

  sendUser(){
    if(this.validateModel(this.user)){
      let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.load = true;
    setTimeout(() => {
      this.load = false;
      this.router.navigate([''], navigationExtras);
      this.presentToast('Falta: ');
    }, 2000)

    }
    else{
      this.presentToast('Falta: ');
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
        cssClass: 'toast-wrapper.toast-bottom',
        message:message,
        position: 'bottom',
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}
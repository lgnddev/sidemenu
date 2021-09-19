import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  @ViewChild("title", {read: ElementRef, static: true}) title: ElementRef;
  user : String;
  
  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  sendUser(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigate([''], navigationExtras);
  }
}
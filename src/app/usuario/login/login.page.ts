import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

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

  Boton(){
    this.load = true;
    setTimeout(() => {
      this.load = false;
    }, 3000)
  }
}
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private activeroute: ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  sendUser(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigate(['/reg-recetas'], navigationExtras);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

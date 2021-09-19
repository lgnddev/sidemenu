import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-recetas',
  templateUrl: './reg-recetas.page.html',
  styleUrls: ['./reg-recetas.page.scss'],
})
export class RegRecetasPage implements OnInit {
  user : any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private activeroute: ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
  }

}

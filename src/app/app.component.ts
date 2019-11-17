import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Rastreo',
      url: '/tracing',
      icon: 'locate'
    },
    {
      title: 'Servicios',
      url: '/business',
      icon: 'pricetags'
    },
    {
      title: 'Buses',
      url: '/buses',
      icon: 'bus'
    },
    {
      title: 'Tarjetas de operación',
      url: '/licenses',
      icon: 'checkmark-circle'
    },
    {
      title: 'Acerca de',
      url: '/about',
      icon: 'information-circle-outline'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    // {
    //   title: 'Productos',
    //   url: '/products',
    //   icon: 'pricetags'
    // },
    // {
    //   title: 'Cerrar sesión',
    //   url: '/login',
    //   icon: 'log-out'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

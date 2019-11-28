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
      title: 'Empleados',
      url: '/employees',
      icon: 'list'
    },
    {
      title: 'Categorias',
      url: '/categories',
      icon: 'list'
    },
    {
      title: 'Clientes',
      url: '/customers',
      icon: 'list'
    },
    {
      title: 'CustomerCustomerDemo',
      url: '/customer-customer-demo',
      icon: 'list'
    },
    {
      title: 'Customer Demographics',
      url: '/customer-demographics',
      icon: 'list'
    },
    {
      title: 'Employee Territories',
      url: '/employee-territories',
      icon: 'list'
    },
    {
      title: 'Ordenes',
      url: '/orders',
      icon: 'list'
    },
    {
      title: 'Detalle de Ordenes',
      url: '/order-details',
      icon: 'list'
    },
    {
      title: 'Productos',
      url: '/product',
      icon: 'list'
    },
    {
      title: 'Regiones',
      url: '/regions',
      icon: 'list'
    },
    {
      title: 'Transportista',
      url: '/shipper',
      icon: 'list'
    },
    {
      title: 'Proveedores',
      url: '/suppliers',
      icon: 'list'
    },
    {
      title: 'Territorios',
      url: '/territories',
      icon: 'list'
    },
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

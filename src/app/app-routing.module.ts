import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'artists',
    loadChildren: () => import('./pages/artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'customer-customer-demo',
    loadChildren: () => import('./pages/customer-customer-demo/customer-customer-demo.module').then( m => m.CustomerCustomerDemoPageModule)
  },
  {
    path: 'customer-demographics',
    loadChildren: () => import('./pages/customer-demographics/customer-demographics.module').then( m => m.CustomerDemographicsPageModule)
  },
  {
    path: 'employee-territories',
    loadChildren: () => import('./pages/employee-territories/employee-territories.module').then( m => m.EmployeeTerritoriesPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'regions',
    loadChildren: () => import('./pages/regions/regions.module').then( m => m.RegionsPageModule)
  },
  {
    path: 'shipper',
    loadChildren: () => import('./pages/shipper/shipper.module').then( m => m.ShipperPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

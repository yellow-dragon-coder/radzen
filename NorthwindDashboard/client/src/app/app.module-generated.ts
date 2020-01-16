/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { CardModule } from '@radzen/angular/dist/card';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { SidebarToggleModule } from '@radzen/angular/dist/sidebar-toggle';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { ProfileMenuModule } from '@radzen/angular/dist/profilemenu';
import { GravatarModule } from '@radzen/angular/dist/gravatar';
import { SidebarModule } from '@radzen/angular/dist/sidebar';
import { ImageModule } from '@radzen/angular/dist/image';
import { PanelMenuModule } from '@radzen/angular/dist/panelmenu';
import { FooterModule } from '@radzen/angular/dist/footer';
import { LinkModule } from '@radzen/angular/dist/link';
import { ContentModule } from '@radzen/angular/dist/content';
import { GridModule } from '@radzen/angular/dist/grid';
import { FormModule } from '@radzen/angular/dist/form';
import { LabelModule } from '@radzen/angular/dist/label';
import { ButtonModule } from '@radzen/angular/dist/button';
import { HtmlModule } from '@radzen/angular/dist/html';
import { LoginModule } from '@radzen/angular/dist/login';
import { ProgressBarModule } from '@radzen/angular/dist/progressbar';
import { GaugeModule } from '@radzen/angular/dist/gauge';
import { SparklineModule } from '@radzen/angular/dist/sparkline';
import { SelectBarModule } from '@radzen/angular/dist/selectbar';
import { ChartModule } from '@radzen/angular/dist/chart';
import { SchedulerModule } from '@radzen/angular/dist/scheduler';
import { GoogleMapModule } from '@radzen/angular/dist/googlemap';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderDetailComponent } from './add-order-detail/add-order-detail.component';
import { EditOrderDetailComponent } from './edit-order-detail/edit-order-detail.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { OrderDetailsByOrderIdComponent } from './order-details-by-order-id/order-details-by-order-id.component';
import { OrdersByOrderIdComponent } from './orders-by-order-id/orders-by-order-id.component';
import { OrdersByCustomerIdComponent } from './orders-by-customer-id/orders-by-customer-id.component';
import { ProductsByCategoryIdComponent } from './products-by-category-id/products-by-category-id.component';
import { CategoriesByCategoryIdComponent } from './categories-by-category-id/categories-by-category-id.component';
import { CustomersByCustomerIdComponent } from './customers-by-customer-id/customers-by-customer-id.component';
import { OrdersByEmployeeIdComponent } from './orders-by-employee-id/orders-by-employee-id.component';
import { EmployeesByEmployeeIdComponent } from './employees-by-employee-id/employees-by-employee-id.component';
import { ProductsByProductIdComponent } from './products-by-product-id/products-by-product-id.component';
import { SuppliersBySupplierIdComponent } from './suppliers-by-supplier-id/suppliers-by-supplier-id.component';
import { ProductsBySupplierIdComponent } from './products-by-supplier-id/products-by-supplier-id.component';
import { LoginComponent } from './login/login.component';
import { AddApplicationRoleComponent } from './add-application-role/add-application-role.component';
import { AddApplicationUserComponent } from './add-application-user/add-application-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationRolesComponent } from './application-roles/application-roles.component';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { RegisterApplicationUserComponent } from './register-application-user/register-application-user.component';
import { EditApplicationUserComponent } from './edit-application-user/edit-application-user.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersByProductIdComponent } from './orders-by-product-id/orders-by-product-id.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { NorthwindService } from './northwind.service';
import { SecurityService, UserService } from './security.service';
import { SecurityInterceptor } from './security.interceptor';
import { AuthGuard } from './auth.guard';

export const PageDeclarations = [
  CategoriesComponent,
  AddCategoryComponent,
  EditCategoryComponent,
  CustomersComponent,
  AddCustomerComponent,
  EditCustomerComponent,
  EmployeesComponent,
  AddEmployeeComponent,
  EditEmployeeComponent,
  OrdersComponent,
  AddOrderComponent,
  EditOrderComponent,
  OrderDetailsComponent,
  AddOrderDetailComponent,
  EditOrderDetailComponent,
  ProductsComponent,
  AddProductComponent,
  EditProductComponent,
  SuppliersComponent,
  AddSupplierComponent,
  EditSupplierComponent,
  OrderDetailsByOrderIdComponent,
  OrdersByOrderIdComponent,
  OrdersByCustomerIdComponent,
  ProductsByCategoryIdComponent,
  CategoriesByCategoryIdComponent,
  CustomersByCustomerIdComponent,
  OrdersByEmployeeIdComponent,
  EmployeesByEmployeeIdComponent,
  ProductsByProductIdComponent,
  SuppliersBySupplierIdComponent,
  ProductsBySupplierIdComponent,
  LoginComponent,
  AddApplicationRoleComponent,
  AddApplicationUserComponent,
  ProfileComponent,
  ApplicationRolesComponent,
  ApplicationUsersComponent,
  RegisterApplicationUserComponent,
  EditApplicationUserComponent,
  UnauthorizedComponent,
  DashboardComponent,
  OrdersByProductIdComponent,
];

export const LayoutDeclarations = [
  LoginLayoutComponent,
  MainLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  NorthwindService,
  UserService,
  SecurityService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  },
  AuthGuard,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  CardModule,
  ContentContainerModule,
  HeaderModule,
  SidebarToggleModule,
  HeadingModule,
  ProfileMenuModule,
  GravatarModule,
  SidebarModule,
  ImageModule,
  PanelMenuModule,
  FooterModule,
  LinkModule,
  ContentModule,
  GridModule,
  FormModule,
  LabelModule,
  ButtonModule,
  HtmlModule,
  LoginModule,
  ProgressBarModule,
  GaugeModule,
  SparklineModule,
  SelectBarModule,
  ChartModule,
  SchedulerModule,
  GoogleMapModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];

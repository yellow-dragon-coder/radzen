/*
  This file is automatically generated. Any changes will be overwritten.
  Modify login.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { ImageComponent } from '@radzen/angular/dist/image';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { HtmlComponent } from '@radzen/angular/dist/html';
import { LoginComponent } from '@radzen/angular/dist/login';

import { ConfigService } from '../config.service';
import { RegisterApplicationUserComponent } from '../register-application-user/register-application-user.component';

import { SecurityService } from '../security.service';

export class LoginGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('image0') image0: ImageComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('html0') html0: HtmlComponent;
  @ViewChild('login0') login0: LoginComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  security: SecurityService;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {

  }

  login0Login(event: any) {
    this.security.login(`${event.username.trim()}`, `${event.password.trim()}`)
    .subscribe((result: any) => {

    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `${result.error.message}` });
    });
  }

  login0Register(event: any) {
    this.dialogService.open(RegisterApplicationUserComponent, { parameters: {}, title: 'Register Application User' });
  }
}

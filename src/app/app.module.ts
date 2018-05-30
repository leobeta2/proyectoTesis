import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GraphicPage } from '../pages/graphic/graphic';
import {Graphic2Page} from '../pages/graphic2/graphic2'
import { LoginPage } from '../pages/login/login';
import {FIREBASE_CONFIG} from "./app.firebase.config";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {ProfilePage} from "../pages/profile/profile";
import { ProfileService } from "../services/profile.service"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GraphicPage,
    LoginPage,
    ProfilePage,
    Graphic2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GraphicPage,
    LoginPage,
    ProfilePage,
    Graphic2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileService
  ]
})
export class AppModule {}

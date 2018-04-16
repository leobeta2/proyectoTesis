import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import {User} from '../../models/user'
import {AngularFireAuth} from "angularfire2/auth";




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }



  public goToHome(){
    this.navCtrl.push(HomePage);
  }

  async  login(user: User){
    try{
      const result =this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password);
      console.log(result);
      if(result) {
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      console.error(e);

    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }
}

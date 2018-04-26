import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {HomePage} from "../home/home";




@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

 createProfile(){
  this.afAuth.authState.take(1).subscribe(auth => {
    this.afDatabase.object('profile/'+auth.uid).set(this.profile)
      .then(()=> this.navCtrl.setRoot(HomePage))
  } )
 }
}

import {Injectable} from '@angular/core'
import {AngularFireDatabase} from "angularfire2/database";
import {Profile} from "../models/profile";

@Injectable()
export class ProfileService {

    private ProfileRef = this.db.list<Profile>('Profile-list');
  
    constructor(private db: AngularFireDatabase){
  
    }
  
    getProfileList(){
      return this.ProfileRef ;
    }
  
    // addItem(profile: Profile){
    //   return this.ProfileRef .push(profile);
    // }
  
    // editItem(profile: Profile){
    //   return this.ProfileRef.update(profile.key, profile);
    // }
  
    // removeItem(profile: Profile){
    //   return this.ProfileRef.remove(profile.key);
    // }
  }
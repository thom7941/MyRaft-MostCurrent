import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth, 
    public loadingController: LoadingController,
    public alertController: AlertController,
    public router: Router,
    private afs: AngularFirestore) { }

  async registerUser(email:string,password:string): Promise<any> {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  async loginUser(email:string, password:string): Promise<any> {
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async logoutUser(): Promise<void> {
    return await this.ngFireAuth.signOut();
  }

  async addUserToFirestore(userId: string, fullname: string, email: string) {
    try {
      await this.afs.collection('users').doc(userId).set({
        fullName: fullname,
        email: email,
        joinedGroups: [],
      });
      console.log('User added to Firestore');
    } catch (error) {
      console.log('Error adding user to Firestore:', error);
    }
  }

async resetPassword(email:string) {
  return await this.ngFireAuth.sendPasswordResetEmail(email)
}

  async getProfile() {
    return await this.ngFireAuth.currentUser
  }
}

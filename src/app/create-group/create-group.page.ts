import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from '../models/group';
import { getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, onSnapshot, setDoc, deleteDoc } from 'firebase/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {

  public createGroupForm: FormGroup;
  private firebaseApp = getApp();
  private db = getFirestore(this.firebaseApp);
  public groupId: string;
  
  
  
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router,
    private alertController: AlertController) {
    this.createGroupForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      img: ['', Validators.compose([Validators.required])],
    });
    this.groupId = "";
   }


  ngOnInit() {
    this.groupId = this.route.snapshot.params['id'];
    if(this.groupId !== 'new') {
      
      const currentGroup = doc(this.db, `groups/${this.groupId}`);
      
      onSnapshot(currentGroup, (snapshot) => {

        const snap = snapshot.data();
        if(snap) {
          this.createGroupForm.setValue({
            title: snap['title'],
            img: snap['img'],
            description: snap['description'],
          });
        }
      });
    }
  }

  addGroup(): void {

    if (this.groupId == 'new') {
      const groupCollection = collection(this.db, 'groups');
      addDoc(groupCollection, this.createGroupForm.value).then(() => {
        this.router.navigateByUrl('groups');
      });
    } else {
      const groupDoc = doc(this.db, `groups/${this.groupId}`);
      setDoc(groupDoc, this.createGroupForm.value).then(() => {
        this.router.navigateByUrl('groups');
      });
    }
  }

  async deleteGroup(groupId: string): Promise<void> {
    // console.log(groupId);
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this document?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            const groupToDelete = doc(this.db, `groups/${groupId}`);
            deleteDoc(groupToDelete).then(() => {
              this.router.navigateByUrl('/groups');
            });

          }
        }
      ]
    });
    await alert.present();
  }

}

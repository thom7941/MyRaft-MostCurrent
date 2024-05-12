import { Component, NgZone, OnInit } from '@angular/core';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Group } from '../models/group';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.page.html',
  styleUrls: ['./groups-page.page.scss'],
})

export class GroupsPagePage implements OnInit {
  public eventList: Group[] = []; 
  public eventListHalf1: Group[] = [];
  public eventListHalf2: Group[] = [];
  public colorArr: string[] = [];

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.colorArr.push('off-white');
    this.colorArr.push('raft-blue');

    const db = getFirestore();
    const groupCollection = collection(db, 'groups');
    
    onSnapshot(groupCollection, (snapshot) => {
      this.zone.run(() => {
        snapshot.forEach((doc) => {
          const currentGroup = doc.data();
          currentGroup['id'] = doc.id;

          let currentDescription = currentGroup['description'];
          let currentImg = currentGroup['img'];
          let currentTitle = currentGroup['title'];
          let currentId = currentGroup['id'];


          let gg = new Group(currentDescription, currentImg, currentTitle, currentId);
          // need to check for duplicates
          this.eventList.push(gg);

          // for grid view
          if(this.eventList.length % 2 == 0) {
            this.eventListHalf2.push(gg);
          } else {
            this.eventListHalf1.push(gg);
          }
        });
      });
    });
  }
  changeView(chosenView: string) {
    if(chosenView == "grid") {
      console.log("show grid");
      let g =document.getElementById("grid");
      if(g) {
        g.style.display="block";
        if(this.colorArr[0] === 'off-white') { 
          this.colorArr[0] = 'raft-blue';
          this.colorArr[1] = 'off-white';
        } 
      }
      let l =document.getElementById("list");
      if(l) {
        l.style.display="none";
      }
    }
    if(chosenView == "list") {
      console.log("show list");
      let g =document.getElementById("grid");
      if(g) {
        g.style.display="none";
      }
      let l =document.getElementById("list");
      if(l) {
        l.style.display = "block";
        if(this.colorArr[0] === 'raft-blue') { 
          this.colorArr[1] = 'raft-blue';
          this.colorArr[0] = 'off-white';
        }
      }
    }
  }

  addGroup(enrolledGroup : string) {
    console.log(enrolledGroup);
    let g = document.getElementById("addGroup");
    if(g) {
      g.innerHTML = "-";
    }
  }

  addGroup2(enrolledGroup : string) {
    console.log(enrolledGroup);
    let g = document.getElementById("addGroup2");
    if(g) {
      g.innerHTML = "-";
    }
  }
}
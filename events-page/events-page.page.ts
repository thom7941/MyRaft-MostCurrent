import { Component, NgZone, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.page.html',
  styleUrls: ['./events-page.page.scss'],
})
export class EventsPagePage implements OnInit {
  public colorArr: string[] = [];

  public eventlist: Event[] = [];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.colorArr.push('off-white');
    this.colorArr.push('raft-blue');

    const db = getFirestore();
    const eventCollection = collection(db, 'events');
    
    onSnapshot(eventCollection, (snapshot) => {
      this.zone.run(() => {
        snapshot.forEach((doc) => {
          const currentEvent = doc.data();
          currentEvent['id'] = doc.id;

          let currentDescription = currentEvent['description'];
          let currentImg = currentEvent['img'];
          let currentTitle = currentEvent['title'];
          let currentId = currentEvent['id'];

          let gg = new Event(currentDescription, currentImg, currentTitle, currentId);
          // need to check for duplicates
          this.eventlist.push(gg);
        });
      });
    });
  }

  changeView(chosenView: string) {
    if(chosenView == "calendar") {
      console.log("show calendar");
      let g =document.getElementById("calendar");
      if(g) {
        g.style.display="block";
        if(this.colorArr[0] === 'off-white') { 
          this.colorArr[0] = 'raft-blue';
          this.colorArr[1] = 'off-white';
        } 
      }
      let l =document.getElementById("today");
      if(l) {
        l.style.display="none";
      }
    }
    if(chosenView == "today") {
      console.log("show today");
      let g =document.getElementById("calendar");
      if(g) {
        g.style.display="none";
      }
      let l =document.getElementById("today");
      if(l) {
        l.style.display = "block";
        if(this.colorArr[0] === 'raft-blue') { 
          this.colorArr[1] = 'raft-blue';
          this.colorArr[0] = 'off-white';
        }
      }
    }
  }
}
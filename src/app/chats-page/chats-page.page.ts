import { Component, NgZone, OnInit } from '@angular/core';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Chat } from '../models/chat';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.page.html',
  styleUrls: ['./chats-page.page.scss'],
})
export class ChatsPagePage implements OnInit {
  public eventList: Chat[] = [];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    const db = getFirestore();
    const chatCollection = collection(db, 'chats');

    onSnapshot(chatCollection, (snapshot) => {
      this.zone.run(() => {
        snapshot.forEach((doc) => {
          const currentChat = doc.data();
          currentChat['id'] = doc.id;

          let currentDescription = currentChat['lastMessage'];
          // let currentImg = currentChat['img'];
          let currentUser = currentChat['senderID'];
          let currentTimestamp = "10:00 AM"; 
          let currentId = currentChat['id'];

          let cc = new Chat(currentDescription, currentUser, currentId, currentTimestamp);
          this.eventList.push(cc);
        });
      });
    });
  }

}

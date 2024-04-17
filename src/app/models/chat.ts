import { Timestamp } from "firebase/firestore";

export class Chat {
    // originally an interface but had trouble with firebase doc methods
    // i needed to manually add each group in database to eventlist
    
    description: string;
    // userImg: string;
    chatId: string;
    userName: string;
    userID: string;
    time: string;
  
    constructor(
        description:string,
        chatId:string,
        // userName:string,
        userID:string,
        time: string
    ) {
      this.description = description;
      this.chatId = chatId;
      this.userName = userID;
      this.userID = userID;
      this.time = time;
    }
  
  }

  export interface Chat {
    description: string;
    // userImg: string;
    chatId: string;
    userName: string;
    userID: string;
    time: string;
  }
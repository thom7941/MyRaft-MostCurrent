export class Group {
    // originally an interface but had trouble with firebase doc methods
    // i needed to manually add each group in database to eventlist
    
    description: string;
    img: string;
    title: string;
    id: string;

    // participants: number;
  
    constructor(description: string, img: string, title: string, id: string) {
      this.description = description;
      this.img = img;
      this.title = title;
      this.id = id;
    }
  
  }

  export interface Group {
    description: string;
    img: string;
    title: string;
    id: string;
  }
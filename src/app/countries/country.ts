export interface Country {
    cid: number;
    name: string;
    image: string;
  }

export interface Teams {
  cid: number;
  tid: number;
  name: string;
  owner: string;
  captain: string;
  vice_captain: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
}

export interface IItem extends IProduct {
  description: string;
}

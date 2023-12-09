export interface IProduct {
  details: IItem;
  id: number;
  title: string;
}

export interface IItem extends IProduct {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
  img?: string;
  description?: string;
  stock: number;
  quantity?: number | undefined;
}

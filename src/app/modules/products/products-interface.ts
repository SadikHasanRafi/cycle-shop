export default interface IProduct {
  name: string;
  brand: string;
  price: number;
  type: string
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProductModel  {
  duplicateCheck(): boolean;
}



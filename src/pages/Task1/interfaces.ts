export interface ClientPurchase {
  name: string;
  price: string;
}

export interface Client {
  client: string;
  age: number;
  purchases: Array<ClientPurchase>;
  status: boolean;
}

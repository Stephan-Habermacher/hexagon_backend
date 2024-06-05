export interface IPricelistOuterenvelopes {
  supplierId: string;
  product: string;
  print: string;
  sortchange: number;
  price: { threshold: number; price: number }[];
}

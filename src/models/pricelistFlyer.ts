export interface IPricelistFlyer {
  supplierId: string;
  product: string;
  paper: string;
  format: string;
  preprint: string;
  print: string;
  postprint: string;
  datatransfer: number;
  sortchange: number;
  price: { threshold: number; price: number }[];
}

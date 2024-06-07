export interface IPricelistLetter {
  supplierId: string;
  product: string;
  paper: string;
  format: string;
  preprint: string;
  print: string;
  postprint: string;
  datatransfer: number;
  adresspreparation: number;
  personalization: number;
  sortchange: number;
  readytoprint: number;
  setupprint: number;
  printprice: { threshold: number; price: number }[];
  paperprice: number;
  transport: number;
  energysurcharge: number;
}

export interface ISupplier {
  id: string;
  supplierName: string;
  supplierNameShort: string;
  supplierAdress: {
    streetName: string;
    streetNumber: string;
    country: string;
    zipCode: number;
    city: string;
  };
  supplierProducts: {
    outerenvelope: boolean;
    letter: boolean;
    flyer: boolean;
    cards: boolean;
  };
}

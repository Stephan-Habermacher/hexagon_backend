export interface ILettershop {
  id: string;
  lettershopName: string;
  lettershopNameShort: string;
  lettershopAdress: {
    streetName: string;
    streetNumber: string;
    country: string;
    zipCode: number;
    city: string;
  };
}

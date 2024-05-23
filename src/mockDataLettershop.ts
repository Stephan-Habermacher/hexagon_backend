import { ILettershop } from "./models/lettershop";

export const mockDataLettershop: ILettershop[] = [
  {
    id: "1",
    lettershopName: "M+C Mail GmbH",
    lettershopNameShort: "M+C",
    lettershopAdress: {
      streetName: "Menzikerstrasse",
      streetNumber: "25a",
      country: "CH",
      zipCode: 6221,
      city: "Rickenbach LU",
    },
  },
  {
    id: "2",
    lettershopName: "Speed Mail Service AG",
    lettershopNameShort: "Speed Mail",
    lettershopAdress: {
      streetName: "Fännring",
      streetNumber: "4",
      country: "CH",
      zipCode: 6403,
      city: "Küssnacht am Rigi SZ",
    },
  },
];

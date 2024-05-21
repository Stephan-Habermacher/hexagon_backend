import { IProject } from "./models/project";

export const mockProjects: IProject[] = [
  {
    customer: "PFO",
    name: "HM 01/24.01",
    id: "1",
    languages: { isGerman: true, isFrench: true, isItalian: true },
    quantities: { german: 60000, french: 20000, italian: 10000 },
    package: {
      isOuterenvelope: true,
      isLetter: true,
      isFlyer: true,
      isCards: false,
    },
    lettershopId: "M+C",
    shippingProvider: { isPost: true, isQuickmail: true },
    shippingDate: "2024-04-15",
  },
  {
    customer: "PSP",
    name: "HM 02/24.02",
    id: "2",
    languages: { isGerman: true, isFrench: true, isItalian: false },
    quantities: { german: 60000, french: 20000, italian: 0 },
    package: {
      isOuterenvelope: true,
      isLetter: true,
      isFlyer: true,
      isCards: false,
    },
    lettershopId: "M+C",
    shippingProvider: { isPost: true, isQuickmail: false },
    shippingDate: "2024-04-15",
  },
  {
    customer: "SDS",
    name: "HM 03/24.03",
    id: "3",
    languages: { isGerman: true, isFrench: true, isItalian: false },
    quantities: { german: 60000, french: 20000, italian: 0 },
    package: {
      isOuterenvelope: true,
      isLetter: true,
      isFlyer: true,
      isCards: false,
    },
    lettershopId: "M+C",
    shippingProvider: { isPost: true, isQuickmail: false },
    shippingDate: "2024-04-15",
  },
];

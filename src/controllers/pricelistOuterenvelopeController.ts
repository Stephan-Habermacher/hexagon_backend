import { Request, Response } from "express";
import { mockDataPricelistOuterenvelope } from "../mockDataPricelistOuterenvelope";
import { mockDataOuterenvelope } from "../mockDataOuterenvelope";
import { mockDataSupplier } from "../mockDataSupplier";

export const getPricelistOuterenvelope = (req: Request, res: Response) => {
  if (mockDataPricelistOuterenvelope) {
    const seenPrints = new Set(
      mockDataPricelistOuterenvelope.map((pricelist) => pricelist.print)
    );
    const array = Array.from(seenPrints);
    res.json(array);
  } else {
    res.status(404).send({ message: "No Pricelist found" });
  }
};

export const postPricelistOuterenvelope = (req: Request, res: Response) => {
  const body = req.body;
  const material = mockDataOuterenvelope.find(
    (outerenvelope) => outerenvelope.id === body.format
  );
  if (!material) {
    res.status(400).send({ message: "No material found" });
    return;
  }

  const suppliersForMaterial = material.suppliers;
  const availablePrints = mockDataPricelistOuterenvelope.filter(
    (print) =>
      print.print === body.print &&
      suppliersForMaterial.includes(print.supplierId)
  );
  const results = availablePrints.map((availableprint) => ({
    id: availableprint.supplierId,
    name: mockDataSupplier.find(
      (supplier) => supplier.id === availableprint.supplierId
    )?.supplierNameShort,
    price: calculateOuterenvelopeSuppliers(
      body.numberOfSorts,
      body.quantityTotal,
      material.price,
      availableprint.sortchange,
      availableprint.price
        .sort((a, b) => b.threshold - a.threshold)
        .find((price) => body.quantityTotal >= price.threshold)?.price || 1
    ),
  }));
  res.json(results);
};

function calculateOuterenvelopeSuppliers(
  numberOfSorts: number,
  quantityTotal: number,
  materialprice: number,
  sortchangeprice: number,
  printprice: number
) {
  const materialcost = (quantityTotal / 1000) * materialprice;
  const sortchangecost = (numberOfSorts - 1) * sortchangeprice;
  const printcost = (quantityTotal / 1000) * printprice;
  return materialcost + sortchangecost + printcost;
}

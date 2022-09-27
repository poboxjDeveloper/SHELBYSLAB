interface Product {
  id: number;
  name: string;
}

export default function handler(req, res): void {
  const products: Product[] = [
    { id: 1, name: 'first product' },
    { id: 2, name: 'second product' },
  ];

  res.status(200).json(products);
}

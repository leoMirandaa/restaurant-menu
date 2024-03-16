export enum PriceNameType {
  STANDARD = "standard",
  TWELVEOZ = "twelveOz",
  SIXTEENOZ = "sixteenOz",
  SINGLE = "single",
  DOUBLE = "double",
  SMALL = "small",
  MEDIUM = "medium",
}

export type TPriceOption = {
  name: PriceNameType;
  price: number;
};

export type TMenuItem = {
  id: string;
  name: string;
  ingredients: string;
  description: string;
  prices: TPriceOption[];
  imageUrl: string;
  bestSeller: boolean;
};

export type TMenuSection = {
  name: string;
  description: string;
  items: TMenuItem[];
};

export type TAdress = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type TRestaurant = {
  name: string;
  description: string;
  address: TAdress;
  sections: TMenuSection[];
};

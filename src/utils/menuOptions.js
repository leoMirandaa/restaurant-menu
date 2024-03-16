import {
  IconIceCream2,
  IconGlassFull,
  IconMeat,
  IconSalad,
  IconCarrot,
} from "@tabler/icons-react";

export const menuOptions = [
  {
    key: "starters",
    icon: <IconCarrot size={32} />,
    label: <a href="#starters">Starters</a>,
  },
  {
    key: "salads",
    icon: <IconSalad size={32} />,
    label: <a href="#salads">Salads</a>,
  },
  {
    key: "main dishes",
    icon: <IconMeat size={32} />,
    label: <a href="#main dishes">Main dishes</a>,
  },
  {
    key: "beverages",
    icon: <IconGlassFull size={32} />,
    label: <a href="#beverages">Beverages</a>,
  },
  {
    key: "deserts",
    icon: <IconIceCream2 size={32} />,
    label: <a href="#deserts">Desserts</a>,
  },
];

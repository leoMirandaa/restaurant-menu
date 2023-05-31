import { IconIceCream2, IconGlassFull, IconMeat, IconSalad, IconCarrot } from '@tabler/icons-react';

export const menuOptions = [
  {
    key: 'starter',
    icon: <IconCarrot size={32} />,
    label: 'Starter',
  },
  {
    key: 'salad',
    icon: <IconSalad size={32}  />,
    label: 'Salad',
  },
  {
    key: 'main dishes',
    icon: <IconMeat size={32} />,
    label: 'Main dishes',
    
  },
  {
    key: 'beverages',
    icon: <IconGlassFull size={32} />,
    label: 'Beverages',
  },
  {
    key: 'desert',
    icon: <IconIceCream2 size={32}  />,
    label: 'Desert',
  }
]
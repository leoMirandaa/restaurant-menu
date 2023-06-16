import { 
  IconIceCream2, 
  IconGlassFull, 
  IconMeat, 
  IconSalad, 
  IconCarrot 
} from '@tabler/icons-react';

export const menuOptions = [
  {
    key: 'starter',
    icon: <IconCarrot size={32}/>,
    label: <a href="#starter">Starter</a>,
  },
  {
    key: 'salad',
    icon: <IconSalad size={32}/>,
    label: <a href="#salad">Salad</a>,
  },
  {
    key: 'main dishes',
    icon: <IconMeat size={32} />,
    label: <a href="#mainDishes">Main dishes</a>,
  },
  {
    key: 'beverages',
    icon: <IconGlassFull size={32} />,
    label: <a href="#beverages">Beverages</a>,
  },
  {
    key: 'desert',
    icon: <IconIceCream2 size={32}  />,
    label: <a href="#deserts">Deserts</a>,
  }
]
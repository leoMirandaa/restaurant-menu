import { PriceNameType, TMenuItem } from "@/types/dish";

//*** Mock data ***
export const dish_by_id: TMenuItem[] = [
  {
    id: "0",
    name: "French Fries",
    ingredients:
      "Potatoes, peanut oil, sea salt, fresh herbs, garlick cloves, parmesan cheese, black pepper.",
    description:
      "French fries are incredibly versatile and are often enjoyed with burgers, sandwiches, or as a standalone snack. Their simplicity allows for a wide array of flavor variations, making them a popular and comforting treat across diverse cuisines and dining experiences.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 15.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "1",
    name: "Onion rings",
    ingredients:
      "Onions, batter, oil, fresh herbs, pecorino cheese, egg wash, citrus flavor.",
    description:
      "Onion rings are a classic and popular deep-fried appetizer or side dish made from onion slices coated in a crispy batter or breading. They're commonly enjoyed with dipping sauces like ketchup, mayonnaise, or various flavored aiolis, adding an extra layer of taste to this crispy and flavorful treat.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 14.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/12557541/pexels-photo-12557541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "2",
    name: "Super nacho",
    ingredients:
      "Torilla chips, cheese, protein(meat, chicken), tomatoes, jalapenos, ilantro, avocado, sour cream, refried beans.",
    description:
      "Popular Tex-Mex dish featuring crispy tortilla chips topped with a variety of flavorful ingredients. The dish is often assembled by layering the chips, cheese, and toppings, and then baking or broiling until the cheese melts and the ingredients warm through. It's a versatile dish, easily customizable to cater to different tastes, making it a favorite for gatherings, parties, or simply as a satisfying snack.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 12.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/15801063/pexels-photo-15801063/free-photo-of-nachos-with-topping-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "3",
    name: "Buffalo Chicken Wings",
    ingredients:
      "Chicken wings, oil, buffalo sauce, butter, slat, flour, blue cheese, carrot sticks, celery sticks ",
    description:
      "Buffalo chicken wings are a quintessential American appetizer known for their bold, spicy flavor. They typically consist of crispy fried chicken wings coated in a zesty and tangy Buffalo sauce. The dish's heat level can be adjusted to suit individual preferences, making it a beloved choice for gatherings, sports events, or casual dining, offering a spicy and indulgent finger food experience.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 19.99,
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bestSeller: true,
  },
  {
    id: "4",
    name: "Tomato Soup",
    ingredients:
      "Tomatoes, oion, garlic, chicken broth, olive oil, herbs, salt, sugar, milk",
    description:
      "Tomato soup is a comforting and classic dish, cherished for its simplicity and vibrant flavor. It's a smooth, often creamy, soup made primarily from tomatoes, onions, and garlic. The preparation typically involves sautéing the aromatics, simmering the ingredients together, and blending the mixture into a smooth consistency. Tomato soup is often enjoyed on its own as a comforting starter.",
    prices: [
      {
        name: PriceNameType.SMALL,
        price: 10.99,
      },
      {
        name: PriceNameType.MEDIUM,
        price: 16.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "5",
    name: "Mushroom Soup",
    ingredients:
      "Mushrooms, onio, garlic, butter, flour, broth, herbs, salt, cream",
    description:
      "Mushroom soup is a rich and flavorful dish that highlights the earthy essence of mushrooms. Mushroom soup is appreciated for its comforting, earthy notes, making it a perfect starter or a comforting meal, especially when paired with a slice of crusty bread or a side salad.",
    prices: [
      {
        name: PriceNameType.SMALL,
        price: 13.99,
      },
      {
        name: PriceNameType.MEDIUM,
        price: 19.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/5950442/pexels-photo-5950442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "6",
    name: "Caesar Salad",
    ingredients:
      "Romaine lettuce, parmeeesan cheese, croutons, aesar dressing, grilled chiken, bacon bits",
    description:
      "Caesar salad is a beloved classic known for its simple yet flavorful components. Caesar salad is a beloved classic known for its simple yet flavorful components. This salad is assembled by tossing the romaine lettuce with the Caesar dressing, Parmesan cheese, and croutons. It can be served as a starter or as a main dish with the addition of protein. The combination of fresh lettuce, savory dressing, and crunchy elements makes it a popular and satisfying choice for any meal.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 19.99,
      },
    ],
    imageUrl:
      "https://img.freepik.com/free-photo/chicken-parmesan-caesar-salad-with-lettuce-cherry-tomatoes-inside-white-bowl-served-with-sauce-bread_114579-204.jpg?w=996&t=st=1685654701~exp=1685655301~hmac=d4f5e0e0843f2220c3d10250bbece26b7c426b7c13d88a210a8890bd924f6495",
    bestSeller: false,
  },
  {
    id: "7",
    name: "Green Salad",
    ingredients:
      "Leaf lettuche, cucumbers, tomatoes, bell peppers, carrots, radishes, vinaigrette, creamy dreesing, salt, croutons, nuts, grated parmesan",
    description:
      "Green salad is a versatile and refreshing dish typically composed of various fresh greens and a medley of vegetables. Its versatility allows for endless variations, making it a flexible and nutritious accompaniment to a wide range of meals or as a standalone light dish.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 18.99,
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bestSeller: false,
  },
  {
    id: "8",
    name: "Greek Salad",
    ingredients:
      "Tomatoes, cucumbers, red onion, bell peppers, feta cheese, kalamata olives, extra virgin olive oil, red wine vinegar, herbs.",
    description:
      "Greek salad is a classic dish celebrated for its vibrant colors and fresh Mediterranean flavors. The dressing, made with olive oil, vinegar, herbs, and seasonings, is then drizzled over the ingredients, creating a colorful and delectable dish known for its vibrant presentation and refreshing taste. It's a versatile side dish that perfectly complements various Mediterranean or grilled dishes.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 20.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "9",
    name: "Beef Hamburger",
    ingredients:
      "Ground beef, salt, pepper, buns, lettuche, tomato slices, onion, pickles, cheese, ktchup, mustard, mayonnaise, barbecue sauce",
    description:
      "Beef is a widely consumed and versatile meat obtained from cattle. It's renowned for its rich flavor and various cuts. It's a good source of high-quality protein, essential nutrients like iron and B-vitamins, and is often part of various cuisines worldwide. Beef remains a cornerstone in many diets and culinary traditions, offering a wide range of flavors and textures suitable for different dishes and cooking methods.",
    prices: [
      {
        name: PriceNameType.SINGLE,
        price: 10.99,
      },
      {
        name: PriceNameType.DOUBLE,
        price: 16.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "10",
    name: "Meat",
    ingredients:
      "Meat, salt, pepper, oil, butter, garlic powder, onion powder, paprika, dried herbs, tomatoes, bell peppers.",
    description:
      "Meat is a fundamental food source obtained from animals, typically livestock like cattle, pigs, poultry, and more. Meat serves as a staple in numerous diets and recipes, offering a rich taste and diverse culinary possibilities based on cuts, cooking techniques, and flavor profiles.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 32.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "11",
    name: "Lasagna",
    ingredients:
      "Lasagna noodles, ground meat, tomato sauce, ricotta cheese, mozzarella cheese, parmesan cheese, eggs, oregano, salt, pepper.",
    description:
      "Lasagne is a beloved Italian dish renowned for its layers of pasta, savory sauces, and melted cheese. Lasagne is baked until the pasta is tender and the cheese on top turns golden and bubbly, resulting in a comforting, hearty, and indulgent meal. Its flavorful layers and comforting texture make it a beloved choice for gatherings or family meals.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 24.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/14696209/pexels-photo-14696209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "12",
    name: "Spaghetti",
    ingredients:
      "Spaghtti pasta, olive oil, garlic, onion, tomato sauce, italian seasoning, parmesann cheese, fresh basil laves.",
    description:
      "Popular Italian pasta dish that has gained worldwide popularity. It's typically made with long, thin pasta noodles called spaghetti, which are cooked until al dente and then tossed with a variety of sauces and toppings.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 22.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/8916081/pexels-photo-8916081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "13",
    name: "Flautas",
    ingredients:
      "Tortillas, shredded chicken, oil, slat, pepper, cumin, chili powder, garlic powder, monterey cheese, sour cream , guacamole, salsa, shredded lettuche, chopped tomatoes, refried beans, mexican rice.",
    description:
      "Flautas, a popular dish in Mexican cuisine, are savory and crispy rolled tortillas filled with seasoned ingredients. These delicious, crunchy treats are often enjoyed as appetizers or as a main course, accompanied by sides like refried beans or Mexican rice. The versatile filling options and crispy texture make flautas a beloved and flavorful choice in Mexican cuisine.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 13.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/8448323/pexels-photo-8448323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "14",
    name: "Meat Tacos",
    ingredients:
      "Tortillas, chicken, pork, shredded lettuch, dicd tomatos, diced onions, chopped cilantro, salsa(red or green), guacamole, sour ream, monterey cheese, refried beans, hot sauce, cumin, garlic powder, onion, salt.",
    description:
      "Meat tacos are a popular and flavorful Mexican dish consisting of seasoned meat, typically beef, chicken, or pork, served in a tortilla and complemented with an array of fresh toppings. This beloved dish offers a delightful medley of well-seasoned meat, fresh toppings, and the convenience of handheld eating, making it a favorite for its vibrant flavors and customizable elements.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 14.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "15",
    name: "Coffee",
    ingredients:
      "Ground coffee, water, sweeteners(sugar, honey), milk(whole, skim, half-and-half).",
    description:
      "Coffee is a beloved and globally cherished beverage known for its rich aroma and distinct flavor. Coffee is celebrated for its invigorating qualities and the comfort it provides, making it a staple in many morning routines or a perfect companion during moments of relaxation.",
    prices: [
      {
        name: PriceNameType.TWELVEOZ,
        price: 4.99,
      },
      {
        name: PriceNameType.SIXTEENOZ,
        price: 7.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3491211/pexels-photo-3491211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "16",
    name: "Latte",
    ingredients:
      "Expresso, steamed milk, sugar, flavored syrups(vanilla, caramel, hazelnut).",
    description:
      "Latte is a popular and comforting coffee beverage known for its creamy texture and rich espresso flavor. Latte customization often includes adding sweeteners or flavored syrups like vanilla or caramel, catering to individual tastes. It's a comforting and versatile coffee choice, enjoyed for its creamy texture and the balanced blend of espresso and steamed milk.",
    prices: [
      {
        name: PriceNameType.TWELVEOZ,
        price: 10.99,
      },
      {
        name: PriceNameType.SIXTEENOZ,
        price: 16.99,
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    bestSeller: true,
  },
  {
    id: "17",
    name: "Ice Coffee",
    ingredients:
      "Coffee, ice, milk, sweeteners(sugar, syrup, honey), flavorings(vanilla, caramel) whipped cream",
    description:
      "Iced coffee is a refreshing and cool version of the beloved coffee beverage, commonly enjoyed during warmer months or as a delightful pick-me-up any time of year. Iced coffee provides a cool and invigorating way to enjoy the flavors of coffee, whether it's the simple and classic black iced coffee or a customized creation with added ingredients.",
    prices: [
      {
        name: PriceNameType.TWELVEOZ,
        price: 5.99,
      },
      {
        name: PriceNameType.SIXTEENOZ,
        price: 8.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "18",
    name: "Lemonade",
    ingredients: "Lemons, water, sugar, ice, lemon slices, mint leaves.",
    description:
      "Lemonade is a refreshing and tangy beverage enjoyed worldwide for its bright citrus flavor and thirst-quenching qualities. Its simple recipe, typically made from lemon juice, water, and sugar, can be customized with additional ingredients like fresh herbs or fruit slices, offering a delightful and customizable drink perfect for any occasion.",
    prices: [
      {
        name: PriceNameType.TWELVEOZ,
        price: 4.99,
      },
      {
        name: PriceNameType.SIXTEENOZ,
        price: 6.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "19",
    name: "Tequila",
    ingredients: "Blue agave tequila, lime, salt",
    description:
      "Tequila is a distinctive distilled alcoholic beverage made primarily from the blue agave plant. Tequila is celebrated for its unique taste, diverse aging profiles, and its role in crafting a variety of cocktails. From the classic margarita to sipping it neat, tequila presents a rich and flavorful experience. ",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 22.99,
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1529671434436-8fbb37410056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bestSeller: true,
  },
  {
    id: "20",
    name: "Chocolate Ice cream",
    ingredients:
      "Heavy cream, whole milk, cocoa powder, sugar, egg yolks, vanilla extract, salt",
    description:
      "Chocolate ice cream is a beloved frozen dessert featuring a rich, creamy base infused with the indulgent taste of cocoa. This decadent treat is loved for its luxurious texture and deep, chocolatey taste. Whether enjoyed in a cone, a cup, or as a complement to other desserts, chocolate ice cream offers a delightful and satisfying indulgence.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 12.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
  {
    id: "21",
    name: "Vanilla & Strawberry Cake",
    ingredients:
      "Vanilla extract, flour, granulated sugar, butter, eggs, buttermilk bakig powder, bakig soda",
    description:
      "A vanilla and strawberry cake is a delightful dessert that combines the classic flavors of vanilla with the fresh sweetness of strawberries. This cake is a wonderful blend of flavors, combining the familiarity of vanilla with the bright, natural sweetness of strawberries. It offers a delightful contrast of tastes and textures, making it a favorite for celebratory occasions or a sweet treat to indulge in.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 16.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: true,
  },
  {
    id: "22",
    name: "Churros",
    ingredients: "Fluor, Butter, ggs, salt, vegetable oil, sugar, cinnamon",
    description:
      "Churros are a beloved Spanish and Portuguese treat, popular worldwide for their crispy, golden exterior and soft, fluffy interior Churros are often served as a delightful snack or dessert, sometimes accompanied by chocolate sauce or caramel for dipping. Their crispy exterior, combined with the warm and soft interior, makes them a satisfying and indulgent treat.",
    prices: [
      {
        name: PriceNameType.STANDARD,
        price: 10.99,
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/9501466/pexels-photo-9501466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bestSeller: false,
  },
];

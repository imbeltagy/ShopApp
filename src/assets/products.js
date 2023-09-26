const products = [
  {
    id: 0,
    name: "Bluetooth Earphones",
    image: "https://placehold.co/600x400/2ECC71/FFFFFF/png?text=BEarphones&font=montserrat",
    description: "Bluetooth earphones with long battery life.",
    price: 79.99,
    discount: 0.1,
    stock: 45,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra nunc eu diam tristique, id tempor justo faucibus. Nulla.",
  },
  {
    id: 1,
    name: "Smartphone",
    image: "https://placehold.co/600x400/9B59B6/FFFFFF/png?text=Smartphone&font=montserrat",
    description: "A high-quality smartphone with the latest features.",
    price: 499.99,
    discount: 0.15,
    stock: 50,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo auctor, dignissim metus eu, vulputate urna. Sed ut risus nisl. Integer sit amet vehicula lectus.",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Laptop&font=montserrat",
    description: "Powerful laptop for work and entertainment.",
    price: 899.99,
    discount: 0.1,
    stock: 30,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum consectetur libero, vel iaculis tortor suscipit in. In sed venenatis dolor. Nulla euismod, ligula in vestibulum fringilla.",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://placehold.co/600x400/FFC300/FFFFFF/png?text=Smartwatch&font=montserrat",
    description: "Stay connected with this stylish smartwatch.",
    price: 199.99,
    discount: 0.2,
    stock: 25,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus eget felis volutpat, id hendrerit justo faucibus. Integer eget urna ac libero euismod elementum.",
  },
  {
    id: 4,
    name: "Tablet",
    image: "https://placehold.co/600x400/E74C3C/FFFFFF/png?text=Tablet&font=montserrat",
    description: "A versatile tablet for work and entertainment on the go.",
    price: 349.99,
    discount: 0.1,
    stock: 40,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in massa id elit tincidunt bibendum vel in erat. Nulla facilisi.",
  },
  {
    id: 5,
    name: "Headphones",
    image: "https://placehold.co/600x400/1ABC9C/FFFFFF/png?text=Headphones&font=montserrat",
    description: "High-quality headphones for an immersive audio experience.",
    price: 129.99,
    discount: 0.15,
    stock: 60,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nunc nec dui cursus feugiat. Nulla aliquam mi sit amet metus tincidunt, a tempor elit ultrices.",
  },
  {
    id: 6,
    name: "Camera",
    image: "https://placehold.co/600x400/F39C12/FFFFFF/png?text=Camera&font=montserrat",
    description: "Capture moments with this advanced digital camera.",
    price: 599.99,
    discount: 0.1,
    stock: 20,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum eget enim egestas finibus. Cras sollicitudin augue a facilisis.",
  },
  {
    id: 7,
    name: "Gaming Console",
    image: "https://placehold.co/600x400/2ECC71/FFFFFF/png?text=Console&font=montserrat",
    description: "Experience gaming like never before with this console.",
    price: 449.99,
    discount: 0.1,
    stock: 15,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque diam in leo tristique, a venenatis quam semper. Nullam eget nibh nec arcu laoreet cursus.",
  },
  {
    id: 8,
    name: "Fitness Tracker",
    image: "https://placehold.co/600x400/FF5733/FFFFFF/png?text=Tracker&font=montserrat",
    description: "Monitor your fitness goals with this sleek tracker.",
    price: 79.99,
    discount: 0.2,
    stock: 35,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet quam eget augue sodales tristique. Nunc facilisis, urna nec gravida.",
  },
  {
    id: 9,
    name: "Smart Home Speaker",
    image: "https://placehold.co/600x400/E74C3C/FFFFFF/png?text=Speaker&font=montserrat",
    description: "Voice-controlled smart speaker for your home.",
    price: 149.99,
    discount: 0.1,
    stock: 25,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna nec nisl varius iaculis. Fusce consequat, justo ut.",
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    image: "https://placehold.co/600x400/1ABC9C/FFFFFF/png?text=Earbuds&font=montserrat",
    description: "Wireless earbuds with noise-cancelling technology.",
    price: 119.99,
    discount: 0.15,
    stock: 40,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque fermentum magna, id bibendum libero iaculis nec. Ut vel erat in quam fringilla convallis.",
  },
  {
    id: 11,
    name: "4K UHD TV",
    image: "https://placehold.co/600x400/F39C12/FFFFFF/png?text=UHDTV&font=montserrat",
    description: "Enjoy stunning visuals with this 4K UHD TV.",
    price: 699.99,
    discount: 0.1,
    stock: 10,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, libero et dictum placerat, sapien nulla elementum odio, ac consequat lectus.",
  },
  {
    id: 12,
    name: "Drone",
    image: "https://placehold.co/600x400/2ECC71/FFFFFF/png?text=Drone&font=montserrat",
    description: "Capture breathtaking aerial footage with this drone.",
    price: 299.99,
    discount: 0.2,
    stock: 15,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend ligula in tristique bibendum. Fusce vestibulum libero nec nisl scelerisque, vel.",
  },
  {
    id: 13,
    name: "Digital Watch",
    image: "https://placehold.co/600x400/FF5733/FFFFFF/png?text=Watch&font=montserrat",
    description: "Elegant digital watch for everyday use.",
    price: 89.99,
    discount: 0.15,
    stock: 30,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum, tortor nec fermentum pellentesque, ligula sem scelerisque felis.",
  },
  {
    id: 14,
    name: "Wireless Mouse",
    image: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Mouse&font=montserrat",
    description: "High-performance wireless mouse for work and gaming.",
    price: 39.99,
    discount: 0.1,
    stock: 50,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a finibus nisi. Aliquam nec arcu nec augue bibendum.",
  },
  {
    id: 15,
    name: "Bluetooth Speaker",
    image: "https://placehold.co/600x400/FFC300/FFFFFF/png?text=Speaker&font=montserrat",
    description: "Portable Bluetooth speaker for music on the go.",
    price: 59.99,
    discount: 0.15,
    stock: 35,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac odio urna. In blandit tortor sit amet metus pharetra, in fermentum purus tincidunt.",
  },
  {
    id: 16,
    name: "Digital Camera",
    image: "https://placehold.co/600x400/27AE60/FFFFFF/png?text=Camera&font=montserrat",
    description: "Capture memories with this high-resolution digital camera.",
    price: 449.99,
    discount: 0.1,
    stock: 20,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sapien sit amet massa consectetur auctor. Sed sit amet cursus ligula.",
  },
  {
    id: 17,
    name: "Wireless Keyboard",
    image: "https://placehold.co/600x400/E74C3C/FFFFFF/png?text=Keyboard&font=montserrat",
    description: "Wireless keyboard for comfortable typing.",
    price: 49.99,
    discount: 0.1,
    stock: 40,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis varius tellus. Aliquam tristique ultrices dui, id bibendum ligula iaculis vel.",
  },
  {
    id: 18,
    name: "Fitness Smartwatch",
    image: "https://placehold.co/600x400/1ABC9C/FFFFFF/png?text=Smartwatch&font=montserrat",
    description: "Track your fitness goals with this smartwatch.",
    price: 179.99,
    discount: 0.2,
    stock: 25,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus scelerisque, tempor augue nec, elementum dui. Morbi.",
  },
  {
    id: 19,
    name: "Wireless Charger",
    image: "https://placehold.co/600x400/F39C12/FFFFFF/png?text=Charger&font=montserrat",
    description: "Wireless charger for convenient device charging.",
    price: 29.99,
    discount: 0.15,
    stock: 60,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nunc vel tellus vulputate vulputate vel eu ex.",
  },
];

export default products;

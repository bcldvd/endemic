import { Menu } from 'src/app/order/tenant.interface';

const starters = [
  {
    name: 'Bianca',
    description: 'Pizza with rosemary, olive oil and sea salt',
    price: 9,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wNDgwNjc0OS02MjdkLTQ1NGQtYTc2OC00YjA5OTFlZTk2ZTk=',
  },
  {
    name: 'Rucola e parmigiano',
    description: 'Arugula and parmeggiano',
    price: 7,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80MTE3ZjU3Zi1hNTc1LTQ1OWItOWIwNC1jYThmNWViNjcwNTE=',
  },
  {
    name: 'Parma e bufala',
    description: 'Bufala and assortment of italian cold cuts',
    price: 15,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMzg0NjZhOS0wNWMwLTQ4MGItODYwYS05ZjJhOWVlN2FkNmU=',
  },
];

const pizzas = [
  {
    name: 'Margherita',
    description: 'Tomato sauce, fior di latte and basilic',
    price: 14,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC83MmZlNmQxZS0zYWI1LTRiMDctYmJjMy04YjRhZjVhYzYyYWM=',
  },
  {
    name: 'Pericolosa',
    description: `Tomato sauce, fior di latte, n'duja (spicy sausage) and red onions`,
    price: 17,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9kNDk1ODY5My1mMTBiLTRlYjctOWM4OC0yY2FlYTc4N2ExOTY=',
  },
  {
    name: 'Puttanesca',
    description: 'Tomato sauce, garlic, capers, anchovies, "taggiasche" olives and origano',
    price: 17,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9kZWI1NDI1NS1iMzFlLTQ5NDYtYWVlNS04YWQ5NzFhYjFiZjM=',
  },
  {
    name: 'Capra',
    description: 'Goat cheese, honey and rosemary',
    price: 18,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85YjNjNWUzOS02MzQzLTRkYTYtYTE1ZC0xODk5ZWU2NGQ2Y2M=',
  },
  {
    name: 'Tartufo',
    description: 'Fior di Latte, crème de truffe noire, champignons et roquette',
    price: 21,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xOTIzZDMyYy05NmNjLTQ0NWItYmE1Ni0yYjQxNDcyNDNkMDQ=',
  },
  {
    name: 'Fiorentina',
    description: 'Italian herbs ham, spinach, artichokes, fior di latte and parmesan',
    price: 17,
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84ZjYyYzQ0Mi01ZGZlLTRlMDItYTZlNC03ZTFkNzhiMjU5NDU=',
  },
];

export const menu: Menu = [
  {
    name: 'Starters',
    items: starters,
  },
  {
    name: 'Pizzas',
    items: pizzas,
  },
];

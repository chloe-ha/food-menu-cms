const data = {
  general: {
    images: [
      'https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2023/02/25080942/AF_SOOTHR_22.jpeg',
      'https://www.healthyfoodcreation.fr/wp-content/uploads/2023/04/pad-thai-1.jpg',
    ],
    name: 'Viethai',
    description: 'This is a restaurant',
    address: '6 rue du Moulin Joli', // Google API
    openingHours: [
      { day: "Lundi", open: true, windows: [{ from: "12:00", to: "15:00" }] },
      { day: "Mardi", open: true, windows: [] },
      { day: "Mercredi", open: true, windows: [{ from: "12:00", to: "15:00" }, { from: "18:00", to: "21:00" }] },
      { day: "Jeudi", open: true, windows: [{ from: "12:00", to: "15:00" }, { from: "18:00", to: "21:00" }] },
      { day: "Vendredi", open: true, windows: [{ from: "12:00", to: "15:00" }, { from: "18:00", to: "21:00" }] },
      { day: "Samedi", open: true, windows: [{ from: "12:00", to: "15:00" }, { from: "18:00", to: "22:00" }] },
      { day: "Dimanche", open: false, windows: [] },
    ],
    phoneNumber: "+32612121212",
  },
  menus: [
    {
      name: "Entrées",
      items: [
        { name: "Nems", price: 690, image: 'a' },
        { name: "Crêpes", price: 1390, image: 'a' },
        { name: "Rouleaux de printemps", price: 1590, image: 'https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2023/02/25080942/AF_SOOTHR_22.jpeg' },
      ],
    },
    {
      name: "Soupes",
      items: [
        { name: "Pho Spécial", price: 1690, image: 'a' },
        { name: "Pho pas Spécial", price: 1390, image: 'a' },
        { name: "Pho Satay", price: 1590, image: 'a' },
      ],
    },
    {
      name: "Plats",
      items: [
        { name: "Pad Thai", price: 1290, image: 'a' },
        { name: "Pad Thai", price: 1290, image: 'a' },
        { name: "Pad Thai", price: 1290, image: 'a' },
      ],
    },
    {
      name: "Salades",
      items: [
        { name: "Salade mangue", price: 1190 },
      ],
    },
    {
      name: "Boissons",
      items: [
        { name: "Coca/Fanta/??", price: 250 },
        { name: "Thé", price: 250 },
      ],
    }
  ],
};

export type TData = typeof data;

export const getPageData: () => Promise<TData> = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 1000);
})
}
export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Crear Evento",
    route: "/events/create",
  },
  {
    label: "Mi perfil",
    route: "/profile",
  },
  { label: "Dios", route: "/dios" },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};

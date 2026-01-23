import amazon from "../assets/logos/amazon123.svg";
import flipkart from "../assets/logos/flipkart.svg";

export const orders = [
  {
    id: 1,
    source: "Amazon",
    logo: amazon,
    pickup: "Bandra Warehouse",
    delivery: "Andheri East",
    distance: "12 km",
    status: "Available",
  },
  {
    id: 2,
    source: "Flipkart",
    logo: flipkart,
    pickup: "Goregaon Warehouse",
    delivery: "Borivali",
    distance: "18 km",
    status: "In Transit",
  },
];
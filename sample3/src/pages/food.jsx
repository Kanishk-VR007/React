import { Home } from "./home.jsx";

export function Food() {
  const foodItems = [
    { name: "biryani", price: 250 },
    { name: "noodles", price: 150 },
    { name: "friedrice", price: 200 },
  ];

  const mapped = foodItems.map((item) => (
      <Home
          name={item.name}
          price={item.price} />
  ));

  return <>{mapped}</>;
}

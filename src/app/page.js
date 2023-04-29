"use client";
import React from "react";

// const First = () => {
//   return (
//     <div>
//       <Second />
//       <Third />
//     </div>
//   );
// };

// const Second = () => <h2>Namık Korona</h2>;
// const Third = () => {
//   return <p>bu benim mesajım</p>;
// };
const foods = [
  {
    storeName: "KaraFırın",
    foodName: "Ekmek",
    img: "https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45",
  },
  {
    storeName: "Lets Salad",
    foodName: "Salad",
    img: "https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=200&height=200&quality=45",
  },
];

function FoodOrder() {
  return (
    <section className="foodOrder">
      {foods.map((food) => {
        const { storeName, foodName, img } = food;
        return <Food img={img} storeName={storeName} foodName={foodName} />;
      })}
    </section>
  );
}

const Food = ({ img, storeName, foodName }) => {
  return (
    <article className="food">
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  );
};

export default FoodOrder;

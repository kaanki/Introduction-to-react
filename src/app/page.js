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
const firstFood = {
  storeName: "Lets Salad",
  foodName: "Salad",
  img: "https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45",
};
const secondFood = {
  storeName: "KaraFırın",
  foodName: "Ekmek",
  img: "https://images.deliveryhero.io/image/fd-tr/LH/uvwp-hero.jpg?width=200&height=200&quality=45",
};

function FoodOrder() {
  return (
    <section className="foodOrder">
      <Food
        storeName={firstFood.storeName}
        foodName={firstFood.foodName}
        img={firstFood.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae
          doloribus nesciunt doloremque magnam, aut perferendis ducimus nisi
          reprehenderit velit, quos quae quod eos pariatur.
        </p>
        <button>Tıklayınız</button>
      </Food>
      <Food
        storeName={secondFood.storeName}
        foodName={secondFood.foodName}
        img={secondFood.img}
      />
    </section>
  );
}

const Food = ({ img, storeName, foodName, children }) => {
  return (
    <article className="food">
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
      {children}
    </article>
  );
};

export default FoodOrder;

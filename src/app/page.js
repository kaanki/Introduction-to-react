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

const FoodOrder = () => {
  return (
    <section>
      <Food />
      <Food />
    </section>
  );
};

const Food = () => {
  return (
    <article>
      <Image />
      <Order />
      <Store />
    </article>
  );
};

const Image = () => {
  return <img
    src="https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=300&height=200&quality=45"
    alt="ev yemekleri"
  />;
};
const Order = () => <h2>Food Order</h2>;
const Store = () => <h4>Aperatif Limanı</h4>;

export default FoodOrder;

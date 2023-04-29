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
    <section className="foodOrder">
      <Food />
      <Food />
    </section>
  );
};

const Food = () => {
  return (
    <article className="food">
      <Image />
      <Order />
      <Store />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=300&height=200&quality=45"
      alt="ev yemekleri"
    />
  );
};
const Order = () => <h2>Food Order</h2>;
const Store = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Let's Salad</h4>;
};

export default FoodOrder;

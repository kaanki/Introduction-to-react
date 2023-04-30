"use client";
const foods = [
  {
    storeName: "KaraFırın",
    foodName: "Ekmek",
    img: "https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45",
    id: 1,
  },
  {
    storeName: "Lets Salad",
    foodName: "Salad",
    img: "https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=200&height=200&quality=45",
    id: 2,
  },
];

const FoodOrder = () => {
  return (
    <section className="foodOrder">
      <EventExamples />
      {foods.map((food) => {
        return <Food {...food} key={food.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button onClick={() => console.log("tıklayın")}>submit</button>
      </form>
    </section>
  );
};

const Food = (props) => {
  const { img, storeName, foodName } = props;

  return (
    <article className="food">
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>

      <h4>{storeName}</h4>
    </article>
  );
};

export default FoodOrder;

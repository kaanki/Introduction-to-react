"use client";

import Food from "@/components/Food";
import { foods } from "@/components/foods";

const FoodOrder = () => {
  return (
    <>
    <h1>Sipariş Listesi</h1>
    <section className="foodOrder">
      {/* <EventExamples /> */}
      {foods.map((food) => {
        return <Food {...food} key={food.id} />;
      })}
    </section>
    </>
  );
};

// const EventExamples = () => {
//   return (
//     <section>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <h2>form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={(e) => {
//             console.log(e.target.value);
//           }}
//         />
//         <button onClick={() => console.log("tıklayın")}>submit</button>
//       </form>
//     </section>
//   );
// };

export default FoodOrder;

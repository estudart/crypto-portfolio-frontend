import OrderReport from "../components/OrderReport";

function NewOrder() {
  return (
    <div className="App dark-theme">
      {" "}
      <header>
        <h1>Order Report</h1>
      </header>
      <main>
        <OrderReport />
      </main>
    </div>
  );
}

export default NewOrder;

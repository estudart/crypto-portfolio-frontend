import OrderReport from "../components/OrderReport";
import NavBar from "../components/NavBar";

function NewOrder() {
  return (
    <div className="App dark-theme">
      <NavBar />
      {/*
      <header>
        <h1 className="page-title">Order Report</h1>
      </header>
      */}
      <main className="container" style={{ height: "90vh" }}>
        <OrderReport />
      </main>
    </div>
  );
}

export default NewOrder;

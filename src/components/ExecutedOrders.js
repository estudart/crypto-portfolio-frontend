import "../App.css";

export default function ExecutedOrders({ data }) {
  return (
    <tr>
      <td>{data.symbol}</td>
      <td>{data.side}</td>
      <td>{data.quantity}</td>
      <td>{data.price}</td>
      <td>{data.currency}</td>
      <td>{data.data_insercao}</td>
    </tr>
  );
}

export default function Portfolio({ data }) {
  return (
    <tbody>
      <tr>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {data.symbol}
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {parseFloat(data.quantity).toFixed(4)}
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {parseFloat(data.price).toFixed(4)}
        </td>
      </tr>
    </tbody>
  );
}

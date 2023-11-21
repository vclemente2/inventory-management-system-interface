import React from "react";
import styles from "./DataTable.module.scss";
import Item from "../../types/Item";
import { currencyFormat } from "../../utils/currencyFormat";

interface DataTableProps {
  data: Item[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Nomenclatura</th>
          {/* <th>Code</th> */}
          <th>Largura (cm)</th>
          <th>Comprimento (cm)</th>
          <th>Espessura (cm)</th>
          <th>Área (m²)</th>
          <th>Hub</th>
          <th>Quantidade em Estoque</th>
          <th>Nº Palete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((peca, index) => (
          <tr key={index}>
            <td>{peca.category}</td>
            <td>{peca.name}</td>
            {/* <td>{peca.code}</td> */}
            <td>{peca.width ? peca.width : "-"}</td>
            <td>{peca.length ? peca.length : "-"}</td>
            <td>{peca.thickness ? peca.thickness : "-"}</td>
            <td>
              {peca.area ? currencyFormat.format(peca.area / 10000) : "-"}
            </td>
            <td>{peca.hub}</td>
            <td>{peca.stock}</td>
            <td>{Math.round(Math.random() * 100)}</td>
          </tr>
        ))}
        {generateTotalRow({ data })}
      </tbody>
    </table>
  );
};

function generateTotalRow({ data }: DataTableProps) {
  const { totalArea, totalStock } = data.reduce(
    (totals, item) => {
      totals.totalArea += item.area;
      totals.totalStock += item.stock;
      return totals;
    },
    { totalArea: 0, totalStock: 0 }
  );

  return (
    <tr key="total" className={styles.totalRow} id="totalRow">
      <td>TOTAL</td>
      {/* <td></td> */}
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{currencyFormat.format(totalArea / 10000)}</td>
      <td></td>
      <td>{totalStock}</td>
      <td></td>
    </tr>
  );
}

export default DataTable;

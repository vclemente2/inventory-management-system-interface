import React from "react";
import styles from "./DataTable.module.scss";
import Item from "../../types/Item";

interface DataTableProps {
  data: Item[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Código</th>
          <th>Largura (cm)</th>
          <th>Comprimento (cm)</th>
          <th>Espessura (cm)</th>
          <th>Área (m²)</th>
          <th>Categoria</th>
          <th>Hub</th>
          <th>Quantidade em Estoque</th>
        </tr>
      </thead>
      <tbody>
        {data.map((peca, index) => (
          <tr key={index}>
            <td>{peca.name}</td>
            <td>{peca.description}</td>
            <td>{peca.code}</td>
            <td>{peca.width}</td>
            <td>{peca.length}</td>
            <td>{peca.thickness}</td>
            <td>{peca.area / 10000}</td>
            <td>{peca.category}</td>
            <td>{peca.hub}</td>
            <td>{peca.stock}</td>
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
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{(totalArea / 10000).toFixed(2)}</td>
      <td></td>
      <td></td>
      <td>{totalStock}</td>
    </tr>
  );
}

export default DataTable;

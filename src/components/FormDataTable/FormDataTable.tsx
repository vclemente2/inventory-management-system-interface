import React from "react";
import styles from "./FormDataTable.module.scss";
import Form from "../../types/Form";
import { currencyFormat } from "../../utils/currencyFormat";

interface DataTableProps {
  data: Form[];
}

const FormDataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Regional</th>
          <th>ID Forma</th>
          <th>Empreendimento</th>
          <th>Area Total (m²)</th>
          <th>Valor Forma (R$)</th>
          <th>Valor Sistema Segurança (R$)</th>
          <th>Valor Kit Acessórios (R$)</th>
          <th>Valor Total Ativos (R$)</th>
          <th>Status Forma</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.regional}</td>
            <td>{item.nomenclaturaInterna}</td>
            <td>{item.nomeObra}</td>
            <td>{currencyFormat.format(item.areaTotal)}</td>
            <td>{currencyFormat.format(item.custoForma)}</td>
            <td>{currencyFormat.format(item.custoSistemaSeguranca)}</td>
            <td>{currencyFormat.format(item.custoAcessorios)}</td>
            <td>
              {currencyFormat.format(
                item.custoForma +
                  item.custoSistemaSeguranca +
                  item.custoAcessorios
              )}
            </td>
            <td>{item.status}</td>
          </tr>
        ))}
        {generateTotalRow({ data })}
      </tbody>
    </table>
  );
};

function generateTotalRow({ data }: DataTableProps) {
  const {
    totalArea,
    totalFormValue,
    totalSecuritySystemValue,
    totalAccessoriesValue,
    totalValue
  } = data.reduce(
    (totals, item) => {
      totals.totalArea += item.areaTotal;
      totals.totalFormValue += item.custoForma;
      totals.totalSecuritySystemValue += item.custoSistemaSeguranca;
      totals.totalAccessoriesValue += item.custoAcessorios;
      totals.totalValue +=
        item.custoForma + item.custoSistemaSeguranca + item.custoAcessorios;
      return totals;
    },
    {
      totalArea: 0,
      totalFormValue: 0,
      totalSecuritySystemValue: 0,
      totalAccessoriesValue: 0,
      totalValue: 0
    }
  );

  return (
    <tr key="total" className={styles.totalRow} id="totalRow">
      <td>TOTAL</td>
      <td></td>
      <td></td>
      <td>{currencyFormat.format(totalArea)}</td>
      <td>{currencyFormat.format(totalFormValue)}</td>
      <td>{currencyFormat.format(totalSecuritySystemValue)}</td>
      <td>{currencyFormat.format(totalAccessoriesValue)}</td>
      <td>{currencyFormat.format(totalValue)}</td>
      <td></td>
    </tr>
  );
}

export default FormDataTable;

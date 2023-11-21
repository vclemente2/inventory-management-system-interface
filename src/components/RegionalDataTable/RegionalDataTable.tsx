import React from "react";
import styles from "./RegionalDataTable.module.scss";
import Form from "../../types/Form";
import formAndRegionalList from "../../data/formAndRegionalList";
import { currencyFormat } from "../../utils/currencyFormat";

interface DataTableProps {
  data: Form[];
}

const RegionalDataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Regional</th>
          <th>Area Total (m²)</th>
          <th>Qtd. Formas</th>
          <th>Valor Formas (R$)</th>
          <th>Valor Sistema Segurança (R$)</th>
          <th>Valor Kit Acessórios (R$)</th>
          <th>Valor Total Ativos (R$)</th>
        </tr>
      </thead>
      <tbody>
        {formAndRegionalList.map((item, index) => (
          <tr key={index}>
            <td>{item.regional}</td>
            <td>
              {currencyFormat.format(
                data
                  .filter((cur) => cur.regional === item.regional)
                  .reduce((acc, cur) => acc + cur.areaTotal, 0)
              )}
            </td>
            <td>
              {data
                .filter((cur) => cur.regional === item.regional)
                .reduce((acc) => acc + 1, 0)}
            </td>
            <td>
              {currencyFormat.format(
                data
                  .filter((cur) => cur.regional === item.regional)
                  .reduce((acc, cur) => acc + cur.custoForma, 0)
              )}
            </td>
            <td>
              {currencyFormat.format(
                data
                  .filter((cur) => cur.regional === item.regional)
                  .reduce((acc, cur) => acc + cur.custoSistemaSeguranca, 0)
              )}
            </td>
            <td>
              {currencyFormat.format(
                data
                  .filter((cur) => cur.regional === item.regional)
                  .reduce((acc, cur) => acc + cur.custoAcessorios, 0)
              )}
            </td>
            <td>
              {currencyFormat.format(
                data
                  .filter((cur) => cur.regional === item.regional)
                  .reduce(
                    (acc, cur) =>
                      acc +
                      cur.custoForma +
                      cur.custoSistemaSeguranca +
                      cur.custoAcessorios,
                    0
                  )
              )}
            </td>
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
    totalQtdForms,
    totalFormValue,
    totalSecuritySystemValue,
    totalAccessoriesValue,
    totalValue
  } = data.reduce(
    (totals, item) => {
      totals.totalArea += item.areaTotal;
      totals.totalQtdForms += 1;
      totals.totalFormValue += item.custoForma;
      totals.totalSecuritySystemValue += item.custoSistemaSeguranca;
      totals.totalAccessoriesValue += item.custoAcessorios;
      totals.totalValue +=
        item.custoForma + item.custoSistemaSeguranca + item.custoAcessorios;
      return totals;
    },
    {
      totalArea: 0,
      totalQtdForms: 0,
      totalFormValue: 0,
      totalSecuritySystemValue: 0,
      totalAccessoriesValue: 0,
      totalValue: 0
    }
  );

  return (
    <tr key="total" className={styles.totalRow} id="totalRow">
      <td>TOTAL</td>
      <td>{currencyFormat.format(totalArea)}</td>
      <td>{Math.round(totalQtdForms)}</td>
      <td>{currencyFormat.format(totalFormValue)}</td>
      <td>{currencyFormat.format(totalSecuritySystemValue)}</td>
      <td>{currencyFormat.format(totalAccessoriesValue)}</td>
      <td>{currencyFormat.format(totalValue)}</td>
    </tr>
  );
}

export default RegionalDataTable;

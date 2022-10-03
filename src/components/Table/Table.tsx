import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["table"];

interface Props extends IntrinsicElements {}

/**
 * **Table Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const Table: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <table className="usa-table" {...rest}>
        <caption>Scrollable table</caption>
        <colgroup>
          <col />
        </colgroup>
        <colgroup span={2}></colgroup>
        <colgroup span={2}></colgroup>
        <thead>
          <tr>
            <th rowSpan={2}>
              Federal Budget
              <br />
              Baseline Projections
            </th>
            <th colSpan={2} scope="colgroup" className="text-center">
              2017
            </th>
            <th colSpan={2} scope="colgroup" className="text-center">
              2018
            </th>
            <th colSpan={2} scope="colgroup" className="text-center">
              2019
            </th>
            <th colSpan={2} scope="colgroup" className="text-center">
              2020
            </th>
            <th colSpan={2} scope="colgroup" className="text-center">
              2021
            </th>
            <th colSpan={2} scope="colgroup" className="text-center">
              Hist. Avg.
            </th>
          </tr>
          <tr>
            <th scope="col" className="text-right">
              %GDP
            </th>
            <th scope="col" className="text-right">
              USD*
            </th>
            <th scope="col" className="text-right">
              %GDP
            </th>
            <th scope="col" className="text-right">
              USD*
            </th>
            <th scope="col" className="text-right">
              %GDP
            </th>
            <th scope="col" className="text-right">
              USD*
            </th>
            <th scope="col" className="text-right">
              %GDP
            </th>
            <th scope="col" className="text-right">
              USD*
            </th>
            <th scope="col" className="text-right">
              %GDP
            </th>
            <th scope="col" className="text-right">
              USD*
            </th>
            <th scope="col" className="text-right">
              %GDP
            </th>
            <th scope="col" className="text-right">
              USD*
            </th>
          </tr>
        </thead>
        <tr>
          <th scope="row">Revenue</th>
          <td className="font-mono-sm text-tabular text-right">17.2%</td>
          <td className="font-mono-sm text-tabular text-right">3,316</td>
          <td className="font-mono-sm text-tabular text-right">16.4%</td>
          <td className="font-mono-sm text-tabular text-right">3,338</td>
          <td className="font-mono-sm text-tabular text-right">16.3%</td>
          <td className="font-mono-sm text-tabular text-right">3,490</td>
          <td className="font-mono-sm text-tabular text-right">16.7%</td>
          <td className="font-mono-sm text-tabular text-right">3,678</td>
          <td className="font-mono-sm text-tabular text-right">16.7%</td>
          <td className="font-mono-sm text-tabular text-right">3,827</td>
          <td className="font-mono-sm text-tabular text-right">17.4%</td>
          <td className="font-mono-sm text-tabular text-right">3,381</td>
        </tr>
        <tr>
          <th scope="row">Outlays</th>
          <td className="font-mono-sm text-tabular text-right">20.6%</td>
          <td className="font-mono-sm text-tabular text-right">3,982</td>
          <td className="font-mono-sm text-tabular text-right">20.2%</td>
          <td className="font-mono-sm text-tabular text-right">4,142</td>
          <td className="font-mono-sm text-tabular text-right">21.0%</td>
          <td className="font-mono-sm text-tabular text-right">4,470</td>
          <td className="font-mono-sm text-tabular text-right">21.3%</td>
          <td className="font-mono-sm text-tabular text-right">4,685</td>
          <td className="font-mono-sm text-tabular text-right">21.6%</td>
          <td className="font-mono-sm text-tabular text-right">4,949</td>
          <td className="font-mono-sm text-tabular text-right">20.3%</td>
          <td className="font-mono-sm text-tabular text-right">4,198</td>
        </tr>
        <tr>
          <th scope="row">Budget Deficit</th>
          <td className="font-mono-sm text-tabular text-right">-3.5%</td>
          <td className="font-mono-sm text-tabular text-right">-665</td>
          <td className="font-mono-sm text-tabular text-right">-3.8%</td>
          <td className="font-mono-sm text-tabular text-right">-804</td>
          <td className="font-mono-sm text-tabular text-right">-4.6%</td>
          <td className="font-mono-sm text-tabular text-right">-981</td>
          <td className="font-mono-sm text-tabular text-right">-4.6%</td>
          <td className="font-mono-sm text-tabular text-right">-1,008</td>
          <td className="font-mono-sm text-tabular text-right">-4.9%</td>
          <td className="font-mono-sm text-tabular text-right">-1,123</td>
          <td className="font-mono-sm text-tabular text-right">-2.9%</td>
          <td className="font-mono-sm text-tabular text-right">-483</td>
        </tr>
        <tr>
          <th scope="row">Debt Held by Public</th>
          <td className="font-mono-sm text-tabular text-right">76.0%</td>
          <td className="font-mono-sm text-tabular text-right">14,665</td>
          <td className="font-mono-sm text-tabular text-right">77.4%</td>
          <td className="font-mono-sm text-tabular text-right">15,688</td>
          <td className="font-mono-sm text-tabular text-right">79.2%</td>
          <td className="font-mono-sm text-tabular text-right">16,762</td>
          <td className="font-mono-sm text-tabular text-right">80.9%</td>
          <td className="font-mono-sm text-tabular text-right">17,872</td>
          <td className="font-mono-sm text-tabular text-right">83.1%</td>
          <td className="font-mono-sm text-tabular text-right">18,998</td>
          <td className="font-mono-sm text-tabular text-right">41.7%</td>
          <td className="font-mono-sm text-tabular text-right">8,065</td>
        </tr>
      </table>
      <p>* in billions of dollars. Data for illustration purposes only.</p>
    </>
  );
};

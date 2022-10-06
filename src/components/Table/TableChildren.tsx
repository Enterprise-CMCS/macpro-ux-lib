import React from "react";
import { TD } from "./TD";
import { TH } from "./TH";

export const BorderlessTableChildren = [
  <thead key="BorderlessTableChildren__thead">
    <tr>
      <TH>Document title</TH>
      <TH>Description</TH>
      <TH>Year</TH>
    </tr>
  </thead>,
  <tbody key="BorderlessTableChildren__tbody">
    <tr>
      <TH rowHeader>Declaration of Independence</TH>
      <TD>
        Statement adopted by the Continental Congress declaring independence
        from the British Empire.
      </TD>
      <TD>1776</TD>
    </tr>
    <tr>
      <TH rowHeader>Bill of Rights</TH>
      <TD>
        The first ten amendments of the U.S. Constitution guaranteeing rights
        and freedoms.
      </TD>
      <TD>1791</TD>
    </tr>
    <tr>
      <TH rowHeader>Declaration of Sentiments</TH>
      <TD>
        A document written during the Seneca Falls Convention outlining the
        rights that American women should be entitled to as citizens.
      </TD>
      <TD>1848</TD>
    </tr>
    <tr>
      <TH rowHeader>Emancipation Proclamation</TH>
      <TD>
        An executive order granting freedom to slaves in designated southern
        states.
      </TD>
      <TD>1863</TD>
    </tr>
  </tbody>,
];

export const ScrollableTableChildren = [
  <colgroup key="ScrollableTableChildren__colgroup1">
    <col />
  </colgroup>,
  <colgroup span={2} key="ScrollableTableChildren__colgroup2"></colgroup>,
  <colgroup span={2} key="ScrollableTableChildren__colgroup3"></colgroup>,
  <thead key="ScrollableTableChildren__thead">
    <tr>
      <TH rowSpan={2}>
        Federal Budget
        <br />
        Baseline Projections
      </TH>
      <TH colSpan={2} scope="colgroup" className="text-center">
        2017
      </TH>
      <TH colSpan={2} scope="colgroup" className="text-center">
        2018
      </TH>
      <TH colSpan={2} scope="colgroup" className="text-center">
        2019
      </TH>
      <TH colSpan={2} scope="colgroup" className="text-center">
        2020
      </TH>
      <TH colSpan={2} scope="colgroup" className="text-center">
        2021
      </TH>
      <TH colSpan={2} scope="colgroup" className="text-center">
        Hist. Avg.
      </TH>
    </tr>
    <tr>
      <TH className="text-right">%GDP</TH>
      <TH className="text-right">USD*</TH>
      <TH className="text-right">%GDP</TH>
      <TH className="text-right">USD*</TH>
      <TH className="text-right">%GDP</TH>
      <TH className="text-right">USD*</TH>
      <TH className="text-right">%GDP</TH>
      <TH className="text-right">USD*</TH>
      <TH className="text-right">%GDP</TH>
      <TH className="text-right">USD*</TH>
      <TH className="text-right">%GDP</TH>
      <TH className="text-right">USD*</TH>
    </tr>
  </thead>,
  <tbody key="ScrollableTableChildren__tbody">
    <tr>
      <TH rowHeader>Revenue</TH>
      <TD className="font-mono-sm text-tabular text-right">17.2%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,316</TD>
      <TD className="font-mono-sm text-tabular text-right">16.4%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,338</TD>
      <TD className="font-mono-sm text-tabular text-right">16.3%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,490</TD>
      <TD className="font-mono-sm text-tabular text-right">16.7%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,678</TD>
      <TD className="font-mono-sm text-tabular text-right">16.7%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,827</TD>
      <TD className="font-mono-sm text-tabular text-right">17.4%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,381</TD>
    </tr>
    <tr>
      <TH rowHeader>Outlays</TH>
      <TD className="font-mono-sm text-tabular text-right">20.6%</TD>
      <TD className="font-mono-sm text-tabular text-right">3,982</TD>
      <TD className="font-mono-sm text-tabular text-right">20.2%</TD>
      <TD className="font-mono-sm text-tabular text-right">4,142</TD>
      <TD className="font-mono-sm text-tabular text-right">21.0%</TD>
      <TD className="font-mono-sm text-tabular text-right">4,470</TD>
      <TD className="font-mono-sm text-tabular text-right">21.3%</TD>
      <TD className="font-mono-sm text-tabular text-right">4,685</TD>
      <TD className="font-mono-sm text-tabular text-right">21.6%</TD>
      <TD className="font-mono-sm text-tabular text-right">4,949</TD>
      <TD className="font-mono-sm text-tabular text-right">20.3%</TD>
      <TD className="font-mono-sm text-tabular text-right">4,198</TD>
    </tr>
    <tr>
      <TH rowHeader>Budget Deficit</TH>
      <TD className="font-mono-sm text-tabular text-right">-3.5%</TD>
      <TD className="font-mono-sm text-tabular text-right">-665</TD>
      <TD className="font-mono-sm text-tabular text-right">-3.8%</TD>
      <TD className="font-mono-sm text-tabular text-right">-804</TD>
      <TD className="font-mono-sm text-tabular text-right">-4.6%</TD>
      <TD className="font-mono-sm text-tabular text-right">-981</TD>
      <TD className="font-mono-sm text-tabular text-right">-4.6%</TD>
      <TD className="font-mono-sm text-tabular text-right">-1,008</TD>
      <TD className="font-mono-sm text-tabular text-right">-4.9%</TD>
      <TD className="font-mono-sm text-tabular text-right">-1,123</TD>
      <TD className="font-mono-sm text-tabular text-right">-2.9%</TD>
      <TD className="font-mono-sm text-tabular text-right">-483</TD>
    </tr>
    <tr>
      <TH rowHeader>Debt Held by Public</TH>
      <TD className="font-mono-sm text-tabular text-right">76.0%</TD>
      <TD className="font-mono-sm text-tabular text-right">14,665</TD>
      <TD className="font-mono-sm text-tabular text-right">77.4%</TD>
      <TD className="font-mono-sm text-tabular text-right">15,688</TD>
      <TD className="font-mono-sm text-tabular text-right">79.2%</TD>
      <TD className="font-mono-sm text-tabular text-right">16,762</TD>
      <TD className="font-mono-sm text-tabular text-right">80.9%</TD>
      <TD className="font-mono-sm text-tabular text-right">17,872</TD>
      <TD className="font-mono-sm text-tabular text-right">83.1%</TD>
      <TD className="font-mono-sm text-tabular text-right">18,998</TD>
      <TD className="font-mono-sm text-tabular text-right">41.7%</TD>
      <TD className="font-mono-sm text-tabular text-right">8,065</TD>
    </tr>
  </tbody>,
];

export const StackedTableChildren = [
  <thead key="StackedTableChildren__thead">
    <tr>
      <TH>Document title</TH>
      <TH>Description</TH>
      <TH>Year</TH>
    </tr>
  </thead>,
  <tbody key="StackedTableChildren__tbody">
    <tr>
      <TH data-label="Document title" rowHeader>
        Declaration of Independence
      </TH>
      <TD data-label="Description">
        Statement adopted by the Continental Congress declaring independence
        from the British Empire.
      </TD>
      <TD data-label="Year">1776</TD>
    </tr>
    <tr>
      <TH data-label="Document title" rowHeader>
        Bill of Rights
      </TH>
      <TD data-label="Description">
        The first ten amendments of the U.S. Constitution guaranteeing rights
        and freedoms.
      </TD>
      <TD data-label="Year">1791</TD>
    </tr>
    <tr>
      <TH data-label="Document title" rowHeader>
        Declaration of Sentiments
      </TH>
      <TD data-label="Description">
        A document written during the Seneca Falls Convention outlining the
        rights that American women should be entitled to as citizens.
      </TD>
      <TD data-label="Year">1848</TD>
    </tr>
    <tr>
      <TH data-label="Document title" rowHeader>
        Emancipation Proclamation
      </TH>
      <TD data-label="Description">
        An executive order granting freedom to slaves in designated southern
        states.
      </TD>
      <TD data-label="Year">1863</TD>
    </tr>
  </tbody>,
];

export const SortableTableChildren = [
  <thead key="SortableTableChildren__thead">
    <tr>
      <TH dataSortable>Name</TH>
      <TH dataSortable sorted>
        Order admitted to union
      </TH>
      <TH dataSortable>Date of ratification vote</TH>
      <TH dataSortable>Date admitted to union</TH>
      <TH dataSortable>Percent of voters in favor of ratification</TH>
      <TH dataSortable>Votes cast in favor of ratification</TH>
      <TH dataSortable>Estimated population at time of admission</TH>
    </tr>
  </thead>,
  <tbody key="SortableTableChildren__tbody">
    <tr>
      <TH rowHeader>Hawaii</TH>
      <TD dataSortValue="50">50th</TD>
      <TD dataSortValue="331844400">Jun. 27, 1959</TD>
      <TD dataSortValue="327092400">Aug. 21, 1959</TD>
      <TD
        dataSortValue="0.943"
        className="font-mono-sm text-tabular text-right"
      >
        94.3%
      </TD>
      <TD
        dataSortValue="132773"
        className="font-mono-sm text-tabular text-right"
      >
        132,773
      </TD>
      <TD
        dataSortValue="632772"
        className="font-mono-sm text-tabular text-right"
      >
        632,772
      </TD>
    </tr>
    <tr>
      <TH rowHeader>Alaska</TH>
      <TD dataSortValue="49">49th</TD>
      <TD dataSortValue="431978400">Apr. 24, 1956</TD>
      <TD dataSortValue="346960800">Jan. 3, 1959</TD>
      <TD
        dataSortValue="0.681"
        className="font-mono-sm text-tabular text-right"
      >
        68.1%
      </TD>
      <TD
        dataSortValue="17477"
        className="font-mono-sm text-tabular text-right"
      >
        17,477
      </TD>
      <TD
        dataSortValue="226167"
        className="font-mono-sm text-tabular text-right"
      >
        226,167
      </TD>
    </tr>
    <tr>
      <TH rowHeader>Arizona</TH>
      <TD dataSortValue="48">48th</TD>
      <TD dataSortValue="1858528800">Feb. 9, 1911</TD>
      <TD dataSortValue="1826560800">Feb. 14, 1912</TD>
      <TD
        dataSortValue="0.787"
        className="font-mono-sm text-tabular text-right"
      >
        78.7%
      </TD>
      <TD
        dataSortValue="12187"
        className="font-mono-sm text-tabular text-right"
      >
        12,187
      </TD>
      <TD
        dataSortValue="204354"
        className="font-mono-sm text-tabular text-right"
      >
        204,354
      </TD>
    </tr>
    <tr>
      <TH rowHeader>New Mexico</TH>
      <TD dataSortValue="47">47th</TD>
      <TD dataSortValue="1835287200">Nov. 5, 1911</TD>
      <TD dataSortValue="1829930400">Jan. 6, 1912</TD>
      <TD
        dataSortValue="0.703"
        className="font-mono-sm text-tabular text-right"
      >
        70.3%
      </TD>
      <TD
        dataSortValue="31742"
        className="font-mono-sm text-tabular text-right"
      >
        31,742
      </TD>
      <TD
        dataSortValue="327301"
        className="font-mono-sm text-tabular text-right"
      >
        327,301
      </TD>
    </tr>
    <tr>
      <TH rowHeader>Oklahoma</TH>
      <TD dataSortValue="46">46th</TD>
      <TD dataSortValue="1965751200">Sep. 17, 1907</TD>
      <TD dataSortValue="1960567200">Nov. 16, 1907</TD>
      <TD
        dataSortValue="0.712"
        className="font-mono-sm text-tabular text-right"
      >
        71.2%
      </TD>
      <TD
        dataSortValue="180333"
        className="font-mono-sm text-tabular text-right"
      >
        180,333
      </TD>
      <TD
        dataSortValue="1657155"
        className="font-mono-sm text-tabular text-right"
      >
        1,657,155
      </TD>
    </tr>
    <tr>
      <TH rowHeader>Utah</TH>
      <TD dataSortValue="45">45th</TD>
      <TD dataSortValue="2340122400">Nov. 5, 1895</TD>
      <TD dataSortValue="2334938400">Jan. 4, 1896</TD>
      <TD
        dataSortValue="0.805"
        className="font-mono-sm text-tabular text-right"
      >
        80.5%
      </TD>
      <TD
        dataSortValue="31305"
        className="font-mono-sm text-tabular text-right"
      >
        31,305
      </TD>
      <TD
        dataSortValue="210779"
        className="font-mono-sm text-tabular text-right"
      >
        210,779
      </TD>
    </tr>
  </tbody>,
];

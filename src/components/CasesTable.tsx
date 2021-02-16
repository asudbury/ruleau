import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef<SVGSVGElement>((props, ref) => (
    <AddBox {...props} ref={ref} />
  )),
  Check: forwardRef<SVGSVGElement>((props, ref) => (
    <Check {...props} ref={ref} />
  )),
  Clear: forwardRef<SVGSVGElement>((props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Delete: forwardRef<SVGSVGElement>((props, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef<SVGSVGElement>((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef<SVGSVGElement>((props, ref) => (
    <Edit {...props} ref={ref} />
  )),
  Export: forwardRef<SVGSVGElement>((props, ref) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef<SVGSVGElement>((props, ref) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef<SVGSVGElement>((props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef<SVGSVGElement>((props, ref) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef<SVGSVGElement>((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef<SVGSVGElement>((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef<SVGSVGElement>((props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef<SVGSVGElement>((props, ref) => (
    <Search {...props} ref={ref} />
  )),
  SortArrow: forwardRef<SVGSVGElement>((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef<SVGSVGElement>((props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef<SVGSVGElement>((props, ref) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

export default function CasesTable() {
  return (
    <MaterialTable
      title=""
      icons={tableIcons}
      columns={[
        { title: "Case ID", field: "caseID" },
        { title: "Process ID", field: "processID" },
        { title: "Date Processed", field: "dateProcessed" },
        {
          title: "Open/Close",
          field: "status",
          lookup: { 1: "Open", 2: "Closed" },
        },
        {
          title: "Result",
          field: "result",
          lookup: { 1: "Passed", 2: "Warning", 3: "Failed" },
        },
        { title: "No. of Failures", field: "failures" },
      ]}
      data={[
        {
          caseID: "r192344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192341",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192342",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192343",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192355",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192354",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192365",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192374",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r193365",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r196345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r792344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r992345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r292344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r392345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r492344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r792345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r192344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r198344",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192345",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r198744",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192365",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
        {
          caseID: "r194544",
          processID: "1",
          status: 1,
          result: 3,
          failures: 3,
        },
        {
          caseID: "r192445",
          processID: "1",
          status: 1,
          result: 1,
          failures: 1,
        },
      ]}
      options={{
        filtering: true,
      }}
    />
  );
}

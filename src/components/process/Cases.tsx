import React from "react";
import MaterialTable from "material-table";
import TableIcons from "../TableIcons";
import WorkIcon from "@material-ui/icons/Work";
import { CaseMockData } from "../../mockData/CaseMockData";
import { makeStyles, TablePagination } from "@material-ui/core";

interface CasesProps {
  openClosed: string[];
  result: string[];
  onCaseSelected: (caseID: string) => void;
}

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: 480,
    },
  },
}));

export default function Cases({
  openClosed,
  result,
  onCaseSelected,
}: CasesProps) {
  console.log("Cases openClose=" + openClosed);
  console.log("Cases result=" + result);

  if (openClosed.length === 0) {
    openClosed = [];
  }

  if (openClosed.length === 1) {
    if (openClosed[0] === "") {
      openClosed = [];
    }
  }

  if (result.length === 0) {
    result = [];
  }

  if (result.length === 1) {
    if (result[0] === "") {
      result = [];
    }
  }

  const alignment = "left";

  const caseData = CaseMockData;

  function handleSelectedRow(
    selectedRow:
      | {
          dateProcessed: string;
          caseID: string;
          executionNo: number;
          status: number;
          result: number;
          failures: number;
        }
      | undefined
  ) {
    if (selectedRow) {
      const caseId = selectedRow.caseID;

      onCaseSelected(caseId);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MaterialTable
        title=""
        icons={TableIcons}
        onFilterChange={(filters) => {
          console.log("onFilterChange", filters);
        }}
        components={{
          Pagination: (props) => (
            <TablePagination
              {...props}
              rowsPerPageOptions={[5, 10, 50, 100, 500, 1000]}
              style={{ width: "400px" }}
            />
          ),
        }}
        columns={[
          {
            title: "Case ID",
            field: "caseID",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            render: (rowData) => (
              <div>
                <WorkIcon fontSize="small" color="secondary" /> {rowData.caseID}
              </div>
            ),
          },
          {
            title: "Open/Closed",
            field: "status",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: { 1: "Open", 2: "Closed" },
            defaultFilter: openClosed,
          },
          {
            title: "Result",
            field: "result",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: { 1: "Passed", 2: "Warning", 3: "Failed" },
            defaultFilter: result,
          },
          {
            title: "Date Processed",
            field: "dateProcessed",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "Execution No.",
            field: "executionNo",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "No. of Failures",
            field: "failures",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
        ]}
        data={caseData}
        onRowClick={(evt, selectedRow) => handleSelectedRow(selectedRow)}
        options={{
          headerStyle: {
            whiteSpace: "nowrap",
          },
          filtering: true,
          padding: "dense",
          searchFieldAlignment: alignment,
          toolbarButtonAlignment: alignment,
          exportButton: true,
          exportFileName: "cases",
          pageSize: 10,
        }}
      />
    </div>
  );
}

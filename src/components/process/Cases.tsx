import React, { useEffect, createRef } from "react";
import MaterialTable from "material-table";
import TableIcons from "../TableIcons";
import WorkIcon from "@material-ui/icons/Work";
import { CaseTestData } from "./CaseTestData";
import { TablePagination } from "@material-ui/core";

interface CasesProps {
  onCaseSelected: (caseID: string) => void;
}

export default function Cases({ onCaseSelected }: CasesProps) {
  const tableRef = createRef();

  const alignment = "left";

  useEffect(() => {
    console.log(tableRef.current);
  }, [tableRef]);

  const caseData = CaseTestData;

  function handleSelectedRow(
    selectedRow:
      | {
          dateProcessed: string;
          caseID: string;
          executionNo: string;
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

  return (
    <div>
      <MaterialTable
        tableRef={tableRef}
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
            title: "Open/Close",
            field: "status",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: { 1: "Open", 2: "Closed" },
          },
          {
            title: "Result",
            field: "result",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: { 1: "Passed", 2: "Warning", 3: "Failed" },
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

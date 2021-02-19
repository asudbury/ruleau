import React, { useEffect, createRef } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MaterialTable from "material-table";
import TableIcons from "../TableIcons";
import WorkIcon from "@material-ui/icons/Work";
import { Box } from "@material-ui/core";
import { CaseTestData } from "./CaseTestData";

interface CasesProps {
  onCaseSelected: (caseID: string) => void;
}

export default function Cases({ onCaseSelected }: CasesProps) {
  const tableRef = createRef();

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));

  const alignment = isSmallDevice === true ? "right" : "left";

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
      <Box component="div" overflow="auto">
        <div>
          <MaterialTable
            tableRef={tableRef}
            title=""
            icons={TableIcons}
            onFilterChange={(filters) => {
              console.log("onFilterChange", filters);
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
                    <WorkIcon fontSize="small" color="secondary" />{" "}
                    {rowData.caseID}
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
              exportButton: true,
              exportFileName: "cases",
              pageSize: 10,
              pageSizeOptions: [5, 10, 50, 100, 500, 1000],
            }}
          />
        </div>
      </Box>
    </div>
  );
}

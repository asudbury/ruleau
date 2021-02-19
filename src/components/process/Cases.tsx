import React, { useEffect, createRef } from "react";
import MaterialTable from "material-table";
import TableIcons from "../TableIcons";
import WorkIcon from "@material-ui/icons/Work";
import { Box } from "@material-ui/core";

interface CasesProps {
  onCaseSelected: (caseID: string) => void;
}

export default function Cases({ onCaseSelected }: CasesProps) {
  const tableRef = createRef();

  useEffect(() => {
    console.log("hello world!");

    console.log(tableRef.current);

    /// console.log(tableRef.current.columns[1])
  }, [tableRef]);

  console.log(tableRef);

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
      <Box component="div"  overflow="auto">
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
                render: (rowData) => (
                  <div>
                    <WorkIcon fontSize="small" color="secondary" />{" "}
                    {rowData.caseID}
                  </div>
                ),
              },
              { title: "Execution No.", field: "executionNo" },
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
                dateProcessed: "24 July 2020",
                caseID: "r192344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192341",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192342",
                executionNo: "1",
                status: 2,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192343",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192355",
                executionNo: "1",
                status: 2,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192354",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192365",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192374",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "25 July 2020",
                caseID: "r193365",
                executionNo: "1",
                status: 2,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "26 July 2020",
                caseID: "r192344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 August 2020",
                caseID: "r196345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 September 2020",
                caseID: "r792344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "01 October 2020",
                caseID: "r992345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r292344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 2,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r392345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r492344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 9,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 4,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r792345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r198344",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192345",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r198744",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192365",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r194544",
                executionNo: "1",
                status: 1,
                result: 3,
                failures: 3,
              },
              {
                dateProcessed: "24 July 2020",
                caseID: "r192445",
                executionNo: "1",
                status: 1,
                result: 1,
                failures: 1,
              },
            ]}
            onRowClick={(evt, selectedRow) => handleSelectedRow(selectedRow)}
            options={{
              filtering: true,
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

import { logDebug } from "../utils/Logger";

export default function useUrlManager() {
  let processIndex = 2;
  let caseIndex = 4;

  const publicUrl = process.env.PUBLIC_URL;
  let processName = "";
  let formattedProcessName = "";
  let caseName = "";

  logDebug("useUrlManager", "publicUrl=" + publicUrl);

  if (window.location.pathname.indexOf("process") > -1) {
    const segments = window.location.pathname.split("/");

    if (segments[processIndex] === "process") {
      processIndex = 3;
      caseIndex = 5;
    }

    processName = segments[processIndex];

    logDebug("useUrlManager", "processName=" + processName);

    formattedProcessName = segments[processIndex].replace(
      new RegExp("-", "g"),
      " "
    );

    logDebug("useUrlManager", "formattedProcessName=" + formattedProcessName);

    caseName = segments[caseIndex];

    logDebug("useUrlManager", "caseName=" + caseName);
  }

  return [publicUrl, processName, formattedProcessName, caseName];
}

export default function useProcess() {
  const processId = localStorage.getItem("processId");
  const procesName = localStorage.getItem("processName");
  const processDescription = localStorage.getItem("processDescription");

  return [processId, procesName, processDescription];
}

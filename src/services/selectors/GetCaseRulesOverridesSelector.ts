import GetCaseOverridesSelector from "./GetCaseOverridesSelector";
import { logWarning } from "../../utils/Logger";

export default function GetCaseRulesOverridesSelector(ruleName: string): any {
  const overrides = GetCaseOverridesSelector();

  if (overrides.payload) {
    if (Array.isArray(overrides.payload)) {
      return overrides.payload.filter(
        (item: { rule_name: string }) => item.rule_name === ruleName
      );
    }

    logWarning("GetCaseRulesOverridesSelector", "null");
    return [];
  }

  logWarning("GetCaseRulesOverridesSelector", "null");
  return [];
}

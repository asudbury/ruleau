import React, { useState } from "react";
import CaseContainer from "../containers/CaseContainer";
import RulesContainer from "../containers/RulesContainer";

export default function CasePage() {
  const [open, setOpen] = useState(false);

  function handleShowRuleDocumentation() {
    setOpen(true);
  }

  function handleHideRuleDocumentation() {
    setOpen(false);
  }

  return (
    <>
      <CaseContainer onShowRuleDocumentation={handleShowRuleDocumentation} />
      <RulesContainer open={open} onClose={handleHideRuleDocumentation} />
    </>
  );
}

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleSummary from "./RuleSummary";
import RuleDetails from "./RuleDetails";

export default function CaseSummary() {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RuleSummary
            hasWarning={true}
            ruleName="r12"
            ruleDescription="Customer must be over 18"
            ruleSubDescription="This card is only available to adults"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            hasWarning={false}
            ruleName="r13"
            ruleDescription="Income must be over £50k"
            ruleSubDescription="Regular income must be over £50,000 per year"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

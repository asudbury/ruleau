import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleSummary from "../rule/RuleSummary";
import RuleSource from "../rule/RuleSource";

export default function Rules() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RuleSummary
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="r12"
            ruleDescription="Customer must be over 18"
            ruleSubDescription="This card is only available to adults"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleSource />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="r13"
            ruleDescription="Income must be over £50k"
            ruleSubDescription="Regular income must be over £50,000 per year"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleSource />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

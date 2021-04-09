import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleAccordion from "../rule/RuleAccordion";
import RuleDetails from "../rule/RuleDetails";
interface CaseRulesProps {
  warningSelected: string;
}

export default function CaseRules({
  warningSelected,
}: CaseRulesProps): JSX.Element {
  function expandAccordion(ruleName: string): boolean {
    return warningSelected === ruleName;
  }
  return (
    <div>
      <Accordion expanded={expandAccordion("RUL001")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RuleAccordion
            isRuleDefinition={false}
            hasWarning={true}
            ruleName="RUL001"
            ruleDescription="KYC Risk is low"
            ruleSubDescription="Check KYC customer risk to ensure it is within parameters"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={true} name="RUL001" />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandAccordion("RUL002")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="RUL002"
            ruleDescription="No bankruptcy flag"
            ruleSubDescription="Borrower should not have filed any bankruptcies"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} name="RUL002" />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandAccordion("RUL003")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="RUL003"
            ruleDescription="No open tax liens"
            ruleSubDescription="Borrower should not have any open tax liens"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} name="RUL003" />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandAccordion("RUL004")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={false}
            hasWarning={true}
            ruleName="RUL004"
            ruleDescription="No CCJs"
            ruleSubDescription="Borrower should not have any County Court Judgements"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} name="RUL004" />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandAccordion("RUL005")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="RUL005"
            ruleDescription="No hard enquiries"
            ruleSubDescription="Borrower should not have any hard enquiries in the past 6 months"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} name="RUL005" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import React from "react";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import CaseContainer from "../containers/CaseContainer";

export default function CasePage() {
  return (
    <>
      <AppBreadcrumbs page={Page.CasePage} />
      <CaseContainer />
    </>
  );
}

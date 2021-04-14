import { Box, Divider } from "@material-ui/core";
import React from "react";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import AppBreadcrumbsv2 from "../components/AppBreadcrumbsv2";
import AppBreadcrumbs2 from "../components/AppBreadcrumbs2";
import AppBreadcrumbs2v2 from "../components/AppBreadcrumbs2v2";
import AppBreadcrumbs3 from "../components/AppBreadcrumbs3";
import AppBreadcrumbs4 from "../components/AppBreadcrumbs4";
import CaseContainer from "../containers/CaseContainer";

export default function CasePage() {
  return (
    <>
      <Box ml={5} mt={1} mr={1}>
        <AppBreadcrumbs page={Page.CasePage} />
        <AppBreadcrumbsv2 page={Page.CasePage} />
        <AppBreadcrumbs2 page={Page.CasePage} />
        <AppBreadcrumbs2v2 page={Page.CasePage} />
        <AppBreadcrumbs3 page={Page.CasePage} />
        <AppBreadcrumbs4 page={Page.CasePage} />
      </Box>
      <Box ml={5} mt={1} mr={1}>
        <Divider />
      </Box>
      <CaseContainer />
    </>
  );
}

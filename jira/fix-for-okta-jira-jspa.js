/*Fix for Okta: https://jira.atlassian.com/browse/JRASERVER-39140*/

AJS.toInit(function () {
   if (AJS.params.loggedInUser === "" && window.location.href.endsWith("/secure/Dashboard.jspa")) window.location.href = "https://example.okta.com/app/jira_onprem/exkkwoyl32SmTcCDZ0x7/sso/saml";
});

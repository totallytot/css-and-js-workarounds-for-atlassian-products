/*
Problem: https://jira.atlassian.com/browse/CONFSERVER-44116
Environment: Confluence 5.10.9 
*/
AJS.toInit(function(){
   if (!AJS.params.isConfluenceAdmin) {
      AJS.$('#aPermissionsTable, .steptitle, .stepdesc, .buttons-container:eq(2)').hide();
   }
});

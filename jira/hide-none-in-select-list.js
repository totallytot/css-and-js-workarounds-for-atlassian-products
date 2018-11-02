/*
All we have to do here is to add the following JavaScript snippet in the description of the field in field scheme of the project 
(scheme should be created specifically for the affected project). So, make sure the field description is edited in the appropriate 
field configuration and use ID of required CF in JS snippet below. 
*/
JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
    hideNone();
});
AJS.$(document).ready(function () {
    hideNone();
});
function hideNone(){
    AJS.$("#customfield_10000 option[value='-1']").remove(); // AJS.$("#security option[value='-1']").remove();  for Security Level system field
}

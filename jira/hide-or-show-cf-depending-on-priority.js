JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
    hideOrShowPriority();
});
AJS.$(document).ready(function () {
    hideOrShowPriority();
});
AJS.$('#priority').change(function () {
    hideOrShowPriority();
});
function hideOrShowPriority(){
    var priorityVal = AJS.$('#priority').val();
    if (priorityVal == '2'){
    AJS.$("#customfield_10806").closest('div.field-group').show();
    }
    else {
    AJS.$("#customfield_10806").closest('div.field-group').hide();
    }
}

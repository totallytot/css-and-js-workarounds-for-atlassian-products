// Working with the NEW_CONTENT_ADDED event: https://developer.atlassian.com/server/jira/platform/extending-inline-edit-for-jira-plugins/
AJS.toInit(function() {
    AJS.$("#assignee-field").val("");
    JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function(e, context, reason) {
        if (reason == JIRA.CONTENT_ADDED_REASON.dialogReady) {
            setTimeout(function() { 
                AJS.$("#assignee-field").val(""); 
            }, 50);
        }
    });
});

AJS.toInit(function() {
    AJS.$("#assignee-field").val("");
    JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function() {
        setTimeout(function() { 
            AJS.$("#assignee-field").val(""); 
        }, 50);
    });
});

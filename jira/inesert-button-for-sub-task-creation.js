<!-- "Create sub-task" button for PCS project -->
<script>
function insertSubtaskCreationBtn() {
    let projectKey = JIRA.API.Projects.getCurrentProjectKey();
    if (projectKey === "PCS") {
        AJS.$('#opsbar-opsbar-admin').append("<button class='aui-button' id='custom-sb-btn'>Create sub-task</button>");
        let createSubtaskBtn = AJS.$('#custom-sb-btn');
        createSubtaskBtn.click(function() {
            let issueId = JIRA.Issue.getIssueId();
            JIRA.Forms.createSubtaskForm({parentIssueId: issueId}).asDialog({windowTitle: 'Create Subtask'}).show();
        });
    }
}
AJS.toInit(function () {
    insertSubtaskCreationBtn();
});
AJS.$(document).bind(JIRA.Events.ISSUE_REFRESHED, function() {
    insertSubtaskCreationBtn();
});
</script>
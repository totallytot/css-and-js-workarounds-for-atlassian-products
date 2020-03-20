AJS.toInit(function() {
    if (window.location.href.includes("/browse/")) {
        var affectedGroup = "SchaefferPoeschlClient";
        var affectedUser = AJS.params.loggedInUser;
        hideItemsForUserInCertainGroup(affectedUser, affectedGroup);

        AJS.$(document).bind('dialogContentReady', function() { 
            hideItemsForUserInCertainGroup(affectedUser, affectedGroup); 
        });
        
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function () { 
            hideItemsForUserInCertainGroup(affectedUser, affectedGroup); 
        });
    }
});

function hideItemsForUserInCertainGroup(user, group) {
    let userGroups = getUserGroups(user);
    let searchResult = userGroups.find(element => element.name == group);
    if (searchResult != null) {
        AJS.$("#jeti-trigger").hide(); //hide email button
        AJS.$("#wrap-labels").hide(); //hide labels
        AJS.$("#assignee-val").parents("dl").hide(); //hide assignee
        AJS.$("#resolution-val").parents("li").hide(); //hide resolution
    }
}

function getUserGroups(user) {
    let groups = null;
    AJS.$.ajax({
        url: "/rest/api/latest/user?username="+user+"&expand=groups",
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) { groups = data.groups.items; }
    });
    return groups;
}

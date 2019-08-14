<script type='text/javascript'>

// To use just place in JIRA Announcement Banner
// Disables 'Everyone' option when sharing filters
// Fires on page load

AJS.toInit(function()
{
    // Scrapes URL path    
    var urlPath = $(location).attr('pathname');
    // Sets variable for later use to disable checking for tag presence
    var intervalID;

    // check url if we are editing a filter
    if (urlPath.toLowerCase().indexOf("editfilter") >= 0) {
        intervalID = window.setInterval(callBack, 10);
    }
    // Listens for edit filter dialog
    AJS.$(".edit-filter").click(function() {
        intervalID = window.setInterval(callBack, 10);
    });

    // Removes unwanted elements
    function callBack() 
    {
        var everyone = AJS.$("#share_type_selector_viewers option[value='global']");
        var warning = AJS.$("#share_warning");
        var addGlobal = AJS.$("#share_add_global");
        var desc = AJS.$("#share_type_description");
        var groupShare = AJS.$("#share_group");

        if (everyone.length > 0) {
        clearInterval(intervalID);
        everyone.remove();
        warning.remove();
        addGlobal.remove();
        desc.remove();
        groupShare.removeAttr("style");
        }
    }

});

</script>

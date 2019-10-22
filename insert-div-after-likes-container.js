

<!-- Inserts div element for certain spaces after likes and label container -->
<script>
AJS.toInit(function(){
    setTimeout(insertCACommunityDivElement, 1000);
    function insertCACommunityDivElement() {
        let v8DivElement = "<div style='padding-bottom: 10px; border-top: 1px solid black; padding-top: 10px;'>Please post your question in the <a href='https://community.com/s/service'>Community</a></div>";
        let fseDivElement = "<div style='padding-bottom: 10px; border-top: 1px solid black; padding-top: 10px;'>Please post your question in the <a href='https://community.com/s/field'>Community</a></div>";
        let spaceKey = AJS.Meta.get("space-key");
        if(AJS.$("#likes-and-labels-container").length > 0) {
            switch (spaceKey) {
                case "PV":
                    AJS.$(v8DivElement).insertAfter("#likes-and-labels-container");
                break;
                case "PUBS":
                case "PUBC":
                    AJS.$(fseDivElement).insertAfter("#likes-and-labels-container");
                break;
            }       
        }
    }
});
</script>

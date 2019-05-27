<!-- Fix for DD space that is added as a separate application on Okta side. Should be placed in header -->
<script>
if (window.location.href.endsWith("display/DD/index.action") || window.location.href.endsWith("viewpage.action?spaceKey=DD&title=index.action")) {
    window.location.href = "https://wiki.example.com/display/DD";
}
</script>

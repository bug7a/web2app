
const page9 = {};
page9.PAGE_ID = "page9";

page9.openInDefaultView = function() {

    defaultView.clear();

    const box = defaultView.getContainerBox();
    // Out of this function, use "page9.box" for "box".
    page9.box = box;

    topBar.setVisible(0);
    //topBar.setBorderLine(1);
    //topBar.setTitle("Page 5 Title");
    //topBar.setBackgroundColor("#FFFFFF");
    //topBar.setTitleColor("rgba(0, 0, 0, 0.8)");
    //topBar.setTitleAlign("center");
    //topBar.menuButton.setVisible(1);
    
    bottomBar.setVisible(1);
    bottomBar.selectItemByIndex(1);
    bottomBar.setBorderLine(1);

    defaultView.setTopAndBottomOuterSpaces(0, bottomBar.getHeight());

    box.color = "transparent";
    box.scrollY = 0;

    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page9.htm");

    console.log("Opened page id: " + page9.PAGE_ID);

    defaultView.setVisible(1);

}
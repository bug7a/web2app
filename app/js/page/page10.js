
const page10 = {};
page10.PAGE_ID = "page10";

page10.openInDefaultView = function() {

    defaultView.clear();

    const box = defaultView.getContainerBox();
    // Out of this function, use "page10.box" for "box".
    page10.box = box;

    topBar.setVisible(0);
    //topBar.setBorderLine(1);
    //topBar.setTitle("Page 5 Title");
    //topBar.setBackgroundColor("#FFFFFF");
    //topBar.setTitleColor("rgba(0, 0, 0, 0.8)");
    //topBar.setTitleAlign("center");
    //topBar.menuButton.setVisible(1);
    
    bottomBar.setVisible(1);
    bottomBar.selectItemByIndex(3);
    bottomBar.setBorderLine(1);

    defaultView.setTopAndBottomOuterSpaces(0, bottomBar.getHeight());

    box.color = "transparent";
    box.scrollY = 0;

    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page10.htm");

    console.log("Opened page id: " + page10.PAGE_ID);

    defaultView.setVisible(1);

}
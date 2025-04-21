
const page4 = {};
page4.PAGE_ID = "page4";

page4.openInDefaultView = function() {

    defaultView.clear();

    const box = defaultView.getContainerBox();
    // Out of this function, use "page4.box" for "box".
    page4.box = box;

    topBar.setVisible(0);
    
    bottomBar.setVisible(1);
    bottomBar.selectItemByIndex(3);
    bottomBar.setBorderLine(1);

    defaultView.setTopAndBottomOuterSpaces(0, bottomBar.getHeight());

    box.color = "transparent";
    box.scrollY = 0;

    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page4.htm");

    console.log("Opened page id: " + page4.PAGE_ID);

    defaultView.setVisible(1);

}
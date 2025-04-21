
const page5 = {};
page5.PAGE_ID = "page5";

page5.openInDefaultView = function() {

    defaultView.clear();

    const box = defaultView.getContainerBox();
    // Out of this function, use "page5.box" for "box".
    page5.box = box;

    topBar.setVisible(1);
    topBar.setBorderLine(1);
    topBar.setTitle("Page Title");
    topBar.setBackgroundColor("#FFFFFF");
    topBar.setTitleColor("rgba(0, 0, 0, 0.8)");
    topBar.setTitleAlign("center");
    topBar.backButton.setVisible(0);
    topBar.menuButton.setVisible(1);
    
    bottomBar.setVisible(1);
    bottomBar.selectItemByIndex(4);
    bottomBar.setBorderLine(1);

    defaultView.setTopAndBottomOuterSpaces(topBar.getHeight(), bottomBar.getHeight());

    box.color = "white";
    box.scrollY = 0;

    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page5.htm");

    /*
    page5.content = box.webView.getContent();

    // You can call a function in page1.htm
    box.webView.getIframe().onload = function() {
        page5.content.testFuncInPage5();
    };
    */
    
    console.log("Opened page id: " + page5.PAGE_ID);

    defaultView.setVisible(1);

}
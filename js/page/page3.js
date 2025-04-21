
const page3 = {};
page3.PAGE_ID = "page3";

page3.openInDefaultView = function() {

    defaultView.clear();

    const box = defaultView.getContainerBox();
    // Out of this function, use "page3.box" for "box".
    page3.box = box;

    topBar.setVisible(1);
    topBar.setBorderLine(0);
    topBar.setTitle("Page Title");
    topBar.setBackgroundColor("#FFFFFF");
    topBar.setTitleColor("rgba(0, 0, 0, 0.8)");
    topBar.setTitleAlign("center");
    topBar.backButton.setVisible(0);
    topBar.menuButton.setVisible(1);
    
    bottomBar.setVisible(1);
    bottomBar.selectItemByIndex(2);
    bottomBar.setBorderLine(0);

    defaultView.setTopAndBottomOuterSpaces(topBar.getHeight(), bottomBar.getHeight());

    box.color = "transparent";
    box.scrollY = 0;

    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page3.htm");

    /*
    page3.content = box.webView.getContent();

    // You can call a function in page1.htm
    box.webView.getIframe().onload = function() {
        page3.content.testFuncInPage3();
    };
    */

    console.log("Opened page id: " + page3.PAGE_ID);

    defaultView.setVisible(1);

}
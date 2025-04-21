
const page1 = {};
page1.PAGE_ID = "page1";

page1.openInDefaultView = function() {

    defaultView.clear();

    const box = defaultView.getContainerBox();
    // Out of this function, use "page1.box" for "box".
    page1.box = box;

    topBar.setVisible(0);
    
    bottomBar.setVisible(1);
    bottomBar.selectItemByIndex(0);
    bottomBar.setBorderLine(0);

    defaultView.setTopAndBottomOuterSpaces(0, bottomBar.getHeight());

    box.color = "transparent";
    box.scrollY = 0;

    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page1.htm");
    //that.loadHTMLFile("https://bug7a.github.io/");

    page1.content = box.webView.getContent();

    // You can call a function in page1.htm
    box.webView.getIframe().onload = function() {
        page1.content.testFuncInPage1();
    };
    
    console.log("Opened page id: " + page1.PAGE_ID);

    defaultView.setVisible(1);

}
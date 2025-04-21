
const page8 = {};
page8.PAGE_ID = "page8";

// Parameters:
page8.parameter1 = "";

page8.openInSmallView = function(resultCallback = function(results) {}) {

    smallView.clear();

    // BOX: Page container.
    const box = smallView.getContainerBox();
    // Out of this function, use "page8.box" for "box".
    page8.box = box;

    box.color = "white";
    box.height = 400;

    // WEB VIEW:
    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page8.htm");

    // LABEL: Centered text.
    /*
    box.lblCenteredText = createLabel(0, 0, "auto", "auto");
    box.add(that);
    // Get parameter:
    that.text = page8.parameter1;
    that.onResize(function(self) {
        self.center();
    });
    */

    smallView.onClose(function closed() {

        // Send back result.
        let results = {};
        results.result1 = "Result 1";
        
        resultCallback(results);

    });

    smallView.setVisible(1);

}
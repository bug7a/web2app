const page7 = {}
page7.ID = "page7"

page7.openInSecondView = function() {

    secondView.clear()

    const box = secondView.getContainerBox()
    // Out of this function, use "page7.box" for "box".
    page7.box = box

    box.color = "white"

    // WEB VIEW:
    box.webView = UIWebView.create(0, 0, box.width, box.height);
    box.add(that);
    that.loadHTMLFile("page7.htm");

    // CLOSE BUTTON: Close button.
    box.btnClose = UICloseButton.create();
    box.add(that);
    that.background.border = 0;
    that.background.color = "rgba(0, 0, 0, 0.05)";
    //that.imgClose.elem.style.filter = "invert(100%)";
    //that.imgClose.center();
    that.onClick(function() {
        secondView.close();
    })

    secondView.setVisible(1)
    console.log("Opened page id: " + page7.ID)
}
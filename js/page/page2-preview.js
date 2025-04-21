
const page2Preview = {};
page2Preview.PAGE_ID = "page2Preview";

// Parameters:
page2Preview.titleText = "";
page2Preview.descriptionText = "";
page2Preview.iconFile = "";

page2Preview.openInSmallView = function() {

    smallView.clear();

    // BOX: Page container.
    const box = smallView.getContainerBox();
    page2Preview.box = box;

    box.color = "white";
    box.height = 500;

    // LABEL: title.
    box.lblTitle = createLabel(0, 80, box.width, "auto");
    box.add(that);
    that.text = page2Preview.titleText;
    that.fontSize = 30;
    that.textAlign = "center";

    // LABEL: description.
    box.lblDesc = createLabel(0, 114, box.width, "auto");
    box.add(that);
    that.text = page2Preview.descriptionText;
    that.fontSize = 18;
    that.textColor = "gray";
    that.textAlign = "center";

    // IMAGE: icon.
    box.imgIcon = createImage(0, 0, 160, 160);
    box.add(that);
    that.load(page2Preview.iconFile);
    that.center();

    smallView.setVisible(1);

}
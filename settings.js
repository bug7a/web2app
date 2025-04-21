// *** SETTINGS FOR THE APP ***

const settings = {};

settings.APP_ID = "app-id";

settings.USED_WIDTH = 600; // Examples: 550, 600, 700, "100%" (Dont use when page.fit is active)
// NOTE: If you want bigger objects use smaller USED_WIDTH:
settings.MAX_ZOOMABLE_WIDTH = 800;

// Start Page
settings.startAtThisPage = function() {
    settings.openPageById("page1");
};

// loading view 1: dark, 2: light
settings.launchViewBackgroundColor = "rgba(0, 0, 0, 0.85)"; // "whitesmoke", "black", "rgba(0, 0, 0, 0.85)"

// *** BOTTOM BAR SETTINGS ***
settings.bottomBar_height = 80; // 70, 80, 90
settings.bottomBar_showSelectedText = 1; // 0: hide, 1: show (Info on selected icon)
settings.bottomBar_iconHighlightColor = "#141414"; // "#141414", "whitesmoke"
settings.bottomBar_reverseColorOfSelectedIcon = 1; // 0: normal, 1: reverse color of selected icon

settings.getBottomBarItemDataList = function() {

    const dataList = [
        { pageId: "page1", iconFile: "assets/ui-bottom-bar/home.svg", text: "PAGE 1", highLightColor: "#5ABB9F" }, // page1.htm and js/page/page1.js files to edit classic html page
        { pageId: "page2", iconFile: "assets/ui-bottom-bar/search.svg", text: "PAGE 2"  }, // Advanced example
        //{ pageId: "page9", iconFile: "assets/ui-bottom-bar/search.svg", text: "PAGE 9"  }, // Classic html page
        { pageId: "page3", iconFile: "assets/ui-bottom-bar/component.svg", text: "PAGE 3", highLightColor: "indianred" },
        { pageId: "page4", iconFile: "assets/ui-bottom-bar/note.svg", text: "PAGE 4" }, // Advanced example
        //{ pageId: "page10", iconFile: "assets/ui-bottom-bar/note.svg", text: "PAGE 10"  }, // Classic html page
        { pageId: "page5", iconFile: "assets/ui-bottom-bar/setting.svg", text: "PAGE 5" }
    ];

    // NOTE: To edit selection icon for pages edit bottomBar.selectItemByIndex(X); in the pageX.js files.

    return dataList;

};

settings.BudgetBackgroundColor = "indianred";
settings.page4BudgeIndex = 3; // If you change the order of bottom bar items, change this value too.

// NOTE: Edit page title for Page3, Page5 in page3.js and page5.js files.
// NOTE: Edit htm file url in pageX.js files.

// *** SIDE BAR SETTINGS ***

// Login view button on side bar
settings.showLoginViewButtonOnSideBar = 1; // 0: hide button, 1: show button
// This page just ui example is not working.

settings.sideBarTitle = "CATEGORIES"; // Side menu title

settings.getSideMenuBarItemDataList = function() {

    let dataList = [
        { itemId: "page1", title: "Page 1", info: "DefaultView", iconFile: "assets/page10.png" },
        { itemId: "page6", title: "Page 6", info: "Load URL", iconFile: "assets/page6.png" },
        { itemId: "page7", title: "Page 7", info: "SecondView", iconFile: "assets/page7.png" },
        { itemId: "page8", title: "Page 8", info: "SmallView", iconFile: "assets/page8.png" },
    ];

    return dataList;

};

// Open page from bottom bar, side bar or pageX.js files
settings.openPageById = function(pageId) {
    switch(pageId) {

        case "page1":
            // page1.htm and js/page/page1.js files to edit classic html page.
            page1.openInDefaultView();
            break;

        case "page2":
            page2.openInDefaultView();
            break;

        case "page3":
            page3.openInDefaultView();
            break;

        case "page4":
            page4.openInDefaultView();
            break;

        case "page5":
            page5.openInDefaultView();
            break;

        // URL example
        case "page6":
            page6.openInSecondView();
        break;

        // Full view example
        case "page7":
            page7.openInSecondView();
        break;

        // Small view example
        case "page8":
            page8.openInSmallView();
        break;

        // extra classic html page (to replace page 2 if desired)
        case "page9":
            page9.openInDefaultView();
        break;

        // extra classic html page (to replace page 4 if desired)
        case "page10":
            page10.openInDefaultView();
        break;

    }
};

// *** Call function from html page ***
// in any html file you can call this function:
// window.top.runAction("actionId", { param1: "value1", param2: "value2" });
// <a href="javascript:window.top.runAction('actionId', { param1: 'value1', param2: 'value2' });">Click me</a>
window.runAction = function(actionId, params = {}) {

    switch (actionId) {

        case "showpage8":
            settings.openPageById("page8");
            break;

        case "showpage7":
            settings.openPageById("page7");
            break;

    }

}

// This template was developed to show how to use basic.js

// VARIABLES:
let waitingView;

// First running function.
const prepareApp = function() {

    // Platforms: "web", "android", "ios"
    console.log("Platform: " + app.getPlatformId());

    // If more resolution is desired for large screen device:
    //settings.USED_WIDTH = app.calculateResolution();

    // Supports all screen resolutions (Orientation: portrait)
    page.fit(settings.USED_WIDTH, settings.MAX_ZOOMABLE_WIDTH);

    // Show launch view.
    launchView.create({
        backgroundColor: settings.launchViewBackgroundColor,
    });

    // Safearea outer spaces.
    app.getSafeAreaOuterSpaces(function() {

        // Ready to use: app.safeAreaInsetTop, app.safeAreaInsetBottom, app.safeAreaInsetLeft, app.safeAreaInsetRight
        
        var safeAreaOptions = {
            width: settings.USED_WIDTH,
            topOuterSpace: app.safeAreaInsetTop,
            bottomOuterSpace: app.safeAreaInsetBottom,
            backgroundColor: "transparent",
            outerBackgroundColor: "white",
            statusBarBackgroundColor: "rgba(0, 0, 0, 0.05)",
        };

        // SAFE AREA: App container.
        safeArea.create(safeAreaOptions);
        // Objects are first created in the "safeArea". (Previous value is the "page")
        setDefaultContainerBox(safeArea.getContainerBox());

        // Change launchView layer after safeArea created.
        launchView.showOnSafeArea();
        
        // Start the app.
        startApp();

    });

};

// Second running function.
const startApp = function() {

    //saveGlobal(); // Close this line to store data.
    // NOTE: For reseting global variables, run saveGlobal() before loadGlobal():

    loadGlobal();

    safeArea.setBackgroundColor("transparent");
    safeArea.setOuterBackgroundColor("white"); // works only at iOS devices.
    safeArea.setStatusBarBackgroundColor("rgba(0, 0, 0, 0.0)"); // works only at notched devices.
    
    // UI DEFAULT VIEW: Default page view:
    defaultView.create({
        backgroundColor: "white",
        scrollY: 1,
        showWithMotion: 0,
    });

    // UI TOP BAR: Title and buttons:
    topBar.create({
        height: 105,
        showWithMotion: 0,
    });
    topBar.menuButton.onClick(showSideBar);

    // UI BOTTOM BAR: Image buttons at bottom:
    bottomBar.create({
        height: settings.bottomBar_height,
        showSelectedText: settings.bottomBar_showSelectedText,
        highLightColor: settings.bottomBar_iconHighlightColor,
        reverseColorOfSelectedIcon: settings.bottomBar_reverseColorOfSelectedIcon,
        normalIconSpace: 16,
        selectedIconSpace: 16,
    });
    bottomBar.createItemsByDataList(settings.getBottomBarItemDataList());
    bottomBar.onItemClick(settings.openPageById);

    // UI BUDGE FOR BOTTOM BAR: Tasks count.
    for ( var i = 0; i < settings.getBottomBarItemDataList().length; i++) {
        bottomBar["tasksUIBudge" + i] = bottomBar.createBudgeOnItem({ itemIndex: i});
        that.setValue(0);
        that.setColor(settings.BudgetBackgroundColor);
    }

    updateBottomBarTasksUIBudge();

    // SECOND VIEW: If you need a view without unload page in defaultView:
    secondView.create({
        backgroundColor: "white",
        scrollY: 1,
        showWithMotion: 1,
    });

    // SMALL VIEW: For small pages, extra info, custom dialogs etc.
    smallView.create({
        height: 500,
        backgroundColor: "white",
        coverColor: "rgba(0, 0, 0, 0.4)",
        topRound: 13,
        scrollY: 0,
        showWithMotion: 1,
    });

    // UI SIDE MENU BAR: Right side menu:
    sideBar.create();
    sideBar.setTitle(settings.sideBarTitle);
    sideBar.createItemsByDataList(settings.getSideMenuBarItemDataList());
    sideBar.selectItemByIndex(0);
    sideBar.onSelectionChange(settings.openPageById);

    // UI OBJECT: Login view:
    loginView.create();
    //loginView.show();
    sideBar.lockScreenButton.onClick(lockScreen);

    // WAITING VIEW: It prevents the user from touching the screen until the process is complete.
    waitingView = WaitingView({
        waitingIconFile: "components/ui-waiting-view/clock.png",
        coverBackgroundColor: "rgba(0, 0, 0, 0.4)",
    });
    // NOTE: New component technique year:2024 (Template File: components/_component-template.js)
    
    // Open the home page.
    settings.startAtThisPage();

    // Remove launch view.
    launchView.remove();

};

const showSideBar = function() {
    sideBar.setVisible(1);
}

const lockScreen = function() {
    sideBar.setVisible(0);
    loginView.show();
}

window.updateBottomBarTasksUIBudge = function(number) {

    const BottomBarIconIndex = settings.page4BudgeIndex;

    if (!bottomBar["tasksUIBudge" + BottomBarIconIndex]) return;
    bottomBar["tasksUIBudge" + BottomBarIconIndex].setValue(number || ((storage.load("todoApp-taskDataList")) ? storage.load("todoApp-taskDataList").length : 0));
};

// Run the prepareApp() function when the device is ready:
app.onDeviceReady(prepareApp);
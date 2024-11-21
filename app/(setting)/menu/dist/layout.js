"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var menu_module_scss_1 = require("./menu.module.scss");
var page_1 = require("../components/navMenu/page");
exports.metadata = {
    title: 'DashBunny - POS',
    description: 'Generated by create next app',
    icons: {
        icon: '/favicon.png'
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: menu_module_scss_1["default"].flex },
        React.createElement(page_1["default"], null),
        children));
}
exports["default"] = RootLayout;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("react-multi-carousel/lib/styles.css");
var routes_1 = require("./routes");
var AppProvider_1 = require("./hooks/AppProvider");
var styles_1 = require("./global/styles");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <AppProvider_1.default>
        <styles_1.GlobalStyle />
        <routes_1.Router />
    </AppProvider_1.default>
  </react_1.default.StrictMode>);

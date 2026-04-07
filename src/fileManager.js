"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = createFile;
var vscode = require("vscode");
var fs = require("fs");
var path = require("path");
function createFile(name, content) {
    var _a;
    var workspace = (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0];
    if (!workspace) {
        vscode.window.showErrorMessage("No workspace open.");
        return;
    }
    var filePath = path.join(workspace.uri.fsPath, name);
    fs.writeFileSync(filePath, content);
    vscode.window.showInformationMessage("Created ".concat(name));
}

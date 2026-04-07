import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function createFile(name: string, content: string) {

  const workspace = vscode.workspace.workspaceFolders?.[0];

  if (!workspace) {
    vscode.window.showErrorMessage("No workspace open.");
    return;
  }

  const filePath = path.join(workspace.uri.fsPath, name);

  fs.writeFileSync(filePath, content);

  vscode.window.showInformationMessage(`Created ${name}`);
}
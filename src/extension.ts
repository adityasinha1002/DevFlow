import * as vscode from "vscode";
import { runAgent } from "./agent";

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand(
        "agent.start",
        async () => {

            const prompt = await vscode.window.showInputBox({
                placeHolder: "What should the AI build?"
            });

            if (!prompt) {
                return;
            }

            vscode.window.showInformationMessage("AI agent running...");

            await runAgent(prompt);

        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
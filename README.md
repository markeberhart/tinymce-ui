# tinymce-ui

ERROR for bower install

Fix for PowerShell Script Not Digitally Signed

When you run a .ps1 PowerShell script you might get the message saying “.ps1 is not digitally signed. The script will not execute on the system.”
To fix it you have to run the command below to run Set-ExecutionPolicy and change the Execution Policy setting.

`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

This command sets the execution policy to bypass for only the current PowerShell session after the window is closed, the next PowerShell session will open running with the default execution policy. “Bypass” means nothing is blocked and no warnings, prompts, or messages will be displayed.

Live preview: press `F1` and type`Show Live Server Preview`

Start http server in Chrome by typing:
`http-server ./`
then opening following link:
http://127.0.0.1:8080/index2.html
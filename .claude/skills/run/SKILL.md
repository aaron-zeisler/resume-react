---
description: Launch the resume-react dev server and screenshot it in the browser
---

# Run resume-react

This is a Create React App project. The dev server runs on port 3000 by default.

## Steps

1. Start the dev server in the background:
```bash
cd /Users/aaron/code/github.com/aaron-zeisler/resume-react
npm start > /tmp/resume-react-dev.log 2>&1 &
echo $! > /tmp/resume-react-dev.pid
```

2. Wait for the server to be ready (it opens a browser automatically, but poll to be safe):
```bash
until curl -s http://localhost:3000 > /dev/null; do sleep 2; done
```

3. Use the Chrome MCP (`mcp__Claude_in_Chrome__*`) to navigate to `http://localhost:3000` and take a screenshot to verify the app is rendering correctly.

4. When done, kill the dev server:
```bash
kill $(cat /tmp/resume-react-dev.pid) 2>/dev/null
```

## Notes
- The app renders a resume layout with a dark left sidebar and a right content column.
- `npm start` will try to open a browser tab automatically — that's expected.
- Port 3000 is the default; if something else is already on 3000, CRA will offer 3001.

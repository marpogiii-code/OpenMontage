module.exports = {
  run: [
    { method: "script.stop", params: { uri: ["start.js", "shell.js", "demo.js"] } },
    { method: "fs.rm", params: { path: ".venv" } },
    { method: "fs.rm", params: { path: "remotion-composer/node_modules" } },
  ],
}

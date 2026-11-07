module.exports = {
  run: [
    {
      method: "script.stop",
      params: {
        uri: [
          "{{path.resolve(cwd, 'start.js')}}",
          "{{path.resolve(cwd, 'shell.js')}}",
          "{{path.resolve(cwd, 'demo.js')}}",
        ],
      },
    },
    { method: "fs.rm", params: { path: ".venv" } },
    { method: "fs.rm", params: { path: "remotion-composer/node_modules" } },
  ],
}

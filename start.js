module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        env: { BACKLOT_PORT: "4750" },
        message: ["python -m uvicorn backlot.server:app --host 127.0.0.1 --port 4750"],
        on: [{ event: "/(http:\\/\\/127\\.0\\.0\\.1:[0-9]+)/", done: true }],
      },
    },
    {
      method: "local.set",
      params: { url: "{{input.event[1]}}/" },
    },
  ],
}

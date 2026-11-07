module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        input: true,
        env: { BACKLOT_PORT: "4750" },
        message: [
          "python -c \"print('OpenMontage agent shell - the project venv is active.'); print('Launch your AI coding assistant here (claude, codex, ...) and describe the video you want.'); print('Useful: python -m backlot open | python render_demo.py --list | make preflight')\"",
        ],
        on: [{ event: "/agent shell - the project venv is active/", done: true }],
      },
    },
  ],
}

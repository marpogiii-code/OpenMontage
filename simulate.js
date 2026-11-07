module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        message: ["python scripts/backlot_simulate_run.py --project backlot-demo-run"],
      },
    },
  ],
}

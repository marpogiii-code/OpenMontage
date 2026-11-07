module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        message: ["python render_demo.py"],
      },
    },
    {
      method: "notify",
      params: { html: "Demo renders saved to projects/demos/renders." },
    },
  ],
}

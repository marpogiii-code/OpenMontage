module.exports = {
  run: [
    {
      method: "script.start",
      params: { uri: "torch.js", params: { venv: ".venv", path: "." } },
    },
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        message: ["uv pip install diffusers transformers accelerate"],
      },
    },
    { method: "notify", params: { html: "GPU extras installed." } },
  ],
}

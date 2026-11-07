module.exports = {
  run: [
    { method: "shell.run", params: { message: "git pull" } },
    {
      method: "shell.run",
      params: { venv: ".venv", message: ["uv pip install -r requirements.txt"] },
    },
    {
      method: "shell.run",
      params: { path: "remotion-composer", message: ["npm install"] },
    },
  ],
}

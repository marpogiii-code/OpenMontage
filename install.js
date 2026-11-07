module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        venv_python: "3.10",
        message: [
          "uv pip install -r requirements.txt",
        ],
      },
    },
    {
      method: "shell.run",
      params: {
        path: "remotion-composer",
        message: ["npm install"],
      },
    },
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        message: [
          "uv pip install piper-tts || echo [skip] piper-tts install failed - TTS will use cloud providers instead",
          "npx --yes hyperframes --version || echo [skip] HyperFrames cache-warm failed - first render will fetch on demand",
          "python -c \"import os, shutil; e = os.path.exists('.env'); e or shutil.copy('.env.example', '.env'); print('.env already exists' if e else 'Created .env from .env.example - add your API keys there')\"",
        ],
      },
    },
    {
      method: "notify",
      params: {
        html: "OpenMontage installed. Add API keys under 'API Keys (.env)' (optional), then click 'Start Backlot' or open the 'Agent Shell'.",
      },
    },
  ],
}

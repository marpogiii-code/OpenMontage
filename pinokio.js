module.exports = {
  version: "7.0",
  title: "OpenMontage",
  description: "Open-source agentic video production studio. Install everything, launch the Backlot live storyboard, render zero-key demos, and open an agent shell.",
  icon: "assets/logo.png",
  menu: async (kernel, info) => {
    const installed = info.exists(".venv") && info.exists("remotion-composer/node_modules")
    const running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      demo: info.running("demo.js"),
      shell: info.running("shell.js"),
      gpu: info.running("gpu.js"),
    }
    if (running.install) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Installing", href: "install.js" }]
    }
    if (!installed) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Install", href: "install.js" }]
    }
    if (running.update) {
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Updating", href: "update.js" }]
    }
    if (running.reset) {
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Resetting", href: "reset.js" }]
    }
    if (running.gpu) {
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Installing GPU extras", href: "gpu.js" }]
    }

    const menu = []
    if (running.start) {
      const local = info.local("start.js")
      if (local && local.url) {
        menu.push({ default: true, icon: "fa-solid fa-film", text: "Open Backlot", href: local.url })
      }
      menu.push({ icon: "fa-solid fa-terminal", text: "Backlot Server", href: "start.js" })
    } else {
      menu.push({ default: true, icon: "fa-solid fa-power-off", text: "Start Backlot", href: "start.js" })
    }
    menu.push(
      running.shell
        ? { icon: "fa-solid fa-robot", text: "Agent Shell (running)", href: "shell.js" }
        : { icon: "fa-solid fa-robot", text: "Agent Shell", href: "shell.js" }
    )
    menu.push(
      running.demo
        ? { icon: "fa-solid fa-terminal", text: "Rendering Demos", href: "demo.js" }
        : { icon: "fa-solid fa-clapperboard", text: "Render Zero-Key Demos", href: "demo.js" }
    )
    menu.push(
      { icon: "fa-solid fa-key", text: "API Keys (.env)", href: ".env", fs: true },
      { icon: "fa-solid fa-folder-open", text: "Projects", href: "projects?fs" },
      { icon: "fa-solid fa-microchip", text: "Install GPU Extras", href: "gpu.js" },
      { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
      { icon: "fa-solid fa-plug", text: "Reinstall", href: "install.js" },
      { icon: "fa-regular fa-circle-xmark", text: "Reset", href: "reset.js", confirm: "Delete the Python environment and node_modules? Your projects/ and .env are kept." },
    )
    return menu
  },
}

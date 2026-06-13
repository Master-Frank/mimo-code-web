# 安装与启动

要在终端中使用 MiMo Code，先准备好运行环境，然后通过下面任意一种方式完成安装。

---

## 前提条件

要在终端中使用 MiMo Code，你需要：

1. 一款现代终端模拟器，例如：
   - [WezTerm](https://wezterm.org)，跨平台
   - [Alacritty](https://alacritty.org)，跨平台
   - [Ghostty](https://ghostty.org)，Linux 和 macOS
   - [Kitty](https://sw.kovidgoyal.net/kitty/)，Linux 和 macOS
2. 你想使用的 LLM 提供商的 API 密钥。

---

## 安装

安装 MiMo Code 最简单的方法是通过安装脚本。

Mac/Linux 用户推荐（为了更佳的用户体验，强烈推荐 Mac 用户使用 iTerm 或 VSCode Terminal）：

```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
```

Windows 用户推荐：

```bash
npm install -g @mimo-ai/cli
```

---

安装完成后，[连接一个模型提供商](/zh/mimocode/models-provider)，然后[运行你的第一个提示](/zh/mimocode/first-prompt)。

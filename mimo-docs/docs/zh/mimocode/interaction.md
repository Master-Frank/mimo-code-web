# 交互与输入

MiMo Code 提供了一个交互式终端界面（TUI），用于配合 LLM 处理您的项目。本页介绍如何在 TUI 中输入消息、引用文件、执行命令以及在交互过程中控制模型。

运行 MiMo Code 即可启动当前目录的 TUI。

```bash
mimo
```

或者您可以为指定的工作目录启动它。

```bash
mimo /path/to/project
```

进入 TUI 后，您可以输入消息进行提示。

```text
Give me a quick summary of the codebase.
```

如需通过命令行以编程方式运行 MiMo Code，请参阅[命令行运行](/zh/mimocode/cli-options)。

---

## 输入框基本操作

在底部的输入框中键入消息，按 `enter` 发送。

- **换行：** 按 `shift+enter`、`ctrl+j`、`ctrl+return` 或 `alt+return` 在消息中插入换行而不发送。
- **行内编辑：** 输入框支持常见的光标移动与删除快捷键，例如 `ctrl+a` / `ctrl+e` 跳到行首/行尾，`ctrl+w` 删除前一个单词，`ctrl+u` 删除到行首。完整列表见[键盘快捷键](/zh/mimocode/keybinds)。
- **退出：** 按 `ctrl+c` 或 `ctrl+d`，或使用 `/exit` 命令。

> **提示：** 大多数操作使用前导键 `ctrl+x`：先按 `ctrl+x`，再按对应按键。例如新建会话为 `ctrl+x` 然后 `n`。[了解更多](/zh/mimocode/keybinds)。

---

## 文件引用

您可以使用 `@` 在消息中引用文件。这会在当前工作目录中进行模糊文件搜索。

```text
How is auth handled in @packages/functions/src/api/index.ts?
```

文件的内容会自动添加到对话中。

---

## 图片输入

MiMo Code 可以扫描你提供的图片并将其添加到提示词中。只需将图片**拖放到终端窗口**即可。

```txt
[Image #1] Take a look at this image and use it as a reference.
```

图片是否可用取决于所选模型是否支持多模态输入。

---

## 执行 Shell 命令

以 `!` 开头的消息会作为 shell 命令执行。

```bash
!ls -la
```

命令的输出会作为工具结果添加到对话中。

---

## 斜杠命令

输入 `/` 后跟命令名称可快速执行操作。例如：

```bash
/help
```

大多数命令还支持以 `ctrl+x` 作为前导键的快捷键。完整的内置命令列表见[斜杠命令速查](/zh/mimocode/slash-commands)，快捷键见[键盘快捷键](/zh/mimocode/keybinds)。

---

## 模式切换与中断

MiMo Code 提供 **Build** 和 **Plan** 两种内置工作模式：Build 模式可直接读写文件并执行命令；Plan 模式只输出行动计划而不修改文件，适合复杂或高风险任务。

- **切换模式：** 在会话中按 `tab` 键，在 Build 与 Plan 之间切换。
- **中断响应：** 在模型流式输出或调用工具时，按 `esc` 可中断当前回合。

更多关于模式的配置与自定义，请参阅[工作模式](/zh/mimocode/modes)。

---

## 配置

您可以通过 MiMo Code 配置文件自定义 TUI 行为。

```json
{
  "$schema": "https://mimo.xiaomi.com//config.json",
  "tui": {
    "scroll_speed": 3,
    "scroll_acceleration": {
      "enabled": true
    }
  }
}
```

### 选项

- `scroll_acceleration` - 启用 macOS 风格的滚动加速，实现平滑、自然的滚动体验。启用后，快速滚动时速度会增加，慢速移动时保持精确。**此设置优先于 `scroll_speed`，启用时会覆盖它。**
- `scroll_speed` - 控制使用滚动命令时 TUI 的滚动速度（最小值：`1`）。默认为 `3`。**注意：如果 `scroll_acceleration.enabled` 设置为 `true`，则此设置会被忽略。**

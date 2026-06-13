# 主题

MiMo Code 支持自定义主题，让你的终端界面更个性化。

---

## 内置主题

MiMo Code 提供多个内置主题：

```bash
/themes
```

在 TUI 中输入以上命令可以预览和切换主题。

---

## 配置主题

在 `mimocode.json` 中设置主题：

```json
{
  "theme": "dark"
}
```

### 可用主题

| 主题名 | 说明 |
|--------|------|
| `dark` | 深色主题（默认） |
| `light` | 浅色主题 |
| `monokai` | Monokai 配色 |
| `solarized` | Solarized 配色 |
| `dracula` | Dracula 配色 |

---

## 自定义颜色

你可以自定义主题颜色：

```json
{
  "theme": {
    "colors": {
      "background": "#1e1e2e",
      "foreground": "#cdd6f4",
      "accent": "#89b4fa",
      "error": "#f38ba8",
      "success": "#a6e3a1"
    }
  }
}
```

---

## 创建自定义主题

你可以创建自定义主题文件并引用它：

```json
{
  "theme": "./my-theme.json"
}
```

主题文件格式与内置主题相同。

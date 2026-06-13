# 自定义命令

MiMo Code 支持创建自定义斜杠命令，扩展 TUI 功能。

---

## 创建自定义命令

在项目根目录创建 `.mimocode/commands/` 目录，然后添加 Markdown 文件：

```bash
mkdir -p .mimocode/commands
```

每个 Markdown 文件就是一个自定义命令。文件名即命令名：

```bash
# .mimocode/commands/review.md
```

---

## 命令文件格式

命令文件使用 Markdown 格式，支持 Front Matter 配置：

```markdown
---
description: 代码审查命令
allowedTools:
  - read
  - grep
---

请审查当前 git diff 中的代码变更，关注以下方面：

1. 代码质量和最佳实践
2. 潜在的 bug
3. 性能问题
4. 安全隐患

请列出发现的问题并提供改进建议。
```

---

## 使用自定义命令

在 TUI 中输入 `/` 加命令名即可使用：

```bash
/review
```

---

## 命令参数

自定义命令支持参数占位符：

```markdown
---
description: 解释指定文件
---

请解释 @{{file}} 的功能和实现逻辑。
```

使用方式：

```bash
/explain src/utils/helpers.ts
```

---

## 命令模板

MiMo Code 提供了一些命令模板，帮助你快速创建常用命令：

```bash
/init-commands
```

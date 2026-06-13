# Skills

MiMo Code 的 Skills 系统让你可以创建可复用的 AI 能力模块。

---

## 什么是 Skills

Skills 是预定义的 AI 能力包，包含：

- 专门的提示词
- 工具访问权限
- 工作流程
- 最佳实践

---

## 内置 Skills

MiMo Code 内置了多个 Skills：

| Skill | 说明 |
|-------|------|
| `code-review` | 代码审查 |
| `refactoring` | 代码重构 |
| `debugging` | 调试问题 |
| `testing` | 编写测试 |
| `documentation` | 生成文档 |

---

## 使用 Skills

在 TUI 中调用 Skill：

```bash
/skill code-review
```

或者在对话中自然地请求：

```txt
请帮我 review 这个 PR
```

MiMo Code 会自动选择合适的 Skill。

---

## 自定义 Skills

在 `.mimocode/skills/` 目录下创建 Skill 定义文件：

```yaml
name: my-skill
description: 自定义技能
tools:
  - read
  - grep
  - glob
prompt: |
  你是一个专业的代码审查专家。
  请按照以下标准审查代码：
  1. 代码质量
  2. 性能
  3. 安全性
```

---

## Skill 组合

你可以组合多个 Skills 来完成复杂任务：

```txt
请用 code-review 和 security-check skill 审查这个文件
```

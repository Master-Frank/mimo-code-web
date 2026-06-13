# Agents

MiMo Code 支持配置专门的 AI 代理，每个代理有不同的能力配置。

---

## 什么是 Agents

Agents 是具有特定配置的 AI 代理，可以包括：

- 自定义系统提示词
- 特定的模型选择
- 工具访问权限限制
- 专门的工作流程

---

## 内置 Agents

| Agent | 说明 |
|-------|------|
| `default` | 默认代理 |
| `coder` | 专注编码的代理 |
| `reviewer` | 代码审查代理 |
| `planner` | 计划和架构代理 |

---

## 使用 Agents

在配置文件中指定使用的 Agent：

```json
{
  "agent": "coder"
}
```

或者在对话中切换：

```bash
/agent reviewer
```

---

## 自定义 Agents

在 `.mimocode/agents/` 目录下创建 Agent 定义文件：

```json
{
  "name": "my-agent",
  "description": "自定义代理",
  "model": "xiaomi/mimo-v2-pro",
  "systemPrompt": "你是一个专业的 Python 开发者...",
  "allowedTools": ["read", "write", "edit", "bash"],
  "maxTokens": 16384
}
```

---

## Agent 场景

不同的开发场景适合不同的 Agent：

- **日常编码** → `coder` Agent
- **代码审查** → `reviewer` Agent
- **架构设计** → `planner` Agent
- **调试问题** → `debugger` Agent

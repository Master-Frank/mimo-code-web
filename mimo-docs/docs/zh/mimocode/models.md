# 模型

MiMo Code 支持多种 AI 模型，包括云端和本地模型。

---

## 支持的模型

### Xiaomi MiMo
- `xiaomi/mimo-v2-pro` - MiMo 最新旗舰模型
- `xiaomi/mimo-v2-lite` - 轻量级模型，响应更快

### OpenAI
- `openai/gpt-4o` - GPT-4o
- `openai/gpt-4o-mini` - GPT-4o Mini

### Anthropic
- `anthropic/claude-sonnet-4-20250514` - Claude Sonnet 4
- `anthropic/claude-3-5-haiku-20241022` - Claude 3.5 Haiku

### 本地模型
- 支持通过 Ollama 运行本地模型
- 支持任何 OpenAI 兼容 API

---

## 切换模型

在 TUI 中输入以下命令切换模型：

```bash
/models
```

或者在配置文件中设置默认模型：

```json
{
  "model": "xiaomi/mimo-v2-pro"
}
```

---

## 模型参数

你可以在配置文件中调整模型参数：

```json
{
  "model": "xiaomi/mimo-v2-pro",
  "maxTokens": 8192,
  "temperature": 0.7,
  "topP": 0.9
}
```

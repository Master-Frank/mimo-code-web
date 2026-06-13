# 环境变量

MiMo Code 支持通过环境变量配置各种行为。

---

## 常用环境变量

### 模型配置

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `MIMO_MODEL` | 默认模型 | `xiaomi/mimo-v2-pro` |
| `MIMO_MAX_TOKENS` | 最大输出 token 数 | `8192` |
| `MIMO_TEMPERATURE` | 生成温度 | `0.7` |

### API 密钥

| 变量名 | 说明 |
|--------|------|
| `MIMO_API_KEY` | MiMo API 密钥 |
| `OPENAI_API_KEY` | OpenAI API 密钥 |
| `ANTHROPIC_API_KEY` | Anthropic API 密钥 |

### 行为配置

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `MIMO_verbose` | 启用详细日志 | `false` |
| `MIMO_NO_COLOR` | 禁用颜色输出 | `false` |

---

## 设置环境变量

### 临时设置

```bash
export MIMO_MODEL=xiaomi/mimo-v2-pro
mimo
```

### 永久设置

将环境变量添加到你的 shell 配置文件（如 `~/.bashrc` 或 `~/.zshrc`）：

```bash
export MIMO_MODEL=xiaomi/mimo-v2-pro
```

---

## 配置文件中的环境变量

你可以在 `mimocode.json` 中引用环境变量：

```json
{
  "model": "${MIMO_MODEL}",
  "apiKey": "${MIMO_API_KEY}"
}
```

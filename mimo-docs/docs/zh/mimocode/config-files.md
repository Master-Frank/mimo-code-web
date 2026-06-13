# 配置文件

MiMo Code 使用 JSON 配置文件来控制行为。配置文件位于项目根目录的 `mimocode.json`。

---

## 基本配置

```json
{
  "$schema": "https://mimo.xiaomi.com//config.json",
  "model": "xiaomi/mimo-v2-pro",
  "maxTokens": 8192,
  "temperature": 0.7
}
```

---

## 配置项说明

### 模型配置

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `model` | string | - | 使用的模型 ID |
| `maxTokens` | number | 8192 | 最大输出 token 数 |
| `temperature` | number | 0.7 | 生成温度 |

### TUI 配置

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `tui.scroll_speed` | number | 3 | 滚动速度 |
| `tui.scroll_acceleration.enabled` | boolean | false | 启用滚动加速 |

### 工具配置

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `permissions.allowedTools` | string[] | - | 允许的工具列表 |
| `permissions.deniedTools` | string[] | - | 禁止的工具列表 |

---

## 配置文件位置

MiMo Code 按以下顺序查找配置文件：

1. 项目根目录的 `mimocode.json`
2. 用户主目录的 `~/.mimocode/config.json`
3. 全局配置 `/etc/mimocode/config.json`

项目级配置会覆盖全局配置。

---

## Schema 验证

配置文件支持 JSON Schema 验证。在配置文件中添加 `$schema` 字段可以获得编辑器自动补全和验证：

```json
{
  "$schema": "https://mimo.xiaomi.com//config.json"
}
```

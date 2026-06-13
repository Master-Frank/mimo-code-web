# 命令行参数

MiMo Code 支持多种命令行参数，让你可以在终端中灵活控制行为。

---

## 基本用法

```bash
mimo [options] [path]
```

### 参数说明

| 参数 | 说明 |
|------|------|
| `path` | 指定工作目录 |

---

## 常用选项

### 模型配置

| 选项 | 说明 | 示例 |
|------|------|------|
| `--model, -m` | 指定模型 | `mimo -m xiaomi/mimo-v2-pro` |
| `--max-tokens` | 最大输出 token 数 | `mimo --max-tokens 8192` |

### 运行模式

| 选项 | 说明 |
|------|------|
| `--plan` | 以 Plan 模式启动 |
| `--no-color` | 禁用颜色输出 |
| `--verbose` | 启用详细日志 |

### 配置文件

| 选项 | 说明 | 示例 |
|------|------|------|
| `--config, -c` | 指定配置文件 | `mimo -c ./mimocode.json` |

---

## 示例

### 使用指定模型启动

```bash
mimo -m xiaomi/mimo-v2-pro
```

### 在指定目录启动

```bash
mimo /path/to/project
```

### 使用自定义配置启动

```bash
mimo -c ./mimocode.prod.json
```

### 以 Plan 模式启动

```bash
mimo --plan
```

---

## 编程式运行

你可以通过命令行以编程方式运行 MiMo Code：

```bash
# 非交互式运行
mimo --prompt "explain this code"

# 从文件读取提示
mimo --prompt-file ./prompt.txt
```

详见[交互与输入](/zh/mimocode/interaction)。

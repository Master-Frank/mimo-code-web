# 自定义工具

MiMo Code 支持创建自定义工具，扩展 AI 的能力。

---

## 创建自定义工具

在 `.mimocode/tools/` 目录下创建工具定义文件：

```json
{
  "name": "my-tool",
  "description": "自定义工具描述",
  "parameters": {
    "type": "object",
    "properties": {
      "input": {
        "type": "string",
        "description": "输入参数"
      }
    },
    "required": ["input"]
  },
  "command": "node ./my-tool.js"
}
```

---

## 工具类型

### 命令行工具
执行 shell 命令并返回结果：

```json
{
  "type": "command",
  "command": "python",
  "args": ["./script.py"]
}
```

### HTTP 工具
调用外部 API：

```json
{
  "type": "http",
  "url": "https://api.example.com/endpoint",
  "method": "POST"
}
```

### 脚本工具
运行本地脚本：

```json
{
  "type": "script",
  "language": "javascript",
  "code": "return { result: input.toUpperCase() };"
}
```

---

## 使用自定义工具

配置完成后，自定义工具会自动出现在可用工具列表中。AI 可以像使用内置工具一样使用它们。

---

## 工具调试

你可以测试自定义工具：

```bash
/tool-test my-tool --input "test value"
```

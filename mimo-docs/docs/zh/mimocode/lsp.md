# LSP

MiMo Code 支持集成 Language Server Protocol (LSP)，提供智能代码分析能力。

---

## 什么是 LSP

LSP 是一个开放协议，让编辑器和 AI 工具能够理解代码结构。通过 LSP，MiMo Code 可以获得：

- 代码补全建议
- 类型信息
- 跳转到定义
- 查找引用
- 代码诊断

---

## 配置 LSP

在 `mimocode.json` 中配置 LSP 服务器：

```json
{
  "lsp": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"]
    },
    "python": {
      "command": "pylsp",
      "args": []
    }
  }
}
```

---

## LSP 功能

配置 LSP 后，MiMo Code 可以：

### 类型感知
```txt
这个函数的返回类型是什么？
```

### 跳转到定义
```txt
跳转到 UserService 类的定义
```

### 查找引用
```txt
哪些地方调用了这个函数？
```

### 代码诊断
```txt
这个文件有什么类型错误？
```

---

## LSP 状态

你可以检查 LSP 的连接状态：

```bash
/lsp-status
```

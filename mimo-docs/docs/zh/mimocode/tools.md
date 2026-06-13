# 工具

MiMo Code 内置了多种工具，帮助 AI 与你的项目交互。

---

## 内置工具

### 文件操作
- **Read** - 读取文件内容
- **Write** - 创建或覆盖文件
- **Edit** - 精确编辑文件中的特定部分

### 搜索工具
- **Glob** - 按模式搜索文件名
- **Grep** - 按正则表达式搜索文件内容

### 执行工具
- **Bash** - 执行 shell 命令
- **Actor** - 运行子代理处理复杂任务

### 其他工具
- **WebFetch** - 获取网页内容
- **Question** - 向用户提问以获取澄清

---

## 工具权限

你可以在配置文件中控制 AI 可以使用哪些工具：

```json
{
  "permissions": {
    "allowedTools": ["read", "grep", "glob"],
    "deniedTools": ["write", "bash"]
  }
}
```

---

## 自定义工具

MiMo Code 支持通过 MCP 服务器添加自定义工具。详见 [MCP](/zh/mimocode/mcp-servers) 和[自定义工具](/zh/mimocode/custom-tools)。

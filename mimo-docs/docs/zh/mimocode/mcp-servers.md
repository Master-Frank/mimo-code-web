# MCP

MiMo Code 支持 Model Context Protocol (MCP)，让你可以添加自定义工具和数据源。

---

## 什么是 MCP

MCP 是一个开放协议，允许 AI 模型访问外部工具和数据源。通过 MCP，你可以：

- 添加自定义工具
- 连接数据库
- 访问 API
- 集成第三方服务

---

## 配置 MCP 服务器

在 `mimocode.json` 中配置 MCP 服务器：

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["./my-mcp-server.js"],
      "env": {
        "API_KEY": "${MY_API_KEY}"
      }
    }
  }
}
```

---

## 使用 MCP 工具

配置完成后，MCP 提供的工具会自动出现在可用工具列表中。AI 可以像使用内置工具一样使用它们。

---

## 热门 MCP 服务器

- **filesystem** - 文件系统访问
- **github** - GitHub API 集成
- **postgres** - PostgreSQL 数据库
- **slack** - Slack 消息

---

## MCP 开发

你可以使用 MCP SDK 创建自定义 MCP 服务器：

```bash
npm install @modelcontextprotocol/sdk
```

详见 [MCP 官方文档](https://modelcontextprotocol.io/)。

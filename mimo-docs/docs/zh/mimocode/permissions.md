# 权限

MiMo Code 提供细粒度的权限控制，确保 AI 只能访问你允许的资源。

---

## 工具权限

你可以在配置文件中控制 AI 可以使用哪些工具：

```json
{
  "permissions": {
    "allowedTools": ["read", "grep", "glob", "webfetch"],
    "deniedTools": ["write", "bash"]
  }
}
```

---

## 文件访问权限

MiMo Code 默认只能访问当前工作目录下的文件。你可以配置额外的访问路径：

```json
{
  "permissions": {
    "allowedPaths": [
      "./src",
      "./lib",
      "../shared"
    ],
    "deniedPaths": [
      "./.env",
      "./secrets"
    ]
  }
}
```

---

## 命令执行权限

控制 AI 可以执行哪些 shell 命令：

```json
{
  "permissions": {
    "allowedCommands": [
      "npm test",
      "npm run lint",
      "git status"
    ],
    "deniedCommands": [
      "rm -rf",
      "sudo"
    ]
  }
}
```

---

## 权限审批

当 AI 尝试执行需要权限的操作时，MiMo Code 会弹出审批提示。你可以选择：

- **允许** - 本次操作
- **始终允许** - 同类操作不再询问
- **拒绝** - 阻止本次操作

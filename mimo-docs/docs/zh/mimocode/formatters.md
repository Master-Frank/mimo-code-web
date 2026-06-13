# Formatters

MiMo Code 支持集成代码格式化工具，确保代码风格一致。

---

## 支持的格式化工具

- **Prettier** - JavaScript/TypeScript/CSS
- **Black** - Python
- **rustfmt** - Rust
- **gofmt** - Go
- **clang-format** - C/C++

---

## 配置格式化工具

在 `mimocode.json` 中配置：

```json
{
  "formatters": {
    "javascript": {
      "command": "prettier",
      "args": ["--write"]
    },
    "python": {
      "command": "black",
      "args": []
    }
  }
}
```

---

## 自动格式化

启用自动格式化，让 AI 在修改文件后自动格式化：

```json
{
  "formatters": {
    "autoFormat": true
  }
}
```

---

## 格式化规则

你可以在项目根目录创建格式化配置文件：

- `.prettierrc` - Prettier 配置
- `pyproject.toml` - Black 配置
- `rustfmt.toml` - rustfmt 配置

MiMo Code 会自动读取这些配置文件。

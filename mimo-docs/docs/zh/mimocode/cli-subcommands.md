# MiMo Code 子命令

MiMo Code 提供多种子命令，用于不同的使用场景。

---

## 基本子命令

### `mimo`

启动交互式 TUI：

```bash
mimo [path]
```

### `mimo --version`

显示版本号：

```bash
mimo --version
```

### `mimo --help`

显示帮助信息：

```bash
mimo --help
```

---

## 配置子命令

### `mimo config`

管理配置：

```bash
mimo config list          # 查看所有配置
mimo config get model     # 获取指定配置
mimo config set model xiaomi/mimo-v2-pro  # 设置配置
```

### `mimo config init`

初始化配置文件：

```bash
mimo config init
```

---

## 会话子命令

### `mimo sessions`

管理会话：

```bash
mimo sessions list        # 列出所有会话
mimo sessions export      # 导出会话
mimo sessions import      # 导入会话
```

---

## 工具子命令

### `mimo tools`

管理工具：

```bash
mimo tools list           # 列出所有工具
mimo tools test <tool>    # 测试工具
```

---

## 诊断子命令

### `mimo doctor`

检查系统环境：

```bash
mimo doctor
```

这会检查：
- Node.js 版本
- 配置文件
- API 密钥
- 网络连接

---

## 更新子命令

### `mimo update`

更新 MiMo Code：

```bash
mimo update
```

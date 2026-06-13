# 故障排除

MiMo Code 常见问题及解决方案。

---

## 安装问题

### 权限错误

**问题：** 安装时提示权限不足

**解决方案：**
```bash
# Mac/Linux
sudo curl -fsSL https://mimo.xiaomi.com/install | bash

# Windows（以管理员身份运行 PowerShell）
npm install -g @mimo-ai/cli
```

### 命令找不到

**问题：** 安装后提示 `mimo: command not found`

**解决方案：**
```bash
# 检查 npm 全局路径
npm config get prefix

# 将 npm 全局路径添加到 PATH
export PATH="$(npm config get prefix)/bin:$PATH"
```

---

## 连接问题

### API 密钥无效

**问题：** 提示 API 密钥无效

**解决方案：**
1. 检查 API 密钥是否正确复制
2. 确认 API 密钥未过期
3. 检查账户余额

### 网络超时

**问题：** 请求超时

**解决方案：**
```json
{
  "network": {
    "timeout": 60000,
    "proxy": "http://proxy.example.com:8080"
  }
}
```

---

## 模型问题

### 模型不可用

**问题：** 切换模型后提示不可用

**解决方案：**
1. 检查模型名称是否正确
2. 确认账户有该模型的访问权限
3. 尝试使用 `/models` 命令重新选择

---

## 工具问题

### 工具执行失败

**问题：** 工具执行时报错

**解决方案：**
1. 检查工具权限配置
2. 确认依赖已安装
3. 查看详细日志：`mimo --verbose`

---

## 获取帮助

如果以上方案无法解决问题：

1. 查看 [GitHub Issues](https://github.com/XiaomiMiMo/MiMo-Code/issues)
2. 发送邮件至 support-mimo@xiaomi.com
3. 运行诊断命令：`mimo doctor`

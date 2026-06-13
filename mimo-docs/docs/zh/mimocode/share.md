# 分享会话

MiMo Code 支持将会话分享给团队成员，方便协作和代码审查。

---

## 分享会话

在会话中输入以下命令可以生成分享链接：

```bash
/share
```

MiMo Code 会将会话内容上传并生成一个可访问的链接。

---

## 分享设置

你可以在配置文件中控制分享行为：

```json
{
  "share": {
    "enabled": true,
    "includeCode": true,
    "expiresIn": "7d"
  }
}
```

---

## 权限控制

分享的会话默认为私有，只有持有链接的人可以访问。你可以在 [MiMo Code 平台](https://platform.xiaomimimo.com/) 上管理分享的会话。

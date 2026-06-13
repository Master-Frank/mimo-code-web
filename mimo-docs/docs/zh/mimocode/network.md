# 网络

MiMo Code 的网络配置，包括代理设置和 API 端点自定义。

---

## 代理配置

如果你需要通过代理访问 API，可以在配置文件中设置：

```json
{
  "network": {
    "proxy": "http://proxy.example.com:8080"
  }
}
```

或者通过环境变量设置：

```bash
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
```

---

## API 端点

你可以自定义 API 端点，使用自部署的模型服务：

```json
{
  "network": {
    "apiBase": "https://your-api.example.com/v1"
  }
}
```

---

## 超时设置

配置网络请求的超时时间：

```json
{
  "network": {
    "timeout": 30000,
    "retryAttempts": 3
  }
}
```

---

## SSL 配置

在开发环境中，你可以禁用 SSL 验证（不推荐在生产环境使用）：

```json
{
  "network": {
    "rejectUnauthorized": false
  }
}
```

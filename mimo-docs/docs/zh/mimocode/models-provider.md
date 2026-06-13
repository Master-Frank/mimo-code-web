# 模型

MiMo Code 使用 [AI SDK](https://ai-sdk.dev/) 和 [Models.dev](https://models.dev) 支持 **75+ LLM 提供商**，并支持运行本地模型。

---

## 连接提供商

通过 MiMo Code，你可以配置 API 密钥来使用任意 LLM 提供商。

如果你刚开始接触 MiMo Code，我们推荐使用 [MiMo Token Plan](/zh/mimocode/models-provider)。

1. 在 TUI 中运行 `/connect` 命令，选择 Xiaomi MiMo，然后前往 [platform.xiaomimimo.com](https://platform.xiaomimimo.com/)。

```txt
/connect
```

2. 登录并添加账单信息，然后复制你的 API 密钥。

3. 粘贴你的 API 密钥。

```txt
┌ API key
│
│
└ enter
```

你也可以选择其他提供商。[了解更多](/zh/mimocode/models-provider)。

---

## 提供商

大多数热门提供商已默认预加载。如果你通过 `/connect` 命令添加了提供商的凭据，它们将在你启动 MiMo Code 时自动可用。

了解更多关于[提供商](/zh/mimocode/models-provider)的信息。

---

## 选择模型

配置好提供商后，你可以通过输入以下命令来选择想要使用的模型：

```bash
/models
```

# 配置覆盖

MiMo Code 支持多层配置覆盖，让你在不同环境下使用不同的配置。

---

## 覆盖优先级

配置按以下优先级从高到低生效：

1. 命令行参数
2. 环境变量
3. 项目级 `mimocode.json`
4. 用户级 `~/.mimocode/config.json`
5. 全局配置
6. 默认值

---

## 环境特定配置

你可以为不同环境创建不同的配置文件：

```bash
# 开发环境
mimo --config ./mimocode.dev.json

# 生产环境
mimo --config ./mimocode.prod.json
```

---

## 环境变量覆盖

任何配置项都可以通过环境变量覆盖。环境变量格式为 `MIMO_` 前缀加上配置路径（大写，下划线分隔）：

```bash
# 覆盖 model 配置
export MIMO_MODEL=xiaomi/mimo-v2-pro

# 覆盖 maxTokens 配置
export MIMO_MAX_TOKENS=16384
```

详见[环境变量](/zh/mimocode/env-vars)。

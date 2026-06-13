# 规则

MiMo Code 的规则系统让你可以定义 AI 的行为准则。

---

## 什么是规则

规则是指导 AI 行为的指令，可以包括：

- 代码风格要求
- 编码规范
- 项目特定的最佳实践
- 禁止的操作

---

## 规则文件

在项目根目录创建 `AGENTS.md` 文件：

```markdown
# 项目规则

## 代码风格
- 使用 2 空格缩进
- 使用单引号
- 使用 TypeScript

## 编码规范
- 所有函数必须有类型注解
- 避免使用 any 类型
- 使用 async/await 而不是 Promise

## 禁止操作
- 不要修改 package.json
- 不要删除测试文件
```

---

## 规则优先级

规则按以下优先级生效：

1. 命令行参数指定的规则
2. 项目根目录的 `AGENTS.md`
3. 用户目录的 `~/.mimocode/rules.md`
4. 全局规则

---

## 规则作用域

你可以为不同的场景指定不同的规则：

```json
{
  "rules": {
    "global": "./rules/global.md",
    "coding": "./rules/coding.md",
    "review": "./rules/review.md"
  }
}
```

---

## 规则模板

MiMo Code 提供规则模板，帮助你快速创建规则：

```bash
/init-rules
```

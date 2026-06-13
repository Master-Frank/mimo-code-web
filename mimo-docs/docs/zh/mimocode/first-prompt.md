# 第一次运行

配置好提供商后，就可以在项目里初始化 MiMo Code，然后开始向它提问了。

---

## 初始化

导航到你想要处理的项目目录。

```bash
cd /path/to/project
```

然后运行 MiMo Code。

```bash
mimo
```

接下来，运行以下命令为项目初始化 MiMo Code。

```bash
/init
```

MiMo Code 会分析你的项目并在项目根目录创建一个 `AGENTS.md` 文件。

> **提示：** 你应该将项目的 `AGENTS.md` 文件提交到 Git。这有助于 MiMo Code 理解项目结构和编码规范。

---

## 使用

现在你已经准备好使用 MiMo Code 来处理项目了，尽管提问吧！

如果你是第一次使用 AI 编码代理，以下示例可能会对你有所帮助。

---

### 提问

你可以让 MiMo Code 为你讲解代码库。

> **提示：** 使用 `@` 键可以模糊搜索项目中的文件。

```txt
How is authentication handled in @packages/functions/src/api/index.ts
```

当你遇到不熟悉的代码时，这个功能非常有用。

---

### 添加功能

你可以让 MiMo Code 为项目添加新功能。不过我们建议先让它制定一个计划。

1. **制定计划**

MiMo Code 有一个*计划模式*，该模式下它不会进行任何修改，而是建议*如何*实现该功能。

使用 **Tab** 键切换到计划模式。你会在右下角看到模式指示器。

```bash
<TAB>
```

接下来描述你希望它做什么。

```txt
When a user deletes a note, we'd like to flag it as deleted in the database.
Then create a screen that shows all the recently deleted notes.
From this screen, the user can undelete a note or permanently delete it.
```

2. **迭代计划**

当它给出计划后，你可以提供反馈或补充更多细节。

```txt
We'd like to design this new screen using a design I've used before.
[Image #1] Take a look at this image and use it as a reference.
```

> **提示：** 将图片拖放到终端中即可将其添加到提示词中。

3. **构建功能**

当你对计划满意后，再次按 **Tab** 键切换回*构建模式*。

```bash
<TAB>
```

然后让它开始实施。

```bash
Sounds good! Go ahead and make the changes.
```

---

### 直接修改

对于比较简单的修改，你可以直接让 MiMo Code 实施，无需先审查计划。

```txt
We need to add authentication to the /settings route. Take a look at how this is
handled in the /notes route in @packages/functions/src/notes.ts and implement
the same logic in @packages/functions/src/settings.ts
```

请确保提供足够的细节，以便 MiMo Code 做出正确的修改。

---

### 撤销修改

假设你让 MiMo Code 做了一些修改。

```txt
Can you refactor the function in @packages/functions/src/api/index.ts?
```

但你发现结果不是你想要的。你可以使用 `/undo` 命令来撤销修改。

```bash
/undo
```

MiMo Code 会还原所做的修改，并重新显示你之前的消息。

你可以调整提示词，让 MiMo Code 重新尝试。

> **提示：** 你可以多次运行 `/undo` 来撤销多次修改。你也可以使用 `/redo` 命令来重做修改。

```bash
/redo
```

---

## 个性化

以上就是全部内容！你现在已经是 MiMo Code 的使用高手了。

要让它更符合你的习惯，我们推荐[选择一个主题](/zh/mimocode/themes)、[自定义快捷键](/zh/mimocode/keybinds)、[配置代码格式化工具](/zh/mimocode/formatters)、[创建自定义命令](/zh/mimocode/commands)，或者探索 [MiMo Code 配置](/zh/mimocode/config-files)。

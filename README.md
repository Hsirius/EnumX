# EnumX

`EnumX` 是一个用于 TypeScript 的扩展类，帮助开发者更便捷地管理和操作枚举类型的数据。`EnumX` 提供了一系列访问和操作枚举项的方法，使得代码更具可读性和灵活性，尤其适用于需要字段映射、下拉列表等场景的数据管理。

## 特性

- **类型安全**：借助 TypeScript 类型推导，`EnumX` 可以在编译时确保访问的属性和方法的类型安全。
- **丰富的枚举项操作方法**：支持通过 `value`、`label`、`alias` 等方式获取对应的枚举项或其属性。
- **简洁的访问**：通过代理机制，可以直接使用枚举的 `alias` 来访问其 `value`。
- **易于集成**：可以直接将 `EnumX` 实例转换为数组，方便用于下拉选择控件等数据源场景。

## 安装

你可以使用 npm 或 yarn 来安装：

```bash
npm install enumx
# 或者
yarn add enumx
```

## 使用方法

### 创建 `EnumX` 实例

通过 `EnumX.createEnum` 方法创建 `EnumX` 实例：

```typescript
import EnumX from 'enumx';

const InfoLevelEnum = EnumX.createEnum([
  {
    label: "通知",
    alias: "INFO",
    value: "info",
    color: "var(--global-primary-color)",
  },
  {
    label: "警告",
    alias: "WARNING",
    value: "warning",
    color: "var(--global-warning-color)",
  },
  {
    label: "错误",
    alias: "ERROR",
    value: "error",
    color: "var(--global-error-color)",
  },
] as const);
```


# EnumX

`EnumX` 是一个用于 TypeScript 的扩展类，帮助开发者更便捷地管理和操作枚举类型的数据。`EnumX` 提供了一系列访问和操作枚举项的方法，使得代码更具可读性和灵活性，尤其适用于需要字段映射、下拉列表等场景的数据管理。

## 特性

- **完善的代码提示**：借助 TypeScript 类型推导，`EnumX` 提供了丰富的代码提示，使得使用更加方便。
- **丰富的枚举项操作方法**：支持通过 `value`、`label`、`alias` 等方式获取对应的枚举项或其属性。
- **简洁的访问**：通过代理机制，可以直接使用枚举的 `alias` 来访问其 `value`。
- **易于集成**：可以直接将 `EnumX` 实例转换为数组，方便用于下拉选择控件等数据源场景。
- **灵活的扩展**：支持自定义枚举项属性，并可以轻松地将其转换为数组。

## 安装

你可以使用 npm 或 yarn 来安装：

```bash
npm install @sailei1996/enumx
# 或者
yarn add @sailei1996/enumx
```

## 使用方法

### 创建 `EnumX` 实例

通过 `EnumX.createEnum` 方法创建 `EnumX` 实例：

```typescript
import EnumX from "@sailei1996/enumx";

const InfoLevelEnum = EnumX.createEnum([
  { label: "通知", alias: "INFO", value: "info", color: "var(--primary-color)" },
  { label: "警告", alias: "WARNING", value: "warning", color: "var(--warning-color)" },
  { label: "错误", alias: "ERROR", value: "error", color: "var(--error-color)" },
] as const);
```

### 常见用法示例

#### 通过 `InfoLevelEnum.alias` 获取对应value，保留enum基本用法：

```typescript
const isInfo = InfoLevelEnum.INFO === "info";
console.log(isInfo); // 输出: true
```

#### 通过 `value` 获取 `label`，适用于字段反显，比如中英文映射：

```typescript
console.log(InfoLevelEnum.getTextFromValue('error')); // 输出: 错误
```

#### 通过 `toArray` 获取数组数据，适用于获取映射数据源，比如下拉选择控件：

```typescript
const InfoLevelList = InfoLevelEnum.toArray();
console.log(InfoLevelList); // 输出原数组

const InfoLevelPartialList = InfoLevelEnum.toArray('INFO', 'ERROR');
console.log(InfoLevelPartialList); // 输出INFO和ERROR组成的数组
```

#### 通过 `fromValue` 获取整条数据：

```typescript
const infoColor = InfoLevelEnum.fromValue("info")?.color;
console.log(infoColor); // 输出: "var(--primary-color)"
```

#### 通过 `GetEnumValueType` 获取枚举类型的value的联合类型：

```typescript
import {GetEnumValueType} from "@sailei1996/enumx";
type InfoLevelValue = GetEnumValueType<typeof InfoLevelEnum>; // 'info' | 'warning' | 'error'
```

### 所有用法示例
```typescript
InfoLevelEnum.INFO // info

InfoLevelEnum.getValueFromAlias('INFO') // info
InfoLevelEnum.getValueFromText('通知') // info

InfoLevelEnum.getAliasFromValue('info') // INFO
InfoLevelEnum.getAliasFromText('通知') // INFO

InfoLevelEnum.getTextFromValue('info') // 通知
InfoLevelEnum.getTextFromAlias('INFO') // 通知

InfoLevelEnum.fromValue('info') // { label: "通知", alias: "INFO", value: "info", color: "var(--primary-color)" }
InfoLevelEnum.fromAlias('INFO') // { label: "通知", alias: "INFO", value: "info", color: "var(--primary-color)" }
InfoLevelEnum.fromText('通知') // { label: "通知", alias: "INFO", value: "info", color: "var(--primary-color)" }

InfoLevelEnum.toArray()

GetEnumValueType<typeof InfoLevelEnum> // 'info' | 'warning' | 'error'
```

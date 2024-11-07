// 枚举类型接口
interface EnumObj {
  [x: string]: any;
  value: number | string;
  label: string;
  alias: string;
}

/** 将数组中所有对象的 value 转换为联合类型 */
type GetArrValueType<T> = T extends ReadonlyArray<{ value: infer V }> ? V : never;

/** 将数组中所有对象的 alias 转换为联合类型 */
type GetArrAliasType<T> = T extends ReadonlyArray<{ alias: infer V }> ? V : never;

/** 将数组中所有对象的 label 转换为联合类型 */
type GetArrLabelType<T> = T extends ReadonlyArray<{ label: infer V }> ? V : never;

/** 获取枚举数组value的联合类型 */
type GetEnumArrValueType<Arr extends readonly EnumObj[]> = Arr[number]["value"];


/** 获取枚举类型的value的联合类型 */
export type GetEnumValueType<T> = T extends EnumX<infer Arr> ? GetEnumArrValueType<Arr> : never;

// 枚举数组扩展类
export default class EnumX<T extends readonly EnumObj[]> extends Array<EnumObj> {
  constructor(list: T) {
    super(...list);
    Object.setPrototypeOf(this, EnumX.prototype);
  }

  static createEnum<T extends readonly EnumObj[]>(list: T): EnumX<T> {
    return this.createProxy(list) as EnumX<T>;
  }

  private static createProxy<T extends readonly EnumObj[]>(list: T) {
    const handler = {
      get(target: EnumX<T>, prop: string) {
        const found = list.find(item => item.alias === prop);
        if (found) {
          return found.value;
        }
        return Reflect.get(target, prop);
      },
    };
    return new Proxy(new EnumX(list), handler) as EnumX<T> & {
      [K in T[number]["alias"]]: Extract<T[number], { alias: K }>["value"];
    };
  }

  /**
   * 根据数值获取枚举项
   */
  fromValue(value: GetArrValueType<T>) {
    return this.find(item => item.value === value);
  }

  /**
   * 根据别名获取枚举项
   */
  fromAlias(alias: GetArrAliasType<T>) {
    return this.find(item => item.alias === alias);
  }

  /**
   * 根据文字获取枚举项
   */
  fromText(label: GetArrLabelType<T>) {
    return this.find(item => item.label === label);
  }

  /**
   * 根据文字获取对应枚举项的文字
   */
  getTextFromValue(value: GetArrValueType<T>) {
    return this.find(item => item.value === value)?.label;
  }

  /**
   * 根据文字获取对应枚举项的文字
   */
  getTextFromAlias(alias: GetArrAliasType<T>) {
    return this.fromAlias(alias)?.label || this.fromAlias(alias)?.label;
  }

  /**
   * 根据数值获取对应枚举项的值
   */
  getValueFromAlias(alias: GetArrAliasType<T>) {
    return this.fromAlias(alias)?.value;
  }

  /**
   * 根据文字获取对应枚举项的值
   */
  getValueFromText(label: GetArrLabelType<T>) {
    return this.fromText(label)?.value;
  }

  /**
   * 根据数值获取对应枚举项的别名
   */
  getAliasFromValue(value: GetArrValueType<T>) {
    return this.fromValue(value)?.alias;
  }

  /**
   * 根据文字获取对应枚举项的别名
   */
  getAliasFromText(label: GetArrLabelType<T>) {
    return this.fromText(label)?.alias;
  }

  /**
   * 将当前枚举转换为数组，常用于下拉选择控件之类的数据源
   */
  toArray(...args: Array<GetArrAliasType<T>>) {
    let array: EnumObj[] = [];
    if (args.length > 0) {
      for (let i = 0, l = args.length; i < l; i++) {
        const hint = args[i];
        if (typeof hint === "string") {
          array.push(this.fromAlias(hint) as EnumObj);
        } else {
          array.push(hint);
        }
      }
    } else {
      array = Array.from(this);
    }
    return array;
  }
}

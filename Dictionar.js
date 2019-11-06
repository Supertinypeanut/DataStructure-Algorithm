// 定义一个ValuePair类
class ValuePair {
  constructor(key, value) {
    this.key = key,
      this.value = value
  }
  toString() {
    return `[#${this.key}:${this.value}]`;
  }
}
console.log((new ValuePair("qwqw", 1212)).toString());


//封装字典类 
class Dictionary {
  constructor() {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  //   判断是都存在该键
  hasKey(key) {
    return this.table[this.toStrFn(key)] == null;
  }

  //   添加元素
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  // 删除原素
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  // 获取值
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  // 封装自己的keyValues
  keyValues() {
    return Object.values(this.table);
  }

  // keys
  keys() {
    return this.keysValues().map(valuePair => valuePair.key);
  }

  // values
  values() {
    return this.keysValues().map(valuePair => valuePair.value);
  }

  // 清除
  clear() {
    this.table = {};
  }

  // 大小
  size() {
    return this.keys().length;
  }

  // 是否为空
  isEmpty() {
    return this.size() == 0;
  }

  // 转化为字符串
  toString() {
    if (this.isEmpty) {
      return '';
    }
    // 实际是对象数组
    const valuePair = this.keyValues();
    let objString = `${(valuePairs[0].toString())}`
    for (let index = 1; index < valuePair.length; index++) {
      objString += `,${valuePair[index].toString()}`;
    }
    return objString;
  }
}




// 转化字符串方法
function toStrFn(item) {
  if (item == null) {
    return 'NULL';
  } else if (item == undefined) {
    return 'UNDEFINED';
  } else if (typeof item == 'string' || item instanceof String) {
    return `item`;
  }
  return typeof item == "object" ? Object.values(item).toString() : item.toString();
}
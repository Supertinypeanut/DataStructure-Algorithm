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


//封装字典类 
class Dictionary {
  constructor() {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  //   判断是都存在该键
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
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
  keysValues() {
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
    if (this.isEmpty()) {
      return '';
    }
    // 实际是对象数组
    const valuePairs = this.keysValues();
    let objString = `${(valuePairs[0].toString())}`

    for (let index = 1; index < valuePairs.length; index++) {
      objString = `${objString},${valuePairs[index].toString()}`;
    }
    return objString;
  }

  //实现forEach
  forEach(callBack) {
    const valuePairs = this.keysValues();
    for (let index = 0; index < valuePairs.length; index++) {
      const result = callBack(valuePairs[index].key, valuePairs[index].value);
      if (result === false) break;
    }
  }
}


// 转化字符串方法
function toStrFn(item) {
  if (item == null) {
    return 'NULL';
  } else if (item == undefined) {
    return 'UNDEFINED';
  } else if (typeof item == 'string' || item instanceof String) {
    return `${item}`;
  }
  return typeof item == "object" ? Object.values(item).toString() : item.toString();
}

// 创建实例测试
const dictionary = new Dictionary();
dictionary.set("My1", 'supertinypeaunt1');
dictionary.set("My2", 'supertinypeaunt2');
dictionary.set("My3", 'supertinypeaunt3');

console.log(dictionary.hasKey('My1'));
console.log(dictionary.size());
console.log(dictionary);
console.log(dictionary.remove('My3'));
console.log(dictionary);
console.log(dictionary.isEmpty());
console.log(dictionary.toString());
console.log(dictionary.forEach((key, value) => {
  console.log(`${key}--${value}`);
}));
console.log(dictionary.clear());
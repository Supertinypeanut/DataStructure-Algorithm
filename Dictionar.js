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
      this.table[tableKey] = new valuePair(key, value);
      return true;
    }
    return false;
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
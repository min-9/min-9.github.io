---
emoji: ๐ 
title: ๋งํฌ๋ค์ด ํ์คํธ
date: '2021-10-14 20:00:00'
author: min-9
tags: markdown
categories: ๋งํฌ๋ค์ด
---

## ๊ธ์ ์์ํ๊ธฐ์ ์์

๋ธ๋ก๊ทธ์ ๊ฒ์๋ ๋ชจ๋  ๊ธ์ ๋งํฌ๋ค์ด ํ์์ผ๋ก ์์ฑ๋์์ต๋๋ค.  
๋งํฌ๋ค์ด์ ์ฌ์ฉํ๋ฉด ํ์คํธ, ์ฝ๋, ์ด๋ฏธ์ง ๋ฑ์ ์ ์ฝ๊ฒ ํ๋ฉด์ ๋ํ๋ผ ์ ์๊ณ ,  
๋ฌธ๋ฒ ์์ฒด๊ฐ ์ด๋ ต์ง ์๊ธฐ ๋๋ฌธ์ ์ฝ๊ณ  ๋น ๋ฅด๊ฒ ๋ฐฐ์ ์ฌ์ฉํ  ์ ์๋ค๋ ์ ์์ ๋งค์ฐ ๋งค๋ ฅ์ ์ธ ์ธ์ด๋ผ๊ณ  ์๊ฐํจ.

<br>

### Markdown์ด๋?

[![Markdown](./test-markdown-1.png)](https://gist.github.com/ihoneymon/652be052a0727ad59601)
**<p align="center" style="font-size: 16px; padding-bottom: 8px;">โ Click More โ</p>**

๋งํฌ๋ค์ด(markdown)์ ์ผ๋ฐ ํ์คํธ ๊ธฐ๋ฐ์ ๊ฒฝ๋ ๋งํฌ์ ์ธ์ด๋ค. ์ผ๋ฐ ํ์คํธ๋ก ์์์ด ์๋ ๋ฌธ์๋ฅผ ์์ฑํ๋ ๋ฐ ์ฌ์ฉ๋๋ฉฐ, ์ผ๋ฐ ๋งํฌ์ ์ธ์ด์ ๋นํด ๋ฌธ๋ฒ์ด ์ฝ๊ณ  ๊ฐ๋จํ ๊ฒ์ด ํน์ง์ด๋ค. HTML๊ณผ ๋ฆฌ์น ํ์คํธ(RTF) ๋ฑ ์์ ๋ฌธ์๋ก ์ฝ๊ฒ ๋ณํ๋๊ธฐ ๋๋ฌธ์ ์์ฉ ์ํํธ์จ์ด์ ํจ๊ป ๋ฐฐํฌ๋๋ README ํ์ผ์ด๋ ์จ๋ผ์ธ ๊ฒ์๋ฌผ ๋ฑ์ ๋ง์ด ์ฌ์ฉ๋๋ค.

<br>

### Markdown์ ์ญ์ฌ

์กด ๊ทธ๋ฃจ๋ฒ๋ 2004๋์ ๋ฌธ๋ฒ ๋ฉด์์ ์๋ฐ ์ค์์ธ ์ ์ค๋ํ ํ์์ ํตํด ๋งํฌ๋ค์ด ์ธ์ด๋ฅผ ๋ง๋ค์์ผ๋ฉฐ, ์ฌ๋๋ค์ด ์ฝ๊ธฐ ์ฝ๊ณ  ์ฐ๊ธฐ ์ฌ์ด ํ๋ ์ธ ํ์คํธ ํฌ๋งท์ ์ฌ์ฉํ์ฌ ์ธ ์ ์์ผ๋ฉด์ ๊ตฌ์กฐ์ ์ผ๋ก ์ ํจํ XHTML(๋๋ HTML)๋ก ์ ํ์  ๋ณํ์ด ๊ฐ๋ฅํ๊ฒ ํ๋ ๊ฒ์ด ๋ชฉํ์ด๋ค.

<br>

## ์ธ์ด๋ณ ์์ ์ฝ๋

### C / C++

```cpp
#include <iostream>
#include <string>

using namespace std;

class Person {
private:
  string name{ "" };
  int age{ 0 };
public:
  Person() {}
  explicit Person(string _name, int _age) : name(_name), age(_age) {}
  Person(string _name, int _age) : name(_name), age(_age) {}
  view() {
    cout << "์ด๋ฆ: " << name << "\n" << "๋์ด: " << age << endl;
  }
}


int main() {
  Person p{ "๊ฐ๋ฏผ๊ตฌ", 22 };

  p.view();
}
```

<br>

### Java

```java
class Lamp {
  boolean isOn;

  void turnOn() {
    isOn = true;
    System.out.println("Light on? " + isOn);
  }

  public static void main(String[] args) {
    Lamp led = new Lamp();
    led.turnOn();
  }
}
```

<br>

### Python

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return self.data

class LinkedList:
    def __init__(self):
        self.head = None

    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)
```

<br>

### JavaScript

```jsx
const Node = (value) => {
  let node = {};

  node.value = value;
  node.next = null;

  return node;
};

const LinkedList = () => {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = () => {
    let removeNode = this.head;
    if (TimeRanges.head !== null) {
      this.head = removeNode.next;
      return removeNode.value;
    }
  };

  list.contains = (target) => {
    let accNode = this.head;
    while (accNode) {
      if (accNode.value === target) {
        return true;
      }
      accNode = accNode.next;
    }
    return false;
  };
  return list;
};
```

<br>

### Kotlin

```kotlin
import java.util.Scanner

fun main(args: Array<String>) {
  var i: Int = 1
  var value: Int
  var mList = mutableListOf<Int>(0)
  val scan: Scanner = Scanner(System.`in`)
  print("size is ")
  val size = scan.nextInt()

  mList[0] = (1 + Math.random() * size).toInt()

  while (i < size) {
    value = (1 + Math.random() * size).toInt()

    if (duple(mList, value)) {
      mList.add(value)
      i++
    } else {
      continue
    }
  }
  println(mList)
}

fun duple(mList: MutableList<Int>, value: Int): Boolean {
  for (item in mList) {
    if (item == value) {
      return false
    }
  }
  return true
}
```

<br>

### Go

```go
package main
import (
  "fmt"
)
type width int // user defined type
type Mobile struct {
  brand string
  model string
  price int
}
func (mob Mobile) display() string { // func associated with Mobile
  mob.brand = "Xiomi"
  return mob.brand
}
func (mob *Mobile) show() string { // func associated with Mobile
  mob.brand = "Xiomi"
  return mob.brand
}
func main() {
  var height width
  fmt.Println(height)
  m := Mobile{}
  fmt.Println(m) // Default values inside struct{" ", 0}
  var mob Mobile // Instance creation using var
  fmt.Println(mob)
  mobs := new(Mobile)
  fmt.Println(mobs)
  phone := Mobile{"Samsung", "Galaxy", 24500} // Struct initialization
  fmt.Println("Before Change:", phone)
  fmt.Println("Function Call", phone.display()) // Xiomi
  fmt.Println("After Change:", phone) // still old values are coming
  fmt.Println("Function Call:", phone.show()) //calling show()
  fmt.Println("After Change:", phone) //Here changed values will
}
```

```toc

```

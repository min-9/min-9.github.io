---
emoji: 🛠
title: 마크다운 테스트
date: '2021-10-14 20:00:00'
author: min-9
tags: markdown
categories: 마크다운
---

## 글을 시작하기에 앞서

블로그에 게시된 모든 글은 마크다운 형식으로 작성되었습니다.  
마크다운을 사용하면 텍스트, 코드, 이미지 등을 손 쉽게 회면에 나타낼 수 있고,  
문법 자체가 어렵지 않기 때문에 쉽고 빠르게 배워 사용할 수 있다는 점에서 매우 매력적인 언어라고 생각함.

<br>

### Markdown이란?

[![Markdown](./test-markdown-1.png)](https://gist.github.com/ihoneymon/652be052a0727ad59601)
**<p align="center" style="font-size: 16px; padding-bottom: 8px;">↑ Click More ↑</p>**

마크다운(markdown)은 일반 텍스트 기반의 경량 마크업 언어다. 일반 텍스트로 서식이 있는 문서를 작성하는 데 사용되며, 일반 마크업 언어에 비해 문법이 쉽고 간단한 것이 특징이다. HTML과 리치 텍스트(RTF) 등 서식 문서로 쉽게 변환되기 때문에 응용 소프트웨어와 함께 배포되는 README 파일이나 온라인 게시물 등에 많이 사용된다.

<br>

### Markdown의 역사

존 그루버는 2004년에 문법 면에서 에런 스워츠와 중대한 협업을 통해 마크다운 언어를 만들었으며, 사람들이 읽기 쉽고 쓰기 쉬운 플레인 텍스트 포맷을 사용하여 쓸 수 있으면서 구조적으로 유효한 XHTML(또는 HTML)로 선택적 변환이 가능하게 하는 것이 목표이다.

<br>

## 언어별 예시 코드

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
    cout << "이름: " << name << "\n" << "나이: " << age << endl;
  }
}


int main() {
  Person p{ "강민구", 22 };

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

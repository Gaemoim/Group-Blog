# 개(발)모임 블로그

## 기여

### 폴더 구조

```
${data}
├── authors
├── group-blog
├── headerNavLinks.js
├── siteMetaData.js
└── tech-blog
```

```
${data}
├── 작성자들 정보
├── 그룹 블로그(그룹이나 개인의 이야기)
├── 블로그의 네비게이션
├── 블로그의 메타데이터
└── 테크 블로그(기술에 대한 이야기)
```

data 폴더를 찾아보면 상기와 같은 방식으로 정리되어 있다.

### 기여 방법

1. authors 폴더에 본인 아이디.md 파일을 만든다.

```
├── authors
│   ├── author1.md
│   ├── author2.md
│   ├── author3.md
│   └── author4.md
```

2. author1.md 파일에 아래와 같이 작성한다. 이 때, avatar에는 본인의 프로필 사진을 넣고, /static/images/ 폴더에 사진을 넣어준다.

```
---
name: Gaemoim
avatar: /static/images/gaemoim.jpg
email: choo121600@gmail.com
github: https://github.com/Gaemoim
---
```

3. tech-blog나 group-blog 폴더에 개시물을 작성한다. 이 때, 아래와 같이 작성한다.

```

---

title: '야발!, 블로그를 쓰고 싶어요!'
date: "2023-12-16"
tags: ['블로그', '공부']
draft: false
thumnail: /static/images/ya-ba/image.png
summary: 블로그가 쓰고 싶은데 어떻게 해야할지 모르겠어요.
author: ["gaemoim"]

---

# 블로그를 쓰고 싶어요!

본문 주저리 주저리

```

4. 마지막으로, Commit & PR을 통해 기여를 완료한다.

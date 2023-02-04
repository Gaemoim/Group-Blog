---
title: 개모임 블로그 vercel 배포
date: "2023-01-02"
tags: ["NextJS", "Vercel", "Github-actions"]
draft: false
thumnail: /static/images/deploy-vercel/image.png
summary: 비용을 발생시키지 않기 위한 온몸 비틀기
authors: ["YeongUk"]
---

아니 여기서부터 문제가 있을 줄은 몰랐다.

일단 이걸 만드는 목표가 organizaion에 참여한 인원들이 자유롭게 컨텐츠를 작성하게 하고 싶었다.
솔직히 언제 망할지 모르는 프로젝트에 DB를 사용하여 비용이 발생하게 하고 싶지 않았기에,
Jekyll과 GitPages를 이용한 배포와 NextJS와 vercel을 이용한 배포를 고민했다.

기존에 운영 중이었던 웹앱스터디 인원들과 만들어 나갈 계획을 가지고 있었기에 Ruby를 쓰는 것보다 JS계열로 가는 것이 좋을 것으로 판단되어 NextJS와 vercel을 선택했다.

NextJS를 사용한지 오래되어 test로 배포를 하려고 했는데 organizaion레포는 Teams계정이 있어야했다.

생각치도 못한 변수다.

아니 돈 아낄라고 DB도 버렸는데 여기서 비용을 써야한다고???
하.. X발 Next형, 이건 아니지..

## 내가 선택한 Next와 Vercel이다 악깡버해라! 온몸 비틀기!

![Untitled](/static/images/deploy-vercel/image.png)

상황을 정리하면 그룹 레포에서 배포하면 비용이 발생하고,
개인 레포에서 배포하면 무료다.

그럼 그룹 레포에서 커밋이 일어나면 그 레포를 복사떠서 내 레포에 넣는다면??

내키진 않지만 어쩔 수 없다.
Github Actions을 써야겠다.

## Github Actions

```yml
name: git push into another repo to deploy to vercel

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    container: pandoc/latex
    steps:
      - uses: actions/checkout@v2
      - name: Install mustache (to update the date)
        run: apk add ruby && gem install mustache
      - name: creates output
        run: sh ./build.sh
      - name: Pushes to another repository
        id: push_directory
        uses: cpina/github-action-push-to-another-repository@main
        env:
          API_TOKEN_GITHUB: ${{ secrets.API_TOKEN_GITHUB }}
        with:
          source-directory: "output"
          destination-github-username: choo121600
          destination-repository-name: group-blog
          user-email: ${{ secrets.OFFICIAL_ACCOUNT_EMAIL }}
          commit-message: ${{ github.event.commits[0].message }}
          target-branch: main
      - name: Test get variable exported by push-to-another-repository
        run: echo $DESTINATION_CLONED_DIRECTORY
```

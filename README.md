![1](https://github.com/user-attachments/assets/194df610-addf-4a25-9292-68ec10ccfbf5)
<div align="center">직관적인 UX와 숏츠 기반 메뉴 탐색으로 소비자와 생산자를 연결하는 음식 배달 플랫폼</div>

</br>

## 역할
| 담당도메인 | 담당자 | 역할 | 레포지토리 링크 |
| :---: | --- | --- | --- |
| **소비자** | 김용환 | 팀원 |[DashBunny 소비자 도메인 FE Repo](https://github.com/yonghwna/WEB2_1_DashBunny_FE) |
| **사장님** | 최수진 | 팀원 |[DashBunny 사장님 도메인 FE Repo](https://github.com/neulrain/WEB2_1_DashBunny_FE) |
| **관리자** | 한승철 | 팀장 |[DashBunny 관리자 도메인 FE Repo](https://github.com/HSCHEOL/DashBunny_FE) |



## 작업기간 

2024/11/15 ~ 2024/12/9



## 기획문서

<details>
<summary>전체 프로젝트 기획서(Gitbook)</summary>

[🔗 GitBook 바로가기](https://team1-4.gitbook.io/team1)

[![GitBook Link](readme_image/gitbook.jpg)](https://team1-4.gitbook.io/team1)

</details>

<details>
<summary>프로젝트 노션</summary>

[🔗 Notion 바로가기](https://neul.notion.site/Team01-159dc69321d780c98a89d9b62f3a597f?pvs=4)

[![Notion](readme_image/notion.jpg)](https://neul.notion.site/Team01-159dc69321d780c98a89d9b62f3a597f?pvs=4)

</details>

<details>
<summary>유저 스토리</summary>

유저스토리는 소비자와 관리자/사장님 두 그룹으로 나누어 작성하였습니다. 각 플랫폼의 유저 니즈와 핵심 기능을 연계하여, 구현해야 할 기능의 우선순위를 체계적으로 고려하였습니다.

![유저스토리_소비자](./readme_image/user_story_customer.jpg)  
![유저스토리_관리자,사장님](./readme_image/user_story_manager.jpg)

</details>

<details>
<summary>요구사항 명세서</summary>

[🔗 요구사항 명세서 바로가기](https://docs.google.com/spreadsheets/d/1SIp4nXwJ0ElFOywPJW0efp9M_8tOnuo6Mcc7AePjCrI/edit?usp=sharing/)

[![요구사항 명세서](./readme_image/Requirement_Specification.jpg)](https://docs.google.com/spreadsheets/d/1SIp4nXwJ0ElFOywPJW0efp9M_8tOnuo6Mcc7AePjCrI/edit?usp=sharing/)

</details>

<details>
<summary>FIGMA</summary>

[🔗 FIGMA 바로가기](<https://www.figma.com/design/2tK4q9q0Tj8ekFfGMZC77K/FE2-4%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%99%94%EB%A9%B4%EA%B8%B0%ED%9A%8D%EC%84%9C_1118(%EC%99%B8%EB%B6%80%EB%85%B8%EC%B6%9C%EC%9A%A9)?node-id=1-3&t=EaPrvldFNMvwYRRS-1>)

[![피그마 화면계획서](readme_image/figma.jpg)](<https://www.figma.com/design/2tK4q9q0Tj8ekFfGMZC77K/FE2-4%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%99%94%EB%A9%B4%EA%B8%B0%ED%9A%8D%EC%84%9C_1118(%EC%99%B8%EB%B6%80%EB%85%B8%EC%B6%9C%EC%9A%A9)?node-id=1-3&t=EaPrvldFNMvwYRRS-1>)

</details>



## Skills
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

</br>

## 📌서비스 소개 및 기획의도

### 개요

**Dash Bunny**는 친근한 배달원 캐릭터 토끼를 활용해 빠르고 효율적인 딜리버리 서비스를 제공하는 프로젝트입니다. 기존 배달 앱의 한계점인 메뉴 큐레이션을 **쇼츠(Shorts)콘텐츠**를 통해 제공하여 사용자 경험을 증진하는 것을 목표로 하는 배달 플랫폼 입니다.

<hr>

### 벤치마킹

![벤치마킹](./readme_image/reference.jpg)

본 프로젝트 시스템은 배달의 민족 플랫폼을 벤치마킹하여 설계되었습니다. 다양한 배달 플랫폼의 장점들을 분석하고 통합하여, 사용자 중심의 UX/UI를 구현하는 데 초점을 맞추었습니다. 이를 통해 직관적이고 편리한 사용자 경험을 제공하고자 노력하였습니다.

## 작업 관리

<details>
<summary>일정</summary>

![일정운영](readme_image/timetable.jpg)

</details>

<details>
<summary>협업방식 - 이슈보드</summary>

![이슈보드](readme_image/issue_board.jpg)

</details>


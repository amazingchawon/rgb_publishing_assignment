# 알지비 커뮤니케이션즈 웹 퍼블리셔 과제

메인 페이지와 서브 페이지를 분리하고,  
공통 레이아웃과 컴포넌트를 재사용 가능하도록 설계했습니다.

## 📁 Project Structure

```
├─ index.html                # 메인 페이지
├─ sub.html                  # 서브 페이지
│
├─ assets/
│ ├─ images/                 # 이미지 리소스
│ └─ icons/                  # 아이콘 리소스
│
├─ components/
│ ├─ header.html             # 공통 헤더 컴포넌트
│ └─ footer.html             # 공통 푸터 컴포넌트
│
├─ css/
│ ├─ base/
│ │ ├─ reset.css             # reset / normalize
│ │ ├─ variables.css         # 색상, 폰트, 공통 변수
│ │ └─ common.css            # 공통 레이아웃, 유틸 스타일
│ │
│ ├─ layout/
│ │ ├─ header.css            # 헤더 레이아웃 스타일
│ │ └─ footer.css            # 푸터 레이아웃 스타일
│ │
│ ├─ components/
│ │ ├─ banner.css            # 배너 섹션
│ │ ├─ business-section.css  # BUSINESS 섹션
│ │ ├─ certification.css     # 인증 섹션 (서브 페이지)
│ │ ├─ company-section.css   # COMPANY 섹션
│ │ ├─ menu.css              # 서브 메뉴
│ │ ├─ pagination.css        # 페이지네이션
│ │ ├─ product-section.css   # PRODUCT 섹션
│ │ ├─ section-title.css     # 섹션 공통 타이틀
│ │ ├─ support-section.css   # SUPPORT 섹션
│ │ ├─ who-section.css       # WHO 섹션
│ │ └─ why-section.css       # WHY 섹션
│ │
│ ├─ pages/
│ │ ├─ main.css              # 메인 페이지 전용 스타일
│ │ └─ sub.css               # 서브 페이지 전용 스타일
│ │
│ └─ style.css               # CSS entry point
│
├─ js/
│ ├─ common/
│ │ ├─ header.js             # header / footer 로드
│ │ └─ scroll-top.js         # TOP 버튼 스크롤 제어
│ │
│ ├─ components/
│ │ ├─ banner.js             # 배너 인터랙션
│ │ ├─ business-section.js   # BUSINESS 탭 & 이미지 전환
│ │ ├─ card-interaction.js   # 카드 인터랙션
│ │ ├─ pagination.js         # 페이지네이션 로직
│ │ └─ product-section.js    # PRODUCT 섹션 인터랙션
│ │
│ ├─ pages/
│ │ ├─ main.js               # 메인 페이지 전용 스크립트
│ │ └─ sub.js                # 서브 페이지 전용 스크립트
│ │
│ └─ main.js                 # JS entry point
│
└─ README.md
```

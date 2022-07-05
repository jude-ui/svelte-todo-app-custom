# Svelte Todo App Custom

## Page
- [Todo List](https://jude-ui.github.io/svelte-todo-app-custom/)

## Installation

```bash
# Default
$ npx degit jude-ui/svelte-todo-app <Project Name>

# Start!
$ cd <Project Name>
$ npm i
$ npm run dev
```

## Specs

- Svelte
- Snowpack
- Babel
- PostCSS
- Autoprefixer

## Packages

__@snowpack/plugin-svelte__: 전처리기 옵션들을 관리할 수 있게 하는 스벨트 플러그인<br>
__@snowpack/plugin-babel__: svelte 파일이 아닌 `.js, .jsx, .mjs, .ts, .tsx` 등의 파일에 바벨을 적용하게 해주는 플러그인<br>
__@snowpack/plugin-optimize__: 결과물을 압축 및 암호화 시켜주는 플러그인<br>

__babel-plugin-transform-remove-console__: production 모드에서 콘솔을 모두 지워주는 기능을 가진 패키지<br>

__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br>

__moment__: 다양한 양식의 시간 데이터 출력을 도와주는 패키지<br>
__shortid__: 고유한 id값을 랜덤으로 생성해주는 패키지<br>

__svelte__: svelte 프레임 워크<br>
__snowpack__: snowpack 번들러 패키지<br>

__sortablejs__: 목록의 위치를 변경시켜주는 라이브러리<br>
__lodash__: 객체를 다양하게 조작하게 해주는 헬퍼 라이브러리<br>

## 작업 과정

- 포털 뉴스기사 댓글처럼 최신순, 과거순 형태로 데이터를 재구성하려고 시도
  - 최신순, 과거순 누를 때마다 reverse()로 배열을 뒤집으면 될거 같았지만 누를 때마다 뒤집혀서 이 방법은 폐기
  - 다음은 스토어의 계산된 스토어(derived)를 사용해보려고 생각했지만 이거 또한 원본 데이터 값이 들어올 때마다 reverse()로 계산해버리니 똑같이 이 방법도 폐기
  - 현재 todo 데이터가 최신순인지 과거순인지를 나타내주는 플래그 변수(isListRecent)를 스토어에 하나 만들어서 핸들링해서 성공
    - 과거순일 때 새로운 todo를 작성하면 배열 앞쪽으로 들어가는 것을 발견
      - 이것을 고치기 위해 todo 생성할 때 플래그 변수(isListRecent)로 push를 해줄 것인지 unshift를 해줄 것인지 분기처리 하는 로직 추가
    - 새로고침 했을 때 최신순인지 과거순인지 설정 부분에 표시해줘야 하기 때문에 로컬 스토리지에 저장 해서 해결은 했지만,, 가만 생각해보니 최신순/과거순을 사용자화 해서 저장 시켜놓는다는게 이상하다는 것을 깨닫고, 과거순으로 정렬해놨을 때만 새로고침시 배열을 뒤집어 최신순으로 업데이트 하고, 과거/최신순 플래그 변수도 수정해 놓는 로직을 추가
- 최신순과 과거순 정렬 선택하는 로직을 공통화
- todo 아이템을 삭제할 때 뜨는 삭제용 레이어 팝업과, todo 목록 초기화할 때 뜨는 확인용 레이어 팝업을 공통화 시키기 위한 작업
- todo 목록이 모두 비어있을 때 목록 초기화 및 최신순/과거순 설정 ui 숨김 처리 작업
- todo를 빈 문자열로 수정했을 때 todo 삭제 처리 작업
  - 빈 문자열로 수정해서 삭제됐을 때도 로컬 스토리지 반영 작업
- moment 라이브러리 사용하여 todo를 만들 때 입력한 시간 등록하는 작업
- todo를 수정할 때 (수정됨) 이라는 문구가 들어가도록 작업
  - edit 버튼을 누른 후 변경사항 없이 ok 를 눌렀을 땐 (수정됨) 문구를 넣으면 안되는 처리 작업
    - 수정이 되었을 때 수정이 된 시각으로 수정되도록 처리 작업
- todo 완료를 나타내는 체크박스를 추가하고 데이터 연동 작업
  - 완료시 타이틀 색상 변경 및 취소선 생기도록 클래스 핸들링 작업

## vue.js로도 만들어 보기
- [vue3 Todo List](https://github.com/jude-ui/vue3-todo-app-custom)
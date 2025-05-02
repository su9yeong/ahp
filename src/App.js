// src/App.js
import React, { useState } from "react";

// 1) core + CSS
import { Model, Serializer } from "survey-core";
import "survey-core/survey-core.css";

import * as SurveyWidgets from "surveyjs-widgets";


// React wrapper + global CSS
import { Survey } from "survey-react-ui";
import "./App.css";


// 설문 모듈 불러오기
import mainJson from "./surveys/main.js";
import hierarchyJson from "./surveys/hierarchy_01.js";
import additionalJson from "./surveys/additional.js";
// (필요하다면 3단계 설문 등 다른 모듈 import)



// rating 타입에 bulletDescriptionHTML 프로퍼티 등록
Serializer.addProperty("rating", {
  name: "bulletDescriptionHTML",
  default: ""
});




export default function App() {
  // 단계(state) 및 현재 로드된 설문 JSON 관리
  const [stage, setStage] = useState(0);
  const [surveyJson, setSurveyJson] = useState(mainJson);
  const [chosenChoice, setChosenChoice] = useState(null);

  // Model 생성 및 콜백 설정
  const model = React.useMemo(() => {
    const m = new Model(surveyJson);

    // 기본 내비게이션(Prev/Next/Complete) 숨기기
    m.showNavigationButtons = false;




    // ——— Rating 문항 렌더링 후 DOM 조작 ———
    m.onAfterRenderQuestion.add((sender, options) => {
      if (options.question.getType() !== "rating") return;
      const root = options.htmlElement;
      const ques = options.question;

      // min/max 텍스트 분리
      const ratingFs = root.querySelector(".sd-rating > fieldset");
      if (ratingFs) {
        const minText = ratingFs.querySelector(".sd-rating__min-text");
        const maxText = ratingFs.querySelector(".sd-rating__max-text");
        if (minText) ratingFs.removeChild(minText);
        if (maxText) ratingFs.removeChild(maxText);
        const labelsFs = document.createElement("fieldset");
        labelsFs.className = "sd-rating-labels";
        if (minText) labelsFs.appendChild(minText);
        if (maxText) labelsFs.appendChild(maxText);
        ratingFs.after(labelsFs);
      }

      // bulleted description HTML 적용
      if (ques.bulletDescriptionHTML) {
        let descEl = root.querySelector(".sd-question__description");
        if (!descEl) {
          const titleEl = root.querySelector(".sd-question__title");
          descEl = document.createElement("div");
          descEl.className = "sd-question__description";
          titleEl && titleEl.after(descEl);
        }
        descEl.innerHTML = ques.bulletDescriptionHTML;
      }
    });


    // ——— 설문 완료 시 Google Sheets 웹앱에 저장 ———
    m.onComplete.add((sender) => {
      const result = sender.data;
      // 1) 실제 배포된 Apps Script 웹앱 URL로 변경해주세요.
      const WEBAPP_URL = "https://script.google.com/a/macros/g.skku.edu/s/AKfycbyt6_71cxJOz19n5V2vOVKrXBayCxOOXWwDkAivI86drD8HJzLS7zoswDr60z7j7iqkCA/exec";

      fetch(WEBAPP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Sheets 저장 성공:", json);
        })
        .catch((err) => {
          console.error("Sheets 저장 실패:", err);
        });
    });
    // ——————————————————————————————————————————————————————————

    // ————————————————————————————————


    return m;
  }, [surveyJson, stage]);



  // SurveyJS 기본 검증 사용
  const validatePage = () => {
    const page = model.currentPage;
    const errors = page.validate();
    if (errors && errors.length > 0) {
      page.showErrors(true, true);
      return false;
    }
    return true;
  };

  // Prev/Next 핸들러
  const handlePrev = () => {
    if (stage === 1) {
      setSurveyJson(mainJson);
      setStage(0);
    } else if (stage === 2) {
      setSurveyJson(hierarchyJson);
      setStage(1);
    } else if (stage === 3) {
      // 3단계(01/02/03 설문)로 돌아가기
      import(`./surveys/${chosenChoice}.js`).then((mod) => {
        setSurveyJson(mod.default);
        setStage(2);
      });
    }
  };

  const handleNext = () => {
    // 필수 질문 검증
    if (!validatePage()) return;

    if (stage === 0) {
      setSurveyJson(hierarchyJson);
      setStage(1);
    } else if (stage === 1) {
      const choice = model.data.surveySelect;
      if (!choice) return;
      setChosenChoice(choice);
      import(`./surveys/${choice}.js`).then((mod) => {
        setSurveyJson(mod.default);
        setStage(2);
      });
    } else if (stage === 2) {
      setSurveyJson(additionalJson);
      setStage(3);
    } else if (stage === 3) {
      // 최종 Complete 트리거
      model.completeLastPage();
    }
  };

  const isFirst = stage === 0;
  const isLast = stage === 3;

  return (
    <div className="survey-wrapper">
      <Survey model={model} />

      {/* 커스텀 내비게이션 */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem 0",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={isFirst}
          className="sd-btn sd-btn--primary"
          style={{ flex: 1, opacity: isFirst ? 0.5 : 1 }}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="sd-btn sd-btn--primary"
          style={{ flex: 1 }}
        >
          {isLast ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
}

//   return (
//     <div className="survey-wrapper">
      
//       <Survey model={model} />
//       {/* 커스텀 Prev/Next 버튼 */}
//       <div
//         className="custom-nav"
//         style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}
//       >
//         <button
//           className="sd-btn sd-btn--primary"
//           onClick={() => model.prevPage()}
//           disabled={!model.canPrevPage}
//           style={{ flex: 1, marginRight: "1rem" }}
//         >
//           Prev
//         </button>
//         <button
//           className="sd-btn sd-btn--primary"
//           onClick={() => {
//             if (model.isLastPage) model.completeLastPage();
//             else model.nextPage();
//           }}
//           disabled={!model.canNextPage && !model.isLastPage}
//           style={{ flex: 1 }}
//         >
//           {model.isLastPage ? "Next" : "Complete"}
//         </button>
//       </div>
//     </div>
//   );
// }





// // src/App.js
// import React, { useState } from "react";

// // 1) core + CSS
// import { Model, Serializer } from "survey-core";
// import "survey-core/survey-core.css";
// import "./App.css";
// // 2) React wrapper
// import { Survey } from "survey-react-ui";

// // 설문 모듈 불러오기
// import mainJson from "./surveys/main.js";
// import hierarchyJson from "./surveys/hierarchy_01.js";
// import additionalJson from "./surveys/additional.js";

// // rating 타입에 bulletDescriptionHTML 프로퍼티 등록
// Serializer.addProperty("rating", {
//   name: "bulletDescriptionHTML",
//   default: ""
// });

// export default function App() {
//   // 단계(state) 및 현재 로드된 설문 JSON 관리
//   const [stage, setStage] = useState(0);
//   const [surveyJson, setSurveyJson] = useState(mainJson);

//   // Model 생성 및 콜백 설정
//   const model = React.useMemo(() => {
//     const m = new Model(surveyJson);


//     // ——— Rating 문항 렌더링 후 DOM 조작 ———
//     m.onAfterRenderQuestion.add((sender, options) => {
//       if (options.question.getType() !== "rating") return;
//       const root = options.htmlElement;
//       const ques = options.question;

//       // min/max 텍스트 분리
//       const ratingFs = root.querySelector(".sd-rating > fieldset");
//       if (ratingFs) {
//         const minText = ratingFs.querySelector(".sd-rating__min-text");
//         const maxText = ratingFs.querySelector(".sd-rating__max-text");
//         if (minText) ratingFs.removeChild(minText);
//         if (maxText) ratingFs.removeChild(maxText);
//         const labelsFs = document.createElement("fieldset");
//         labelsFs.className = "sd-rating-labels";
//         if (minText) labelsFs.appendChild(minText);
//         if (maxText) labelsFs.appendChild(maxText);
//         ratingFs.after(labelsFs);
//       }

//       // bulleted description HTML 적용
//       if (ques.bulletDescriptionHTML) {
//         let descEl = root.querySelector(".sd-question__description");
//         if (!descEl) {
//           // description 컨테이너가 없으면 제목 뒤에 생성
//           const titleEl = root.querySelector(".sd-question__title");
//           descEl = document.createElement("div");
//           descEl.className = "sd-question__description";
//           titleEl && titleEl.after(descEl);
//         }
//         descEl.innerHTML = ques.bulletDescriptionHTML;
//       }
//     });
//     // ————————————————————————————————

//     // 완료 후 페이지 전환 로직
//     m.onComplete.add((sender) => {
//       if (stage === 0) {
//         // 1단계 완료 → hierarchy_01로 이동
//         setSurveyJson(hierarchyJson);
//         setStage(1);
//       } else if (stage === 1) {
//         // 2단계 완료 → surveySelect 값에 따라 next 로드
//         const choice = sender.data.surveySelect;
//         import(`./surveys/${choice}.js`).then((mod) => {
//           setSurveyJson(mod.default);
//           setStage(2);
//         });
//       } else if (stage === 2) {
//         // 3단계 완료 → additional로 이동
//         setSurveyJson(additionalJson);
//         setStage(3);
//       } else {
//         // 4단계 완료 → 최종 완료 처리 (예: 팝업 또는 thank-you 화면)
//         // alert("설문이 모두 완료되었습니다.");
//       }
//     });


//     return m;
//   }, [surveyJson, stage]);

//   return (
//     <div className="survey-wrapper">
//       <Survey model={model} />
//     </div>
//   );
// }



// // import React, { useState } from "react";

// // // 1) core + CSS
// // import { Model, Serializer } from "survey-core";
// // import "survey-core/survey-core.css";
// // import "./App.css";
// // // 2) React wrapper
// // import { Survey } from "survey-react-ui";

// // import mainJson from "./surveys/main.js";

// // // ① rating 타입에 bulletDescriptionHTML 프로퍼티를 등록
// // Serializer.addProperty("rating", {
// //   name: "bulletDescriptionHTML",
// //   default: ""
// // });






// // export default function App() {
// //   const [surveyJson, setSurveyJson] = useState(mainJson);

// //   // memoize the Model so it recreates whenever surveyJson changes
// //   const model = React.useMemo(() => {
// //     const m = new Model(surveyJson);

// //     // ——— Rating 문항 렌더링 후 DOM 조작 ———
// //     m.onAfterRenderQuestion.add((sender, options) => {
// //       if (options.question.getType() !== "rating") return;
// //       const root     = options.htmlElement;
// //       const ques     = options.question;
// //       const ratingFs = root.querySelector(".sd-rating > fieldset");
// //       if (!ratingFs) return;

// //       // min/max 텍스트 분리
// //       const minText = ratingFs.querySelector(".sd-rating__min-text");
// //       const maxText = ratingFs.querySelector(".sd-rating__max-text");
// //       if (minText) ratingFs.removeChild(minText);
// //       if (maxText) ratingFs.removeChild(maxText);

// //       // 새 fieldset 에 붙이기
// //       const labelsFs = document.createElement("fieldset");
// //       labelsFs.className = "sd-rating-labels";
// //       if (minText) labelsFs.appendChild(minText);
// //       if (maxText) labelsFs.appendChild(maxText);

// //       // 버튼 fieldset 바로 뒤에 삽입
// //       ratingFs.after(labelsFs);


// //       // bulleted description
// //       if (ques.bulletDescriptionHTML) {
// //         const descEl = root.querySelector(".sd-question__description");
// //         if (descEl) {
// //           descEl.innerHTML = ques.bulletDescriptionHTML;
// //         }
// //       }
// //     });
// //     // ————————————————————————————————

// //     // 완료 후 설문 전환 로직
// //     m.onComplete.add((sender) => {
// //       const choice = sender.data.surveySelect;
// //       let next;
// //       if (choice === "01_wbm") next = import("./surveys/01_wbm.js");
// //       else if (choice === "02_fdc") next = import("./surveys/02_fdc.js");
// //       else if (choice === "03_general") next = import("./surveys/03_gen.js");
// //       else return;
// //       next.then((mod) => setSurveyJson(mod.default));
// //     });
// //     return m;
// //   }, [surveyJson]);

// //   return (
// //     <div className="survey-wrapper">
// //     <div style={{ padding: 0 }}>
// //       <Survey model={model} />
// //     </div></div>
// //   );
// // }



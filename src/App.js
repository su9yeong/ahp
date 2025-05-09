// src/App.js
import React, { useState, useMemo, useEffect } from "react";
import { Model, Serializer } from "survey-core";
import "survey-core/survey-core.css";
import { Survey } from "survey-react-ui";
import "./App.css";

import mainJson from "./surveys/page_01_main.js";
import hierarchyJson from "./surveys/page_02.js";
import additionalJson from "./surveys/page_04.js";

Serializer.addProperty("rating", {
  name: "bulletDescriptionHTML",
  default: "",
});



export default function App() {
  const [stage, setStage] = useState(0);
  const [surveyJson, setSurveyJson] = useState(mainJson);
  const [chosenChoice, setChosenChoice] = useState(null);

  const [allAnswers, setAllAnswers] = useState({});


  // 총 스테이지 수 (main → hierarchy → choice → additional)
  const totalStages = 4;
  // percent 는 stage 변화에 따라 25,50,75,100 으로 변경
  const percent = Math.round(((stage + 1) / totalStages) * 100);

  // stage 가 바뀔 때마다 창을 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [stage]);
  

  const model = useMemo(() => {
    const m = new Model(surveyJson);

    // SurveyJS 내장 버튼/헤더/풋터 전부 숨기기
    m.showNavigationButtons = false;
    m.showPageNumbers = false;
    m.showTitle = false;
    m.showProgressBar = false;

    // allAnswers 에 저장된 모든 키·값을 모델에 채워주기
    Object.entries(allAnswers).forEach(([key, val]) => m.setValue(key, val));

    // 완료화면 HTML
    m.completedHtml = `
        <div style="text-align:center; padding:2rem 1rem;">
          <h2>Thank you for completing the survey!</h2>
          <p>Your responses have been recorded.</p>
        </div>
    `;
    
    // 완료시에만 한 번 서버로 전송
    m.onComplete.add(async sender => {
      // 마지막 페이지 답도 합쳐서
      const finalData = { ...allAnswers, ...sender.data };
        try {
          const res  = await fetch("https://script.google.com/macros/s/AKfycbyXFRUbqmqzigST8AAtv4dBW5CvpFSdhlYfxw1-maOBgKJDpXFSx-IzV0-AE65G0P_IeA/exec", {
            method:  "POST",
            mode:    "cors",
            // headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(finalData),
          });
          console.log("sheet save OK", await res.json());
        } catch (e) {
          console.error("sheet save ERROR", e);
        }
          // 완료화면
          // m.completedHtml = `
          //   <div style="text-align:center;padding:2rem 1rem">
          //     <h2>설문이 완료되었습니다. 감사합니다!</h2>
          //   </div>`;
        setStage(4);
      });

    // Rating 질문이 렌더될 때마다 min/max 레이블 옮기기
    m.onAfterRenderQuestion.add((sender, options) => {
      if (options.question.getType() !== "rating") return;
      const root = options.htmlElement;
      const fs = root.querySelector(".sd-rating fieldset");
      if (!fs) return;{
        const minT = fs.querySelector(".sd-rating__min-text");
        const maxT = fs.querySelector(".sd-rating__max-text");
        if (minT) fs.removeChild(minT);
        if (maxT) fs.removeChild(maxT);
        const labelsFs = document.createElement("fieldset");
        labelsFs.className = "sd-rating-labels";
        if (minT) labelsFs.appendChild(minT);
        if (maxT) labelsFs.appendChild(maxT);
        fs.after(labelsFs);}

      const q = options.question;
      if (q.bulletDescriptionHTML) {
        let descEl = root.querySelector(".sd-question__description");
        if (!descEl) {
          const titleEl = root.querySelector(".sd-question__title");
          descEl = document.createElement("div");
          descEl.className = "sd-question__description";
          titleEl && titleEl.after(descEl);
        }
        descEl.innerHTML = q.bulletDescriptionHTML;
      }
  });

    return m;
  }, [surveyJson, allAnswers]);


  const validatePage = () => {
    // 1) 페이지 검증 (false 면 에러 메시지들이 자동으로 렌더됨)
    const isValid = model.validatePage();
    if (isValid) return true;
  
    // 2) 검증 실패 시, 첫 번째 에러 메시지 위치로 스크롤
    setTimeout(() => {
      const errEl =
        document.querySelector(".sd-page__error") || // 에러 summary
        document.querySelector(".sd-question--error"); // 개별 질문 에러
      if (errEl) {
        errEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 0);
  
    return false;
  };


  // Prev / Next
  const handlePrev = () => {
    setAllAnswers(prev => ({ ...prev, ...model.data }));
    if (stage === 4) {
      setSurveyJson(additionalJson);
      setStage(3);
    } else if (stage === 3) {
      import(`./surveys/${chosenChoice}.js`).then(m => setSurveyJson(m.default));
      setStage(2);
    } else if (stage === 2) {
      setSurveyJson(hierarchyJson);
      setStage(1);
    } else if (stage === 1) {
      setSurveyJson(mainJson);
      setStage(0);
    }
  };
 
  
  const handleNext = () => {
    if (stage < 3 && !validatePage()) return;

    if (stage === 3) {
      setStage(4);
      model.completeLastPage();
      return;
    }

    setAllAnswers(prev => {
      const merged = { ...prev, ...model.data };
      if (stage === 0) {
        setSurveyJson(hierarchyJson);
        setStage(1);
      } else if (stage === 1) {
        const choice = model.data.surveySelect;
        if (!choice) return merged;
        setChosenChoice(choice);
        import(`./surveys/${choice}.js`).then(m => {
          setSurveyJson(m.default);
          setStage(2);
        });
      } else if (stage === 2) {
        setSurveyJson(additionalJson);
        setStage(3);
      } 
      return merged;
    });

  };

  const isFirst = stage === 0;
  const isLastStep = stage === 3;
  const showNav = !model.isCompleted;

  return (
    <div className="survey-wrapper">
      {/* ─── sticky header ─── */}
      {!model.isCompleted && (
      <div className="sticky-header">
        <div className="sticky-title">{model.title}</div>
        <div className="sticky-progress-bar">
          <div
            className="sticky-progress-bar__fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      )}

      {/* ─── survey body ─── */}
      <div className="survey-body">
        <Survey
          model={model}
          hideTitle
          hidePageTitles
          hideProgressBar
          hideFooter
        />

        {showNav && (
          <div className="nav-buttons">
            <button
              onClick={handlePrev}
              disabled={isFirst}
              className="sd-btn sd-btn--primary"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="sd-btn sd-btn--primary"
            >
              {isLastStep ? "Complete" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



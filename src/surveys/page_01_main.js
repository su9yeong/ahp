
export default {
    title: "AI 모델 개발 시의 의사결정 기준 중요도 평가",
    pages: [
      {
        name: "page_01_main",
        elements: [
          {
            type: "html",
            name: "main_01",
            html: `<strong>안내:</strong> 본 설문조사의 목적은 AI를 산업현장에 적용할 때 그룹별 중요하게 생각하는 항목들을 조사하고, 모든 이해관계자가 만족할 수 있는 방향을 모색하기 위한 조사입니다. 각 항목에 가까울수록 중요도가 더 크다고 평가합니다.
            </br>
            <div style="text-align: center; margin-top: 0.5rem;">
              <img
                src="${require("./image_hier_01.png")}"
                alt="hierarchy_01"
                style="max-width: 80%; height: auto;"
              />
            </div>
            </br>
            
            설문에 사용하는 척도 점수는 아래와 같은 방식으로 입력합니다.

            </br></br>
            <div style="text-align: center; margin-top: 0.5rem;">
              <img
                src="${require("./image_scale.png")}"
                alt="hierarchy_scale"
                style="max-width: 100%; height: auto;"
              />
            </div>
            `
          },
          {
            type: "text",
            name: "name",
            title: "성함을 입력해주세요.",
            isRequired: true
          },
          {
            type: "radiogroup",
            name: "field",
            title: "어떤 분야와 관련된 업무를 진행하시나요?",
            isRequired: true,
            choices: [
              { value: "professor", text: "AI 관련 분야 교수 혹은 교수급 연구자" },
              { value: "dev_o", text: "AI 개발자 (반도체/디스플레이 분야 O)" },
              { value: "dev_x", text: "AI 개발자 (반도체/디스플레이 분야 X)" },
              { value: "engineer", text: "엔지니어" },
              { value: "data_analyst", text: "데이터 분석가" }
            ],
            choicesLayout: "vertical"
          },
          {
            type: "rating",
            name: "hierarchy_00",
            title: "업무의 효율과 품질 향상을 위해 더 중요하다고 생각되는 항목과 중요도를 선택해주세요",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>모델의 효용성: AI 모델이 강건성·정확성·설명가능성을 두루 갖춰 결함을 안정적이고 투명하게 판별할 수 있는지</li>
              <li>모델의 사용성: AI 모델을 운용하는데 필요한 자원이 효율적이고, 기존 시스템과의 연결성 및 실시간 사용성이 좋은지</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "모델의 효용성",
            maxRateDescription: "모델의 사용성",
            labelPosition: "bottom"
          }
        ]
      }
    ]
  };
export default {
        title: "AI 모델 개발 의사결정 기준 - 주기준",
        pages: [
          {
            name: "page_02_hier_01",
            elements: [
              {
                type: "html",
                name: "main_02",
                html: `
                <img src="${require("./image_hier_02.png")}" alt="hierarchy_02" style="max-width: 100%; height: auto; margin-top: 0.5rem;"/>`
              },

    { 
      type: "rating",
      name: "hierarchy_01_01",
      title: "[효용성] 모델의 강건성 vs 모델의 성능",
      description: "\u00A0",               
      descriptionLocation: "underTitle",
      bulletDescriptionHTML: `
      <ul style="margin:0;padding-left:1.2em;list-style:disc">
        <li>모델의 강건성: 모델 자체의 성능보다 입력 데이터 특성에 중점을 두고 있는 기준입니다. 모델이 불완전하거나 결함이 있는 데이터 (예: 불균형 데이터, 노이즈)에 대해 성능 저하 없이 버틸 수 있는지를 평가합니다. </li>
        <li>모델의 성능: 결함의 탐지 및 정밀도에 대한 모델 성능을 평가합니다. 여기서는 데이터 품질이 완벽하다고 가정했을 때의 성능을 측정합니다.</li>
      </ul>
    `,
      // isRequired: true,
      rateMin: 1,
      rateMax: 9,
      showRateValues: true,
      displayMode: "buttons",
      minRateDescription: "모델의 강건성",
      maxRateDescription: "모델의 성능",
      labelPosition: "bottom"
    },

    {
      type: "rating",
      name: "hierarchy_01_02",
      title: "[효용성] 모델의 강건성 vs 모델의 설명 가능성",
      description: "\u00A0",               
      descriptionLocation: "underTitle",
      bulletDescriptionHTML: `
      <ul style="margin:0;padding-left:1.2em;list-style:disc">
        <li>모델의 강건성: 모델 자체의 성능보다 입력 데이터 특성에 중점을 두고 있는 기준입니다. 모델이 불완전하거나 결함이 있는 데이터 (예: 불균형 데이터, 노이즈)에 대해 성능 저하 없이 버틸 수 있는지를 평가합니다.</li>
        <li>모델의 설명 가능성: 모델이 결함을 인식하는 과정이 이해하기 쉽게 설명되는지와 모델이 인식한 결함 결과가 특정 공정 변수 또는 입력 이미지 등과 연관되어 있는지 명확히 설명되는지를 평가합니다.</li>
      </ul>
    `,
      // isRequired: true,
      rateMin: 1,
      rateMax: 9,
      showRateValues: true,
      displayMode: "buttons",
      minRateDescription: "모델의 강건성",
      maxRateDescription: "모델의 설명 가능성",
      labelPosition: "bottom"
    },

    {
      type: "rating",
      name: "hierarchy_01_03",
      title: "[효용성] 모델의 성능 vs 모델의 설명 가능성",
      description: "\u00A0",               
      descriptionLocation: "underTitle",
      bulletDescriptionHTML: `
      <ul style="margin:0;padding-left:1.2em;list-style:disc">
        <li>모델의 성능: 결함의 탐지 및 정밀도에 대한 모델 성능을 평가합니다. 여기서는 데이터 품질이 완벽하다고 가정했을 때의 성능을 측정합니다.</li>
        <li>모델의 설명 가능성: 모델이 결함을 인식하는 과정이 이해하기 쉽게 설명되는지와 모델이 인식한 결함 결과가 특정 공정 변수 또는 입력 이미지 등과 연관되어 있는지 명확히 설명되는지를 평가합니다.</li>
      </ul>
    `,
      // isRequired: true,
      rateMin: 1,
      rateMax: 9,
      showRateValues: true,
      displayMode: "buttons",
      minRateDescription: "모델의 성능",
      maxRateDescription: "모델의 설명 가능성",
      labelPosition: "bottom"
    },

    {
      type: "rating",
      name: "hierarchy_01_04",
      title: "[사용성] 모델 유지보수 vs 실무 적용성",
      description: "\u00A0",               
      descriptionLocation: "underTitle",
      bulletDescriptionHTML: `
      <ul style="margin:0;padding-left:1.2em;list-style:disc">
        <li>모델 유지보수: 모델을 사용하는데 물리적 자원, 인적 자원이 얼마나 소요되는지를 평가합니다. 또한 모델이 동일 파이프라인으로 다른 task에 재사용이 가능한지를 평가합니다.</li>
        <li>실무 적용성: 모델 배포 후 기존 레거시 시스템이나 자동화 설비 등에 적용되기 적합한지와 end-user가 실시간으로 사용 가능한지를 평가합니다.</li>
      </ul>
    `,
      // isRequired: true,
      rateMin: 1,
      rateMax: 9,
      showRateValues: true,
      displayMode: "buttons",
      minRateDescription: "모델 유지보수",
      maxRateDescription: "실무 적용성",
      labelPosition: "bottom"
    },

    {

          type: "radiogroup",
          name: "surveySelect",
          title: "이후 질문부터는 선택의 편의성을 위해 아래 Task 중 본인과 연관된 분야를 선택하여 응답하실 수 있습니다.",
          isRequired: true,
          choices: [
            { value: "page_03_01_wbm", text: "WBM 설문" },
            { value: "page_03_02_fdc", text: "FDC 설문" },
            { value: "page_03_03_gen", text: "비해당" }
          ],
          choicesLayout: "vertical"
        }
      ]
    }
  ]
};
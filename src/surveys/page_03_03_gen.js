export default {
    title: "AI 모델 개발 의사결정 기준 - 부기준",
    pages: [
      {
        name: "page_03_hier_02_gen",
        elements: [
          {
            type: "html",
            name: "info_03",
            html: `다음으로는 앞서 설문한 주기준의 하위기준에 대한 중요도 비교입니다. </br>
                <div style="text-align: center; margin-top: 0.5rem;">
                <img
                  src="${require("./image_hier_03.png")}"
                  alt="hierarchy_03"
                  style="max-width: 80%; height: auto;"
                />
                </div>`
          },  
          {
            type: "rating",
            name: "hierarchy_02_01",
            title: "[모델의 강건성] 데이터 불균형 내성 vs 데이터 노이즈 내성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>데이터 불균형 내성: 데이터 불균형이나 결측치 상황에서도 일관된 성능을 유지할 수 있음</li>
              <li>데이터 노이즈 내성: 노이즈나 잘못된 라벨이 포함된 데이터에서도 성능 저하가 최소화됨</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "데이터 불균형 내성",
            maxRateDescription: "데이터 노이즈 내성",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_02",
            title: "[모델의 강건성] 데이터 불균형 내성 vs 모델 일관성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>데이터 불균형 내성: 데이터 불균형이나 결측치 상황에서도 일관된 성능을 유지할 수 있음</li>
              <li>모델 일관성: 새롭거나 기존 대비 다양한 유형의 데이터가 추가되었을 때 모델 재학습 이후에도 기존과 성능 차이가 적음</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "데이터 불균형 내성",
            maxRateDescription: "모델 일관성",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_03",
            title: "[모델의 강건성] 데이터 노이즈 내성 vs 모델 일관성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>데이터 노이즈 내성: 노이즈나 잘못된 라벨이 포함된 데이터에서도 성능 저하가 최소화됨</li>
              <li>모델 일관성: 새롭거나 기존 대비 다양한 유형의 데이터가 추가되었을 때 모델 재학습 이후에도 기존과 성능 차이가 적음</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "데이터 노이즈 내성",
            maxRateDescription: "모델 일관성",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_04",
            title: "[모델의 성능] 알려진 불량 유형 탐지 vs 알려지지 않은 불량 유형 탐지",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>알려진 불량 유형 탐지: 모델이 기존에 학습한 유형의 결함을 정확히 탐지하는 능력</li>
              <li>알려지지 않은 불량 유형 탐지: 학습 데이터셋과 다른 새로운 패턴의 유형을 구분하는 능력</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "알려진 불량 유형 탐지",
            maxRateDescription: "알려지지 않은 불량 유형 탐지",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_05",
            title: "[모델의 설명 가능성] 결함 자체 설명 vs 결함 맥락 해석",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>결함 자체 설명: 모델이 어떤 이유때문에 결함이라고 판단했는지 설명하는 능력</li>
              <li>결함 맥락 해석: 모델이 인식한 결함에 history를 반영하여 원인 공정 설명하거나 공정 변수와 연결하여 해석하는 능력</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "결함 자체 설명",
            maxRateDescription: "결함 맥락 해석",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_06",
            title: "[모델 유지보수] 물적 자원 vs 인적 자원",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>물적 자원: 서버, 네트워크 환경 등 모델 운영 및 유지보수에 필요한 물적 자원</li>
              <li>인적 자원: 재학습 주기 및 관리, 운영 및 유지보수에 필요한 인원 및 시간</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "물적 자원",
            maxRateDescription: "인적 자원",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_07",
            title: "[모델 유지보수] 물적 자원 vs 모델의 확장성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>물적 자원: 서버, 네트워크 환경 등 모델 운영 및 유지보수에 필요한 물적 자원</li>
              <li>모델의 확장성: 새롭거나 기존 대비 다양한 유형의 데이터가 추가되었을 때 모델 재학습 이후에도 기존과 성능 차이가 적음</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "물적 자원",
            maxRateDescription: "모델의 확장성",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_08",
            title: "[모델 유지보수] 인적 자원 vs 모델의 확장성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>인적 자원: 재학습 주기 및 관리, 운영 및 유지보수에 필요한 인원 및 시간</li>
              <li>모델의 확장성: 새롭거나 기존 대비 다양한 유형의 데이터가 추가되었을 때 모델 재학습 이후에도 기존과 성능 차이가 적음</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "물적 자원",
            maxRateDescription: "모델의 확장성",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_09",
            title: "[실무 적용성] 기존 시스템 연동 vs 최초 개발 소요 자원",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>기존 시스템 연동: 기존 레거시 시스템이나 설비에 연동하여 사용 가능하고 피드백를 반영하여 모델 및 사용 환경을 원하는 방향으로의 개선 가능한지 여부</li>
              <li>최초 개발 소요 자원: 최초 모델의 학습 및 평가에서 소요되는 인적, 물적 자원이 효율적인지</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "기존 시스템 연동",
            maxRateDescription: "최초 개발 소요 자원",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_10",
            title: "[실무 적용성] 기존 시스템 연동 vs 실시간 사용 편의성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>기존 시스템 연동: 기존 레거시 시스템이나 설비에 연동하여 사용 가능하고 피드백를 반영하여 모델 및 사용 환경을 원하는 방향으로의 개선 가능한지 여부</li>
              <li>실시간 사용 편의성: 실시간으로 사용이 가능하여 사용에 불편함이 없는지 여부</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "기존 시스템 연동",
            maxRateDescription: "실시간 사용 편의성",
            labelPosition: "bottom"
          },
          {
            type: "rating",
            name: "hierarchy_02_11",
            title: "[실무 적용성] 최초 개발 소요 자원 vs 실시간 사용 편의성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>최초 개발 소요 자원: 최초 모델의 학습 및 평가에서 소요되는 인적, 물적 자원이 효율적인지</li>
              <li>실시간 사용 편의성: 실시간으로 사용이 가능하여 사용에 불편함이 없는지 여부</li>
            </ul>
          `,
            isRequired: true,
            rateMin: 1,
            rateMax: 9,
            showRateValues: true,
            displayMode: "buttons",
            minRateDescription: "최초 개발 소요 자원",
            maxRateDescription: "실시간 사용 편의성",
            labelPosition: "bottom"
          }
          
          
        ]
      }
     
    ]
  };
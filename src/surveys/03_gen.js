// src/surveys/main.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "general 부기준",
    pages: [
      {
        name: "page1",
        elements: [
          
          {
            type: "rating",
            name: "hierarchy_02_01",
            title: "[모델의 강건성] 데이터 불균형 내성 vs 데이터 노이즈 내성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>데이터 불균형 내성: 특정 불량이 지속 발생하거나 발생하지 않더라도 모델이 잘 분류함. 혹은 데이터가 없어 BIN Map 내 구멍이 있더라도 모델이 잘 분류하는 능력</li>
              <li>데이터 노이즈 내성: 학습/평가 시에 일부 불량 Map의 분류의 실수가 있더라도 잘 분류함. 혹은 사고 구간이 많아 전반적으로 edge 불량이 발생하는 상황에서도, 원래 패턴에 대한 분류는 잘 하는 능력</li>
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
              <li>데이터 불균형 내성: 특정 불량이 지속 발생하거나 발생하지 않더라도 모델이 잘 분류함. 혹은 데이터가 없어 BIN Map 내 구멍이 있더라도 모델이 잘 분류하는 능력</li>
              <li>모델 일관성: 새로운 불량 분류를 위해 재학습 해도 기존 대비 성능이 떨어지지 않는 능력</li>
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
              <li>데이터 노이즈 내성: 학습/평가 시에 일부 불량 Map의 분류의 실수가 있더라도 잘 분류함. 혹은 사고 구간이 많아 전반적으로 edge 불량이 발생하는 상황에서도, 원래 패턴에 대한 분류는 잘 하는 능력</li>
              <li>모델 일관성: 새로운 불량 분류를 위해 재학습 해도 기존 대비 성능이 떨어지지 않는 능력</li>
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
              <li>알려진 불량 유형 탐지: 모델이 기존에 학습한 유형의 결함을 정확히 탐지하는 능력 (예: 99%의 정확도)</li>
              <li>알려지지 않은 불량 유형 탐지: 학습 데이터셋과 다른 새로운 패턴의 유형에 대해, 기존 유형을 맞추기 보다 처음 나오는 유형이라고 알려주는 능력</li>
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
              <li>결함 자체 설명: Map상의 불량 위치 불량 강도, 크기 등을 모델이 설명하는 능력</li>
              <li>결함 맥락 해석: 특정 불량 분류 후 기존 이력 상 원인 공정이 어떤것인지 해석하는 능력</li>
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
            name: "hierarchy_02_06",
            title: "[모델 유지보수] 물적 자원 vs 인적 자원",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>물적 자원: 서버, 네트워크 환경 등 모델 운영 및 유지보수에 필요한 물적 자원. 자원이 덜 들수록 서버 용량이 작고, 네트워크 소비가 적음</li>
              <li>인적 자원: 재학습 주기 및 관리, 운영 및 유지보수에 소요되는 인원 및 시간. 자원이 덜 들수록 소규모의 인원으로 관리가 가능하며, 모델의 재 학습 주기가 긴 것을 뜻함</li>
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
              <li>물적 자원: 서버, 네트워크 환경 등 모델 운영 및 유지보수에 필요한 물적 자원. 자원이 덜 들수록 서버 용량이 작고, 네트워크 소비가 적음</li>
              <li>모델의 확장성: 동일 파이프라인으로 다른 task에 재사용 할 수 있는 능력. WBM이 아니고 in line SEM으로 형태를 분류하는 모델로 미세조정(파인튜닝) 학습만 하면 사용이 가능함</li>
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
              <li>인적 자원: 재학습 주기 및 관리, 운영 및 유지보수에 소요되는 인원 및 시간. 자원이 덜 들수록 소규모의 인원으로 관리가 가능하며, 모델의 재 학습 주기가 긴 것을 뜻함</li>
              <li>모델의 확장성: 동일 파이프라인으로 다른 task에 재사용 할 수 있는 능력. WBM이 아니고 in line SEM으로 형태를 분류하는 모델로 미세조정(파인튜닝) 학습만 하면 사용이 가능함</li>
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
              <li>기존 시스템 연동: Add-on 형식으로 기존 시스템에 얹어서 사용 가능 여부. E2P, YMS 등의 시스템 안에서 연동하여 사용 가능. 또한 VoC를 반영하여 모델 및 사용 환경을 원하는 방향으로 개선 가능한지 여부. 미검출이 치명적인 상황에서 과검출을 어느정도 감수하더라도 미검출이 줄어들수 있게 조정할 수 있음</li>
              <li>최초 개발 소요 자원: 최초 모델의 학습 및 평가에서 소요되는 인적, 물적 자원의 규모. 자원이 덜 들수록 개발 비용이 적으며, 개발 시간이 짧다는 것을 뜻함</li>
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
              <li>기존 시스템 연동: Add-on 형식으로 기존 시스템에 얹어서 사용 가능 여부. E2P, YMS 등의 시스템 안에서 연동하여 사용 가능. 또한 VoC를 반영하여 모델 및 사용 환경을 원하는 방향으로 개선 가능한지 여부. 미검출이 치명적인 상황에서 과검출을 어느정도 감수하더라도 미검출이 줄어들수 있게 조정할 수 있음</li>
              <li>실시간 사용 편의성: 실시간 사용 편의성: 사용자가 실시간으로 사용이 가능하여 사용에 불편함이 없는지 여부. EDS 종료 시점부터 1분 이내로 WBM 분류 결과를 사용자가 볼 수 있음</li>
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
              <li>최초 개발 소요 자원: 최초 모델의 학습 및 평가에서 소요되는 인적, 물적 자원의 규모. 자원이 덜 들수록 개발 비용이 적으며, 개발 시간이 짧다는 것을 뜻함</li>
              <li>실시간 사용 편의성: 실시간 사용 편의성: 사용자가 실시간으로 사용이 가능하여 사용에 불편함이 없는지 여부. EDS 종료 시점부터 1분 이내로 WBM 분류 결과를 사용자가 볼 수 있음</li>
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
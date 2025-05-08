export default {
    title: "AI 모델 개발 의사결정 기준 - 부기준",
    pages: [
      {
        name: "page_03_hier_02_fdc",
        elements: [
            {
                type: "html",
                name: "info_02",
                html: `<strong>FDC 이상 탐지 자동화</strong></br> 
                    다음으로는 앞서 설문한 주기준의 하위기준에 대한 중요도 비교입니다. </br>
                    
                  <div style="text-align: center; margin-top: 0.5rem;">
                    <img
                      src="${require("./image_hier_03.png")}"
                      alt="hierarchy_03"
                      style="max-width: 80%; height: auto;"
                    />
                  </div>

                    </br>
                    설비 이상을 모니터링 하기위해 FDC Trend를 매일 보고 사람이 직접 이상유무를 판단합니다.
기존 경향을 기준으로 거동이 이상하다고 판단하면, 혐의 공정/설비를 추적합니다.
이 과정은 하루에도 수없이 많은 웨이퍼가 가공되고 있기 때문에 사람이 일일히 모니터링을 하기에는 너무 고된 일입니다.
</br> 
자동화는 일차적으로 단순하게 이상/정상을 자동으로 판단하는 것부터 시작해서 
최종적으로는 기존 history를 고려해서 원인/공정 설비까지 자동으로 추적하는것을 목표로 합니다.
</br> 
이에 따라 데이터셋 수집과 레이블링 작업을 포함하여
필요한 인력은 AI전문가 3명, 현장전문가 3명이 1년 개발해야될 것으로 가정하고
개발 완료 및 배포 후 유지보수 과정에서는 AI전문가 2명, 현장 전문가 1명이 지속 필요할 것으로 가정합니다.
또한 필요한 물적 자원은 서버 유지비용으로 10억/년으로 가정합니다.
</br>
<img src="${require("./image_fdc.png")}"  alt="wbm"  style="max-width: 100%; height: auto; margin-top: 0.5rem;"/> </br>`
            },  
          {
            type: "rating",
            name: "hierarchy_02_01",
            title: "[모델의 강건성] 데이터 불균형 내성 vs 데이터 노이즈 내성",
            description: "\u00A0",               
            descriptionLocation: "underTitle",
            bulletDescriptionHTML: `
            <ul style="margin:0;padding-left:1.2em;list-style:disc">
              <li>데이터 불균형 내성: 특정 이상 형태가 지속 발생하거나 계속 정상이더라도 잘 판정함. Trend 형태가 끊겨있는 구간이 많아도 모델이 잘 판정하는 능력</li>
              <li>데이터 노이즈 내성: 학습/평가 시에 일부 이상판정을 잘못해서 넣어줘도 잘 작동함. 크기와 색깔이 제멋대로이거나 PM/spec선이 마구 얽혀있어도 잘 판정하는 능력</li>
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
              <li>데이터 불균형 내성: 특정 이상 형태가 지속 발생하거나 계속 정상이더라도 잘 판정함. Trend 형태가 끊겨있는 구간이 많아도 모델이 잘 판정하는 능력</li>
              <li>모델 일관성: 새로운 유형을 더 넣고 재학습 해도 기존 대비 판정 성능이 떨어지지 않는 능력</li>
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
              <li>데이터 노이즈 내성: 학습/평가 시에 일부 이상판정을 잘못해서 넣어줘도 잘 판정함. 크기와 색깔이 제멋대로이거나 PM/spec선이 마구 얽혀있어도 잘 판정하는 능력</li>
              <li>모델 일관성: 새로운 유형을 더 넣고 재학습 해도 기존 대비 판정 성능이 떨어지지 않는 능력</li>
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
              <li>알려진 불량 유형 탐지: 모델이 기존에 학습한 유형의 결함을 정확히 탐지하는 능력 (예: 95%의 정밀도)</li>
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
              <li>결함 자체 설명: 이상 판정의 대상이 되는 이상 시점, 변화량 등을 모델이 설명하는 능력</li>
              <li>결함 맥락 해석: 이상 유형과 센서 공정을 기준으로 기존 이력 상 원인 공정이 어떤것인지 해석하는 능력</li>
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
              <li>모델의 확장성: 동일 파이프라인으로 다른 task에 재사용 할 수 있는 능력. 예시로, 미세조정(파인튜닝) 학습만 하면 실 계측(THK/CD 등) 이상 감지에 사용 가능</li>
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
              <li>모델의 확장성: 동일 파이프라인으로 다른 task에 재사용 할 수 있는 능력. 예시로, 미세조정(파인튜닝) 학습만 하면 실 계측(THK/CD 등) 이상 감지에 사용 가능</li>
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
              <li>기존 시스템 연동: Add-on 형식으로 기존 시스템(EES, YMS 등)에 얹어서 사용 가능, VoC를 반영하여 모델 및 사용 환경을 원하는 방향으로 개선 가능 (과검출을 다소 감수하더라도 미검출이 줄어들수 있게 조정)</li>
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
              <li>기존 시스템 연동: Add-on 형식으로 기존 시스템(EES, YMS 등)에 얹어서 사용 가능, VoC를 반영하여 모델 및 사용 환경을 원하는 방향으로 개선 가능 (과검출을 다소 감수하더라도 미검출이 줄어들수 있게 조정)</li>
              <li>실시간 사용 편의성: 사용자가 실시간으로 사용이 가능하여 사용에 불편함이 없는지 여부. 예를 들면 wafer T/O 시점부터 30분 이내로 이상 트랜드 경고 메일을 받을 수 있음</li>
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
              <li>실시간 사용 편의성: 사용자가 실시간으로 사용이 가능하여 사용에 불편함이 없는지 여부. 예를 들면 wafer T/O 시점부터 30분 이내로 이상 트랜드 경고 메일을 받을 수 있음</li>
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
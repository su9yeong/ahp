export default {
  title: "AI 모델 수용성 조사",
  pages: [
    {
      name: "page_04",
      elements: [
        {
          type: "html",
          name: "intro",
          html: "(5점 리커트 척도: 1 = 전혀 그렇지 않다, 5 = 매우 그렇다)"
        },

        {
          type: "matrix",
          name: "A",
          title: "A. 성과 기대 (Performance Expectancy)",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          // columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          columns: ["1", "2", "3", "4", "5"],
          rows: [
            {
              value: "q01",
              text: "AI 기반 모델은 제조 성과를 향상시켜야 한다."
            },
            {
              value: "q02",
              text: "AI 모델은 불량률을 유의미하게 낮출 수 있어야 한다."
            },
            {
              value: "q03",
              text: "AI 모델은 의사결정 효율을 높이는 데 기여해야 한다."
            }
          ]
        },
        {
          type: "matrix",
          name: "B",
          title: "B. 노력 기대 (Effort Expectancy)",
          cellType: "radiogroup",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          rows: [
            {
              value: "q04",
              text: "AI 모델은 사용자가 쉽게 익힐 수 있어야 한다."
            },
            {
              value: "q05",
              text: "실무자가 해당 모델에 쉽게 적응할 수 있어야 한다."
            },
            {
              value: "q06",
              text: "전반적으로 사용자 친화적인 모델이어야 한다."
            }
          ]
        },
        {
          type: "matrix",
          name: "C",
          title: "C. 지원 조건 (Facilitating Conditions)",
          cellType: "radiogroup",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          rows: [
            {
              value: "q07",
              text:
                "조직은 AI 모델 운영을 위한 기술적 인프라를 갖추고 있어야 한다."
            },
            {
              value: "q08",
              text:
                "AI 모델의 유지보수를 위한 인적 자원이 확보되어야 한다."
            },
            {
              value: "q09",
              text:
                "문제 발생 시 기술적 지원을 받을 수 있는 환경이 조성되어야 한다."
            }
          ]
        },
        {
          type: "matrix",
          name: "D",
          title: "D. 설명 가능성 (Explainability)",
          cellType: "radiogroup",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          rows: [
            {
              value: "q10",
              text:
                "AI 모델은 특정 판단을 내린 이유를 명확히 설명할 수 있어야 한다."
            },
            {
              value: "q11",
              text:
                "모델의 판단은 공정 이력 등의 맥락 속에서 해석 가능해야 한다."
            },
            {
              value: "q12",
              text:
                "결과를 명확히 설명할수록 AI 모델에 대한 신뢰가 높아질 수 있다."
            }
          ]
        },
        {
          type: "matrix",
          name: "E",
          title: "E. 신뢰성 (Trust)",
          cellType: "radiogroup",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          rows: [
            {
              value: "q13",
              text: "AI 모델은 일관되게 신뢰할 수 있어야 한다."
            },
            {
              value: "q14",
              text: "AI 모델의 판단 결과가 실제 상황과 부합해야 한다."
            },
            {
              value: "q15",
              text:
                "AI 모델의 동작 방식이 투명할수록 신뢰가 높아진다."
            }
          ]
        },
        {
          type: "matrix",
          name: "F",
          title: "F. 사회적 영향 (Social Influence)",
          cellType: "radiogroup",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          rows: [
            {
              value: "q16",
              text:
                "우리 조직의 주요 구성원들은 AI 모델의 도입을 긍정적으로 평가한다."
            },
            {
              value: "q17",
              text:
                "상사나 동료의 기대가 AI 모델 사용에 영향을 줄 수 있다."
            },
            {
              value: "q18",
              text:
                "주변 팀이 사용하는 AI 모델은 우리에게도 중요한 참고 기준이 된다."
            }
          ]
        },
        {
          type: "matrix",
          name: "G",
          title: "G. 조직 준비도 (Organizational Readiness)",
          cellType: "radiogroup",
          // isAllRowRequired: true,
          // horizontalScroll: true,
          columns: [1, 2, 3, 4, 5].map((i) => ({ value: i, text: String(i) })),
          rows: [
            {
              value: "q19",
              text:
                "우리 조직은 AI 도입을 위한 변화 수용성이 높아야 한다."
            },
            {
              value: "q20",
              text:
                "AI 시스템과 잘 연계될 수 있는 기존 프로세스가 갖춰져 있어야 한다."
            },
            {
              value: "q21",
              text:
                "AI 기반 업무 전환에 대한 조직 내 공감대가 형성되어 있어야 한다."
            }
          ]
        }
      ]
    }
  ]
};

// eslint-disable-next-line import/prefer-default-export
export const TestCase = {
  id: "1838a3ef-6257-491f-a7d3-30ab38b5cd1a",
  case_status: false,
  payload: {
    data: {
      kyc: "high",
      ccjs: [],
      fico_score: 900,
    },
  },
  rules: [
    {
      id: "717dad56-60b9-43f2-9eb7-c8d52a105c47",
      name: "all_aggregator",
      description: null,
      result: {
        result: false,
        payload: [],
      },
      order: 0,
      dependencies: [
        "7c656c05-2337-4256-bd33-d4c259dc5a14",
        "d57668c5-736b-42df-b2cc-e9a4b6c84d8f",
        "d8f39bed-e067-49c5-ad44-81c9d672c154",
      ],
    },
    {
      id: "7c656c05-2337-4256-bd33-d4c259dc5a14",
      name: "fico_score_greater_than_threshold",
      description: null,
      result: {
        result: true,
        payload: [
          {
            key: "data",
            value: {
              kyc: "high",
              ccjs: [],
              fico_score: 900,
            },
            type: "dict",
            accessed_count: 1,
          },
          {
            key: "data.fico_score",
            value: 900,
            type: "int",
            accessed_count: 1,
          },
        ],
      },
      order: 1,
      dependencies: [],
    },
    {
      id: "d57668c5-736b-42df-b2cc-e9a4b6c84d8f",
      name: "kyc_risk_greater_than_threshold",
      description: null,
      result: {
        result: false,
        payload: [
          {
            key: "data.kyc",
            value: "high",
            type: "str",
            accessed_count: 1,
          },
          {
            key: "data",
            value: {
              kyc: "high",
              ccjs: [],
              fico_score: 900,
            },
            type: "dict",
            accessed_count: 1,
          },
        ],
      },
      order: 1,
      dependencies: [],
    },
    {
      id: "d8f39bed-e067-49c5-ad44-81c9d672c154",
      name: "has_no_ccjs",
      description: null,
      result: {
        result: true,
        payload: [
          {
            key: "data",
            value: {
              kyc: "high",
              ccjs: [],
              fico_score: 900,
            },
            type: "dict",
            accessed_count: 1,
          },
          {
            key: "data.ccjs",
            value: [],
            type: "list",
            accessed_count: 1,
          },
        ],
      },
      order: 1,
      dependencies: [],
    },
  ],
  created_at: "2021-03-22T11:48:25.052000Z",
};

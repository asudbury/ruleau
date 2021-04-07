// eslint-disable-next-line import/prefer-default-export
export const TestCases = [
  {
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
  },
  {
    id: "2649a106-9d6f-4e34-8f5d-f00803d4c0f8",
    case_status: true,
    payload: {
      data: {
        kyc: "LOW",
        ccjs: [],
        fico_score: 900,
      },
    },
    rules: [
      {
        id: "2cb418f1-a947-4f9c-b21d-18a38f1ffbf9",
        name: "all_aggregator",
        description: null,
        result: {
          result: true,
          payload: [],
        },
        order: 0,
        dependencies: [
          "4f0b679d-59b9-4a7b-bfc1-e5fb5b037b99",
          "aad83cb7-18cd-41ea-ade1-6e0d1ef50682",
          "f2f0671b-2127-4824-a094-3cddf5bf1ef4",
        ],
      },
      {
        id: "4f0b679d-59b9-4a7b-bfc1-e5fb5b037b99",
        name: "has_no_ccjs",
        description: null,
        result: {
          result: true,
          payload: [
            {
              key: "data",
              value: {
                kyc: "LOW",
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
      {
        id: "aad83cb7-18cd-41ea-ade1-6e0d1ef50682",
        name: "kyc_risk_greater_than_threshold",
        description: null,
        result: {
          result: true,
          payload: [
            {
              key: "data.kyc",
              value: "LOW",
              type: "str",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "LOW",
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
        id: "f2f0671b-2127-4824-a094-3cddf5bf1ef4",
        name: "fico_score_greater_than_threshold",
        description: null,
        result: {
          result: true,
          payload: [
            {
              key: "data.fico_score",
              value: 900,
              type: "int",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "LOW",
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
    ],
    created_at: "2021-03-22T11:48:47.757000Z",
  },
  {
    id: "976f2cd9-558c-470c-b2a6-eda6c0ae87a4",
    case_status: false,
    payload: {
      data: {
        kyc: "low",
        ccjs: [],
        fico_score: 900,
      },
    },
    rules: [
      {
        id: "04b760f6-5e3d-491f-8d69-e91e52c50baa",
        name: "fico_score_greater_than_threshold",
        description: null,
        result: {
          result: true,
          payload: [
            {
              key: "data.fico_score",
              value: 900,
              type: "int",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "low",
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
        id: "5912e58b-744e-4262-a7fb-a45a9c11b268",
        name: "kyc_risk_greater_than_threshold",
        description: null,
        result: {
          result: false,
          payload: [
            {
              key: "data.kyc",
              value: "low",
              type: "str",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "low",
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
        id: "a57673dc-f4e0-43fb-a80b-8d4a4bd1ed89",
        name: "all_aggregator",
        description: null,
        result: {
          result: false,
          payload: [],
        },
        order: 0,
        dependencies: [
          "04b760f6-5e3d-491f-8d69-e91e52c50baa",
          "5912e58b-744e-4262-a7fb-a45a9c11b268",
          "f471685c-bb77-4ee0-b68d-ad052d53081f",
        ],
      },
      {
        id: "f471685c-bb77-4ee0-b68d-ad052d53081f",
        name: "has_no_ccjs",
        description: null,
        result: {
          result: true,
          payload: [
            {
              key: "data",
              value: {
                kyc: "low",
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
    created_at: "2021-03-22T11:48:34.547000Z",
  },
  {
    id: "c8c55d17-a9f9-48ef-b326-e37e261f0fd5",
    case_status: false,
    payload: {
      data: {
        kyc: "low",
        ccjs: [],
        fico_score: 150,
      },
    },
    rules: [
      {
        id: "0899a580-4515-4173-8f7b-3a619f571d69",
        name: "kyc_risk_greater_than_threshold",
        description: null,
        result: {
          result: false,
          payload: [
            {
              key: "data.kyc",
              value: "low",
              type: "str",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "low",
                ccjs: [],
                fico_score: 150,
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
        id: "67cb50d4-6af7-426a-9076-ed0098378895",
        name: "has_no_ccjs",
        description: null,
        result: {
          result: true,
          payload: [
            {
              key: "data.ccjs",
              value: [],
              type: "list",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "low",
                ccjs: [],
                fico_score: 150,
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
        id: "a1de0774-3ca8-4f03-85af-7360777f52ad",
        name: "fico_score_greater_than_threshold",
        description: null,
        result: {
          result: false,
          payload: [
            {
              key: "data.fico_score",
              value: 150,
              type: "int",
              accessed_count: 1,
            },
            {
              key: "data",
              value: {
                kyc: "low",
                ccjs: [],
                fico_score: 150,
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
        id: "ddbf8b7a-e20b-4ee4-8053-3f0c3df24fa5",
        name: "all_aggregator",
        description: null,
        result: {
          result: false,
          payload: [],
        },
        order: 0,
        dependencies: [
          "0899a580-4515-4173-8f7b-3a619f571d69",
          "67cb50d4-6af7-426a-9076-ed0098378895",
          "a1de0774-3ca8-4f03-85af-7360777f52ad",
        ],
      },
    ],
    created_at: "2021-03-22T11:48:14.608000Z",
  },
];

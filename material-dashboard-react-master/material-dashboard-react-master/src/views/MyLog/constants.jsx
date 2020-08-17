const category = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const width = 1000;
const height = 840;

export const SLIDE_INFO = [
  {
    data: {
      categories: category,
      series: [
        {
          name: "Budget1",
          data: [51, 31, 51, 71, 61, 41, 21],
        },
        {
          name: "Income1",
          data: [81, 11, 71, 21, 51, 31, 61],
        },
        {
          name: "Budget3",
          data: [51, 31, 51, 71, 61, 41, 21],
        },
        {
          name: "Income4",
          data: [81, 11, 71, 21, 51, 31, 61],
        },
      ],
    },
    options: {
      chart: {
        width: width,
        height: height,
        title: {
          text: "운동 통계",
          align: "center",
        },
        format: "100",
      },
      yAxis: {
        title: "Month",
      },
      xAxis: {
        title: "Amount",
        suffix: "$",
      },
      series: {
        showLabel: true,
      },
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "Budget2",
          data: [52, 32, 52, 72, 62, 42, 22],
        },
        {
          name: "Income2",
          data: [82, 12, 72, 22, 52, 32, 62],
        },
      ],
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "Budget3",
          data: [53, 33, 53, 73, 63, 43, 23],
        },
        {
          name: "Income3",
          data: [83, 13, 73, 23, 53, 33, 63],
        },
      ],
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "Budget4",
          data: [54, 34, 54, 74, 64, 44, 24],
        },
        {
          name: "Income4",
          data: [84, 14, 74, 24, 54, 34, 64],
        },
      ],
    },
  },
];

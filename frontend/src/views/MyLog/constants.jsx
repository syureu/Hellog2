const category = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const width = 1000;
const height = 840;

export const SLIDE_INFO = [
  {
    data: {
      categories: category,
      series: [
        {
          name: "체스트 프레스",
          data: [75, 0, 0, 0, 77, 0, 0],
        },
        {
          name: "인클라인 벤치 프레스",
          data: [80, 0, 0, 0, 81, 0, 0],
        },
        {
          name: "팩덱 플라이",
          data: [77, 0, 0, 0, 80, 0, 0],
        },
        {
          name: "풀업",
          data: [0, 80, 0, 0, 0, 85, 0],
        },
        {
          name: "케이블로우",
          data: [0, 90, 0, 0, 0, 91, 0],
        },
        {
          name: "랫 풀 다운",
          data: [0, 87, 0, 0, 0, 88, 0],
        },
        {
          name: "레그 컬",
          data: [0, 0, 77, 0, 0, 0, 80],
        },
        {
          name: "레그 프레스",
          data: [0, 0, 79, 0, 0, 0, 80],
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
        title: "Set X Rep X Kg / 100",
      },
      xAxis: {
        title: "Day",
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
          name: "체스트 프레스",
          data: [0, 0, 0, 77, 0, 0, 75],
        },
        {
          name: "인클라인 벤치 프레스",
          data: [0, 0, 0, 81, 0, 0, 80],
        },
        {
          name: "팩덱 플라이",
          data: [0, 0, 0, 0, 80, 0, 0, 77],
        },
        {
          name: "풀업",
          data: [80, 0, 0, 0, 85, 0, 0],
        },
        {
          name: "케이블로우",
          data: [90, 0, 0, 0, 91, 0, 0],
        },
        {
          name: "랫 풀 다운",
          data: [87, 0, 0, 0, 88, 0, 0],
        },
        {
          name: "레그 컬",
          data: [0, 77, 0, 0, 0, 80, 0],
        },
        {
          name: "레그 프레스",
          data: [0, 79, 0, 0, 0, 80, 0],
        },
      ],
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "체스트 프레스",
          data: [0, 0, 77, 0, 0, 75, 0],
        },
        {
          name: "인클라인 벤치 프레스",
          data: [0, 0, 81, 0, 0, 80, 0],
        },
        {
          name: "팩덱 플라이",
          data: [0, 0, 80, 0, 0, 77, 0],
        },
        {
          name: "풀업",
          data: [0, 0, 0, 85, 0, 0, 80],
        },
        {
          name: "케이블로우",
          data: [0, 0, 0, 91, 0, 0, 90],
        },
        {
          name: "랫 풀 다운",
          data: [0, 0, 0, 88, 0, 0, 87],
        },
        {
          name: "레그 컬",
          data: [77, 0, 0, 0, 80, 0, 0],
        },
        {
          name: "레그 프레스",
          data: [79, 0, 0, 0, 80, 0, 0],
        },
      ],
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "체스트 프레스",
          data: [0, 77, 0, 0, 75, 0, 0],
        },
        {
          name: "인클라인 벤치 프레스",
          data: [0, 81, 0, 0, 80, 0, 0],
        },
        {
          name: "팩덱 플라이",
          data: [0, 80, 0, 0, 77, 0, 0],
        },
        {
          name: "풀업",
          data: [0, 0, 85, 0, 0, 80, 0],
        },
        {
          name: "케이블로우",
          data: [0, 0, 91, 0, 0, 90, 0],
        },
        {
          name: "랫 풀 다운",
          data: [0, 0, 88, 0, 0, 87, 0],
        },
        {
          name: "레그 컬",
          data: [0, 0, 0, 80, 0, 0, 77],
        },
        {
          name: "레그 프레스",
          data: [0, 0, 0, 80, 0, 0, 79],
        },
      ],
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "체스트 프레스",
          data: [77, 0, 0, 75, 0, 0, 0],
        },
        {
          name: "인클라인 벤치 프레스",
          data: [81, 0, 0, 80, 0, 0, 0],
        },
        {
          name: "팩덱 플라이",
          data: [80, 0, 0, 77, 0, 0, 0],
        },
        {
          name: "풀업",
          data: [0, 85, 0, 0, 80, 0, 0],
        },
        {
          name: "케이블로우",
          data: [0, 91, 0, 0, 90, 0, 0],
        },
        {
          name: "랫 풀 다운",
          data: [0, 88, 0, 0, 87, 0, 0],
        },
        {
          name: "레그 컬",
          data: [0, 0, 80, 0, 0, 77, 0],
        },
        {
          name: "레그 프레스",
          data: [0, 0, 80, 0, 0, 79, 0],
        },
      ],
    },
  },
  {
    data: {
      categories: category,
      series: [
        {
          name: "체스트 프레스",
          data: [75, 0, 0, 0, 77, 0, 0],
        },
        {
          name: "인클라인 벤치 프레스",
          data: [80, 0, 0, 0, 81, 0, 0],
        },
        {
          name: "팩덱 플라이",
          data: [77, 0, 0, 0, 80, 0, 0],
        },
        {
          name: "풀업",
          data: [0, 80, 0, 0, 0, 85, 0],
        },
        {
          name: "케이블로우",
          data: [0, 90, 0, 0, 0, 91, 0],
        },
        {
          name: "랫 풀 다운",
          data: [0, 87, 0, 0, 0, 88, 0],
        },
        {
          name: "레그 컬",
          data: [0, 0, 77, 0, 0, 0, 80],
        },
        {
          name: "레그 프레스",
          data: [0, 0, 79, 0, 0, 0, 80],
        },
      ],
    },
  },
];

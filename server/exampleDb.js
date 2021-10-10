export const talent = {
  id: 1235123,
  photo: "https://link-to-photo.com/user/photo/12323852.jpg",
  userName: "Surya",
  fullName: " I Gede Surya Adi Pranata",
  education: ["universitas udayana", "binar x glints academy"],
  address: "dalaung permai blok c3 no 11",
  phone: "+62824123512",
  experiance: [
    {
      id: 1235,
      role: "supervisor",
      company: "PT. Dirgahayu Valuta Prima",
      startDate: "2019-03-03",
      endDate: "2021-04-03",
    },
    {
      id: 2341,
      role: "staff",
      company: "PT. Dirgahayu Valuta Prima",
      startDate: "2016-03-03",
      endDate: "2019-04-03",
    },
  ],
  applicationDetails: [
    {
      id: 1234123,
      status: { id: 1, name: "Review" },
      companyDetails: {
        id: 123,
        name: "PT. Permata Hati",
        photo: "https://link-tophoto.com/company/photo/1235123.jpg",
        address: "Jl. Sudirman 2121f",
        website: "www.example-site.com",
        phone: "+623611234231",
      },
      pic: {
        id: 12343,
        userName: "Yuda",
        fullName: "Yuda Pradipa Adnyana",
        photo: "https://link-photo.com/pic/photo/18237y5.jpg",
        address: "jl. trunojoyo No. 11 A",
      },
    },
    {
      id: 9798,
      status: { id: 2, name: "HR Interview" },
      companyDetails: {
        id: 123,
        name: "PT. Permata Hati",
        photo: "https://link-tophoto.com/company/photo/1235123.jpg",
        address: "Jl. Sudirman 2121f",
        website: "www.example-site.com",
        phone: "+623611234231",
      },
      pic: {
        id: 12343,
        userName: "Yuda",
        fullName: "Yuda Pradipa Adnyana",
        photo: "https://link-photo.com/pic/photo/18237y5.jpg",
        address: "jl. trunojoyo No. 11 A",
      },
    },
  ],
};

const pic = {
  id: 12343,
  userName: "Yuda",
  fullName: "Yuda Pradipa Adnyana",
  photo: "https://link-photo.com/pic/photo/18237y5.jpg",
  address: "jl. trunojoyo No. 11 A",
};

const company = {
  id: 123,
  name: "PT. Permata Hati",
  photo: "https://link-tophoto.com/company/photo/1235123.jpg",
  address: "Jl. Sudirman 2121f",
  website: "www.example-site.com",
  phone: "+623611234231",
  jobVacancy: [
    {
      id: 1,
      roleOpen: [
        "full stack developer",
        "back end developer",
        "frontend developer",
      ],
      requirement: [
        "fluent in english",
        "deep understanding of react",
        "fluent use git",
        "bachelor degree of computer science",
      ],
      description:
        "We currently hiring Front End Web Developer with requirement. minimum Education Bachelor degree",
      dateCreated: "2021-03-02",
      hiringStatus: true,
    },
    {
      id: 2,
      roleOpen: [
        "full stack developer",
        "back end developer",
        "frontend developer",
      ],
      requirement: [
        "fluent in english",
        "deep understanding of react",
        "fluent use git",
        "bachelor degree of computer science",
        "bachelor degree of computer science",
        "bachelor degree of computer science",
        "bachelor degree of computer science",
      ],
      description:
        "We currently hiring Front End Web Developer with requirement. minimum Education Bachelor degree",
      dateCreated: "2021-03-02",
      hiringStatus: false,
    },
  ],
};

const talentStatusList = [
  { id: 1, name: "Review" },
  { id: 2, name: "HR Interview" },
  { id: 3, name: "User Interview" },
  { id: 4, name: "Offer" },
  { id: 5, name: "Accepted" },
  { id: 6, name: "Rejected" },
];

const examplePostTalents = {
  photo:
    "https://i1.wp.com/jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png?fit=300%2C300&ssl=1",
  education: ["SD"],
  username: "Bomi",
  fullname: "Bomi saputra",
  address: "KSB",
  phone: "324111125",
  experience: [
    {
      role: "sales",
      company: "indoWarung",
      startDate: "2021-09-02",
      endDate: "2021-01-01",
    },
  ],
};

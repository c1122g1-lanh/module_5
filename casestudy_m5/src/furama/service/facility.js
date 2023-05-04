export const facility = [
    {
        id: 1,
        name: 'Villa ',
        image: "https://luvill.asia/wp-content/uploads/2019/08/kien-truc-furama-resort-da-nang-1024x680.jpg",
        area: 50,
        price: "5.000.000 vnđ",
        maxPeople: 5,
        rentType: 1,
        standardRoom: "4 sao",
        descriptionOtherCovenience: 'good',
        poolArea: 5,
        numberOfFloors: 5,
        serviceFree: null,
        serviceAdd: 1
    },
    {
        id: 2,
        name: 'House ',
        image: "https://luvill.asia/wp-content/uploads/2019/08/kien-truc-furama-resort-da-nang-1024x680.jpg",
        area: 25,
        price: "2.000.000 vnđ",
        maxPeople: 3,
        rentType: 2,
        standardRoom: "2 sao",
        descriptionOtherCovenience: 'good',
        poolArea: 5,
        numberOfFloors: 5,
        serviceFree: null,
        serviceAdd: 1
    },
    {
        id: 3,
        name: 'Room ',
        image: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        area: 10,
        price: "1.000.000 vnđ",
        maxPeople: 2,
        rentType: 3,
        standardRoom: null,
        descriptionOtherCovenience: null,
        poolArea: null,
        numberOfFloors: null,
        serviceFree: 1,
        serviceAdd: 3
    },
    {
        id: 4,
        name: 'Villa ',
        image: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-Sea-View-1047x563.jpg",
        area: 50,
        price: "5.000.000 vnđ",
        maxPeople: 5,
        rentType: 1,
        standardRoom: null,
        descriptionOtherCovenience: 'good',
        poolArea: 5,
        numberOfFloors: 5,
        serviceFree: null,
        serviceAdd: 1
    }
];

const serviceFree = [
    {
        id: 1,
        name: "Nước ngọt"
    },
    {
        id: 2,
        name: "Khăn ướt"
    },
    {
        id: 3,
        name: "Cà phê"
    },
    {
        id: 4,
        name: "Nước lọc"
    },
]

const serviceAdd = [
    {
        id: 1,
        name: "massage",
    },
    {
        id: 2,
        name: "karaoke"
    },
    {
        id: 3,
        name: "thức ăn"
    },
    {
        id: 4,
        name: "nước uống"
    },
    {
        id: 5,
        name: "thuê xe di chuyển tham quan resort"
    }
]


const facilityType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
];

const rentType = [
    {
        id: 1,
        name: 'year'
    },
    {
        id: 2,
        name: 'month'
    },
    {
        id: 3,
        name: 'day'
    }

]
export default {
    facility, facilityType, rentType,serviceAdd,serviceFree
}
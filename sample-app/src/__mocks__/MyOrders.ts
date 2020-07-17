import {Orders} from "../../src/myorders/Orders";

export const OrdersList: Array<Orders> = [
    {
        date: new Date().toLocaleString(),
        status: "Delivered",
        bookTitle: "Maths",
        authorName: "Naveen",
        bookPrice: 80,
        imageUrl: "",
        id:1,
        pageCount: 1
    },
];
import {Orders} from "../../src/myorders/Orders";

export const OrdersList: Array<Orders> = [
        {
            date: new Date().toLocaleString(),
            status: "Delivered",
            isbn: "9781593275846",
            title: "Eloquent JavaScript, Second Edition",
            subtitle: "A Modern Introduction to Programming",
            author: "Marijn Haverbeke",
            pages: 472,
            price: 500,
            id:1
        },
];
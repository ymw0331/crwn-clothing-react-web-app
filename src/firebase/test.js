import firebase from "firebase/compat";
import "firebase/firestore";

const firestore = firebase.firestore();

console.log(
  firestore
    .collection("users")
    .doc("Pp4EiY1mU7dzT2i2KKZT")
    .collection("cartItem")
    .doc("vo2Ny0jpWjywdIyJo7wP")
);
firestore.doc("/users/Pp4EiY1mU7dzT2i2KKZT/cartItem/vo2Ny0jpWjywdIyJo7wP");
firestore.doc("/users/Pp4EiY1mU7dzT2i2KKZT/cartItem");

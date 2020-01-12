const enquiryPageMap = [
  "welcome",
  "travel",
  "pricing",
  "discounts",
  "contact",
  "location",
  "details",
  "thank-you"
];

enquiryPageMap.forEach((page, ind) => {
  enquiryPageMap[page] = ind;
});

export default enquiryPageMap;

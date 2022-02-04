export const url = "http://localhost";

export const shopPort = "50050";
export const stylingPort = "50051";
export const printingPort = "50052";
export const deliveryPort = "50053";
export const packagingPort = "50054";

//const shopUrl = process.env.SHOP_URL ? process.env.SHOP_URL : "";
//const shopUrl = "http://192.168.1.82:50050";
// const shopUrl = "http://10.198.12.224:50050";
//const shopUrl = "http://shopping:50050";
// My EKS cluster
//const shopUrl = "http://ad45cf8e6b31c4722baadf5e4691ad97-1999049734.us-east-2.elb.amazonaws.com:50050";
// Dans' EKS cluster
//const shopUrl = "http://aedc87b6eb8814155a34a7e4615101e7-1192577189.us-west-1.elb.amazonaws.com:50050";
//const shopUrl = "http://192.168.1.81:50050";
//const shopUrl = "http://ac0c4e2957fba45829efd48f17180dbd-1879833562.us-east-2.elb.amazonaws.com:50050";
const shopUrl = "http://a3d4fc9fb9103432e9720d4c6a1feefc-2083841041.us-east-2.elb.amazonaws.com:50050";


export const makeRequest = (url, method, body) => {
    return fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    })
}

export const orderShirts = (name, quantity) => {
//    return makeRequest(`${shopUrl}/api/shop/order`, "POST", {
//      return makeRequest(`http://10.198.12.224:50050/shop/order`, "POST", {
      return makeRequest(`${shopUrl}/shop/order`, "POST", {
        styleName: name,
        quantity,
        payment: {
           name: "Howard Y",
           creditCardNum: "1234-111-2341-4223",
        },
    });
}

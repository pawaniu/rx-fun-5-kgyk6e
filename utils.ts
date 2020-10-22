const donuts = [
  {id: 1, name: "Maple Bar"},
  {id: 2, name: "Boston Creme"},
  {id: 3, name: "Old Fashion"},
];

const users = [
  {id: 1, name: "Frosty"},
  {id: 2, name: "Brocco"},
  {id: 3, name: "Schwarty"},
]

const mockLatency = 2000;

/**
 * Mock HTTP call. If you pass `donuts` or `users` as the url
 * it will return 
 */
export function http(url){
  let data = [];
  if(url.indexOf('user') >= 0){
    data = users;
  } else if(url.indexOf('donut')) {
    data = donuts;
  } else {
    console.warn('This only supports `/users` or `/donuts`.');
    return new Promise((res, rej) => {
      setTimeout(() => rej(data), mockLatency)
    })
  }

  return new Promise((res, rej) => {
    setTimeout(() => res(data), mockLatency);
  });
}
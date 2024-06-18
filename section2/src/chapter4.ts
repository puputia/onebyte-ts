// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};


let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winter",
  birth: "1997",
  bio: "안녕하세요",
  location: "부천시",
}
  ;
// 타입 별칭
let user2: User =
{
  id: 1,
  name: "이정환",
  nickname: "winter",
  birth: "1997",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니쳐
type CountryCodes = {
  [key: string]: string;
};



let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitiedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
}
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
}
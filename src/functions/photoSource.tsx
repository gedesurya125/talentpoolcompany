export const checkPhotoSource = (photo:any) => {
  const urlCheckRgx = /^[https:|http:].*$/gi
  return urlCheckRgx.test(photo)
}

export const selectPhotoSource = (photo:any, sourceUrl:string) => { //case value is not falsy
  // console.log('INI TIPE FOTONYA',typeof photo);
  if(typeof photo === "object" && photo !== null) return URL.createObjectURL(photo);
  if(checkPhotoSource(photo)) return photo; //check if photo contain https:
  return "https://i1.wp.com/jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png?fit=300%2C300&ssl=1"
  // return sourceUrl+photo
}
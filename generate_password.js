// 定義產生密碼函式
// generate_password.js

// define sample function to randomly return an item in an array
// 將隨機抽取陣列元素的方法變成一個函式
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

// define generatePassword function
function generatePassword(options) {
    // define things user might want
    // 將使用者所有可能會想放入摸彩箱的項目先準備好
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // define dummy data
    // 用假資料來測試函式是否能正確執行
    // const options = {
    //     length: 12,
    //     lowercase: 'on',
    //     uppercase: 'on',
    //     numbers: 'on',
    //     excludeCharacters: '123456'
    //   }
    // console.log('options', options)

    // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

    // console.log('collection', collection)
    // remove things user do not need
    // 使用 filter 過濾掉使用者不想要的資料
    if (options.excludeCharacters) {
        // console.log(`exclude characters: ${options.excludeCharacters}`)
        collection = collection.filter(
          character => !options.excludeCharacters.includes(character)
        )
      }

    // return error notice if collection is empty
    if (collection.length === 0) {
       return 'There is no valid character in your selection.'
      }

      // console.log('collection', collection)
    // start generating password
    // 使用 for 迴圈產生多組密碼，並透過 + 串連起來
    let password = ''
  for (let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }
    // console.log('sample(collection)', sample(collection))
    // 根據使用者期望的密碼長度產生密碼

    // return the generated password
    // console.log('This function will generate password')
    // console.log('password', password) // 確認用
    return password
}
  // invoke generatePassword function 
  // generatePassword()

  // export generatePassword function for other files to use
  module.exports = generatePassword
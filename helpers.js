const capitalize = (sentence) => {
  const sentenceLowerCase = sentence.slice(1);
  const capitalizedSetence = sentence.charAt(0).toUpperCase() + sentenceLowerCase
  return capitalizedSetence
}

const snake_to_camel = (sentence) => {
  const words = sentence.split('_');
  let new_sentence = ''
  for(let word of words){
    new_sentence+=capitalize(word)
  }
  return new_sentence
}

module.exports = {
  capitalize,
  snake_to_camel
}
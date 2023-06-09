export function isValidHttpUrl(inputString) {
  try {
    const newUrl = new URL(`http://${inputString}`);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (error) {
    return false;
  }
}

const handleurl = (url) => {
    
};

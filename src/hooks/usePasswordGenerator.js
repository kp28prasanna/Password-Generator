import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const generatePassword = (checkBoxData, charLength) => {
    let charSet = "",
      generatedPassword = "";
    const selectedData = checkBoxData.filter((checkbox) => checkbox.state);
    if (selectedData?.length === 0) {
      setErrorMsg("Select atleast one option");
      setPassword("");
      return;
    }
    selectedData.forEach((element) => {
      switch (element.title) {
        case "Include UpperCase Letter":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include LowerCase Letter":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include Symbols":
          charSet += "!@#$%^&*()";
          break;

        default:
          break;
      }
    });

    for (let i = 0; i < charLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
    setErrorMsg("");
  };
  return [password, errorMsg, generatePassword];
};
export default usePasswordGenerator;

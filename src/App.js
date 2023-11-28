import "./App.css";
import { useState } from "react";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
const App = () => {
  const [characterLength, setCharacterLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include UpperCase Letter", state: false },
    { title: "Include LowerCase Letter", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [password, errorMsg, generatePassword] = usePasswordGenerator();
  const handleCheckBox = (index) => {
    const updatedcheckBoxData = [...checkBoxData];
    updatedcheckBoxData[index].state = !updatedcheckBoxData[index].state;
    setCheckBoxData(updatedcheckBoxData);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            customClass="copyBtn"
            text={copied ? "copied" : "copy"}
            onClick={handleCopy}
          />
        </div>
      )}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{characterLength}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={characterLength}
          onChange={(e) => setCharacterLength(e?.target?.value)}
        />
      </div>
      <div className="checkBoxes">
        {checkBoxData.map((checkbox, i) => {
          return (
            <Checkbox
              key={i}
              title={checkbox.title}
              state={checkbox.state}
              onChange={() => handleCheckBox(i)}
            />
          );
        })}
      </div>
      <PasswordStrengthChecker password={password} />
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
      <Button
        customClass="generateBtn"
        text="Generate Password"
        onClick={() => generatePassword(checkBoxData, characterLength)}
      />
    </div>
  );
};
export default App;

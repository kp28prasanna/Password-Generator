const PasswordStrengthChecker = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    }
    if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };
  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <></>;
  return (
    <div className="password-strength">
      Strength : <span>{passwordStrength}</span>
    </div>
  );
};
export default PasswordStrengthChecker;

import React from "react";
import "../style/Popup.css";

const FinishAccount = ({
  onSubmitUser,
  handleChange,
  usernameIsTaken,
  setUsernameIsTaken,
}) => {
  return (
    <div className="auth-container email">
      <div className="sign-up-title">Finish Creating Account</div>
      <form id="google-su" onSubmit={onSubmitUser}>
        <div className="input-container">
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            onClick={() => setUsernameIsTaken(false)}
            maxLength={15}
            required
          />
          {(() => {
            if (usernameIsTaken)
              return <div className="error">Username is already in use</div>;
          })()}
        </div>

        <input
          type="text"
          id="display-name"
          placeholder="Display Name"
          onChange={handleChange}
          maxLength={50}
          required
        />
        <button className="sign-up-option-container" type="submit">
          <div className="sign-up-text-container">
            <div className="sign-up-text">Create Account</div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default FinishAccount;

import FormBase from "./bases/form_base";
import InputNormal from "./ui_elements/input/input_normal";

/**
 * TODO: DOCU
 */

const FormLogin = ({
  usernameValue,
  setUsernameValue,
  passwordValue,
  setPasswordValue,
}) => {
  return (
    <div className="">
      <FormBase>
        <p className="relative font-bold text-5xl p- inline-block after:block after:h-1 after:w-full after:bg-gradient-to-r after:bg-primary after:absolute after:left-0 after:bottom-[-8px]">
          SnippetVault<span className="text-secondary">.</span>
        </p>
        <InputNormal
          label="Benutzername"
          inputValue={usernameValue}
          onInputChange={setUsernameValue}
        />
        <InputNormal
          type="password"
          label="Passwort"
          inputValue={passwordValue}
          onInputChange={setPasswordValue}
        />
      </FormBase>
    </div>
  );
};

export default FormLogin;

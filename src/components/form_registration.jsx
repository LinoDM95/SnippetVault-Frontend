import FormBase from "./bases/form_base";
import InputNormal from "./ui_elements/input/input_normal";

/**
 * TODO: DOCU
 * ["username", "password", "email", "first_name", "last_name"]
 */

const FormRegistration = ({
  usernameValue,
  setUsernameValue,
  passwordValue,
  setPasswordValue,
}) => {
  return (
    <div className="">
      <FormBase>
        <p className="relative font-bold text-5xl p- inline-block after:block after:h-1 after:w-full after:bg-gradient-to-r after:bg-primary after:absolute after:left-0 after:bottom-[-8px]">
          Registrieren
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

export default FormRegistration;

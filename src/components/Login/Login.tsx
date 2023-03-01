import Image from "next/image";

export default function Login() {
  return (
    <div className="overlay">
      <div className="login">
        <button className="login_btn">
          <Image
            src={"/cross.svg"}
            alt={"close the popup"}
            width={"24"}
            height={"24"}
          />
        </button>
        <div className="login_items">
          <div className="login_items_header">
            <div className="login_items_header_logo">
              <Image
                src={"/logo.svg"}
                alt={"logo"}
                height={"45"}
                width={"45"}
              />
            </div>
            <div className="login_items_header_title">Вход в аккаунт</div>
          </div>
          <div className="login_items_options">
            <button className="login_items_options_button">
              <Image
                src={"/google.svg"}
                alt={"google"}
                width={"24"}
                height={"24"}
                className="login_items_options_image"
              />
              Продолжить с Google
            </button>
            <button className="login_items_options_button">
              <Image
                src={"/apple.svg"}
                alt={"apple"}
                width={"24"}
                height={"24"}
                className="login_items_options_image"
              />
              Продолжить с Apple
            </button>
            <button className="login_items_options_button">
              <Image
                src={"/email.svg"}
                alt={"email"}
                width={"24"}
                height={"24"}
                className="login_items_options_image"
              />
              Почта
            </button>
          </div>
          <div className="login_items_signUp">
            Нет аккаунта?{" "}
            <span className="login_items_signUp_link">Регистрация</span>
          </div>
        </div>
      </div>
    </div>
  );
}

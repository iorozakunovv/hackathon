import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <div className="Auth">
      <form onSubmit={onAuthStart}>
        {errorOutput}
        <div className="Auth">
          <img></img>
          <input type="email" placeholder="e-mail" name="email" required />
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            required
            minLength="6"
          />
          <input type="phone" placeholder="Телефон" name="Телефон" />
          <input type="phone" placeholder="Код зеленой книги" name="Код зеленой книги" />
          <input type="phone" placeholder="Площадь в Га"/>
          <input placeholder="Адрес вашего участка" />
          <div class="form-group">
            <div class="col-md-4 selectContainer">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-list"></i>
                </span>
                <select name="state" class="select">
                  <option value=" ">Выберите ваш тип урожая</option>
                  <option>Картофель</option>
                  <option>Кукуруза</option>
                  <option>Люцерна</option>
                  <option>Пшеница</option>
                  <option>Свекла</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button>Вход</button>
        <button>Регистрация</button>
      </form>
    </div>
  );
}

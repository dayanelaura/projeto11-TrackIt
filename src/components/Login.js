import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { loginUser } from "../API/dadosRequests";
import LoginStyle from "../styled_components/LoginStyle";
import UserContext from "../UserContext";

export default function Login() {
  const { setDadosUsuario } = useContext(UserContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formLogin, setFormLogin] = useState({
                                              email: "",
                                              password: ""
                                             });

  function handleForm(e) {
    setFormLogin({
                  ...formLogin,
                  [e.target.name]: e.target.value
                });
    console.log(formLogin);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const promise = loginUser(formLogin);
    console.log(promise);

    promise.then((e) => {
      setDadosUsuario(e.data);
      console.log(e, 'aqui oioi');
      localStorage.setItem("trackit", JSON.stringify({...e.data, formLogin:formLogin}));
      navigate("/hoje");
    });
    promise.catch(() => {
      alert("houve um erro no seu login");
      setIsLoading(false);
    });

  }

  return (
    <LoginStyle>
      <img src={logo} alt="logo trackit" />
      <form onSubmit={handleSubmit}>
        <input value={formLogin.email} onChange={handleForm} placeholder="email"
               name="email" type="email" disabled={isLoading} required />
        <input value={formLogin.password} onChange={handleForm} name="password" 
               placeholder="senha" type="password" disabled={isLoading} required />

        {isLoading ? (
            <button>
                <ThreeDots color="#FFFFFF"/>
            </button>
            ) : (
            <button type="submit">Entrar</button>
            )
        }

      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>

    </LoginStyle>
  );
}
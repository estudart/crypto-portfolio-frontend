import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="App dark-theme">
      {/*
      <header>
        <h1 className="page-title">Order Report</h1>
      </header>
      */}
      <main className="container">
        <header>
          <h1 className="page-title-login">CryptoPulse</h1>
        </header>
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;

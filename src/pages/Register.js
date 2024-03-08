import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className="App dark-theme login-page">
      {/*
      <header>
        <h1 className="page-title">Order Report</h1>
      </header>
      */}
      <main className="container">
        <header>
          <h1 className="page-title-login">CryptoPulse</h1>
        </header>
        <RegisterForm />
      </main>
    </div>
  );
}

export default Register;

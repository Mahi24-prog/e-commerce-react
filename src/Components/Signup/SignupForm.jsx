const SignupForm = () => {

  return (
    <>
      <div id="signup-container">
        <h2 className="md-h text-center">Signup</h2>
        <form action="#">
          <div className="form-content flex-col">
            <label for="email" className="md-text">Email</label>
            <input type="email" name="email" placeholder="mahendra@gmail.com" />
            <label for="password" className="md-text">Password</label>
            <input type="password" name="password" placeholder="******" />
            <div className="terms-conditions">
              <input type="checkbox" name="terms-conditions" id="terms-conditions" />
              <span className="sm-text">I accept all terms & conditions</span>
            </div>
            <button className="btn-primary btn">Signup</button>
            <h3 className="sm-text text-center">Already have an account<i className="fa fa-arrow-right md-text"></i></h3>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignupForm
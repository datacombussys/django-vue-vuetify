<template>
  <div id="image-bg">
    <div class="ml-auto mr-auto centering-container">
      <b-tabs content-class="mt-3">
        <b-tab title="Login" active>
          <!-- Login Form-->
          <div class="card p-4 border-top-left-radius-0 border-top-right-radius-0">
            <form>
              <div class="form-group">
                <label class="form-label" for="username">Username</label>
                <input
                  type="email"
                  id="username"
                  class="form-control"
                  placeholder="your id or email"
                  value="drlantern@gotbootstrap.com"
                />
                <span class="help-block">Your unique username to app</span>
              </div>
              <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="password"
                  value="password123"
                />
                <span class="help-block">Your password</span>
              </div>
              <div class="form-group text-left">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="rememberme" />
                  <label
                    class="custom-control-label"
                    for="rememberme"
                  >Remember me for the next 30 days</label>
                </div>
              </div>
              <button type="submit" class="btn btn-default float-right">Secure login</button>
            </form>
          </div>
        </b-tab>
        <!-- Refgister Form -->
        <b-tab class="centering" title="Register">
          <div id="login-register" class="col-xl-12">
            <div class="card p-4 rounded-plus bg-faded">
              <div class="alert alert-primary text-dark" role="alert">
                <strong>Heads Up!</strong> Due to server maintenance from 9:30GTA to 12GTA, the verification emails could be delayed by up to 10 minutes.
              </div>
              <form id>
                <div class="form-group row">
                  <label class="col-xl-12 form-label" for="fname">Your first and last name</label>
                  <div class="col-6 pr-1">
                    <input
                      type="text"
                      id="fname"
                      class="form-control"
                      placeholder="First Name"
                      required
                    />
                    <div class="invalid-feedback">No, you missed this one.</div>
                  </div>
                  <div class="col-6 pl-1">
                    <input
                      type="text"
                      id="lname"
                      class="form-control"
                      placeholder="Last Name"
                      required
                    />
                    <div class="invalid-feedback">No, you missed this one.</div>
                  </div>
                </div>
                <div class="form-group">
                  <label
                    class="form-label"
                    for="emailverify"
                  >Email will be needed for verification and account recovery</label>
                  <input
                    type="email"
                    id="emailverify"
                    class="form-control"
                    placeholder="Email for verification"
                    required
                  />
                  <div class="invalid-feedback">No, you missed this one.</div>
                  <div class="help-block">Your email will also be your username</div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="userpassword">
                    Pick a password:
                    <br />Don't reuse your bank password, we didn't spend a lot on security for this app.
                  </label>
                  <input
                    type="password"
                    id="userpassword"
                    class="form-control"
                    placeholder="minimm 8 characters"
                    required
                  />
                  <div class="invalid-feedback">Sorry, you missed this one.</div>
                  <div
                    class="help-block"
                  >Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
                </div>
                <div class="form-group demo">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="terms" required />
                    <label class="custom-control-label" for="terms">I agree to terms & conditions</label>
                    <div class="invalid-feedback">You must agree before proceeding</div>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="newsletter" />
                    <label
                      class="custom-control-label"
                      for="newsletter"
                    >Sign up for newsletters (dont worry, we won't send so many)</label>
                  </div>
                </div>
                <div class="row no-gutters">
                  <div class="col-md-4 ml-auto text-right">
                    <button
                      id="js-login-btn"
                      type="submit"
                      class="btn btn-danger mt-3"
                    >Send verification</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </b-tab>
        <!--Forgot Password Tab -->
        <b-tab title="Forgot Password">
          <div class="ml-auto mr-auto">
            <div class="card p-4 rounded-plus bg-faded">
              <form id="js-login" novalidate action="intel_analytics_dashboard.html">
                <div class="form-group">
                  <label class="form-label" for="lostaccount">Your username or email</label>
                  <input
                    type="email"
                    id="lostaccount"
                    class="form-control"
                    placeholder="Recovery email"
                    required
                  />
                  <div class="invalid-feedback">No, you missed this one.</div>
                  <div class="help-block">We will email you the instructions</div>
                </div>
                <div class="row no-gutters">
                  <div class="col-md-4 ml-auto text-right">
                    <button id="js-login-btn" type="submit" class="btn btn-danger">Recover</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  background-color: rgb(160, 44, 44);
}

html,
body {
  height: 100vh;
}

.bg-image {
  background-image: url("../assets/images/backgrounds/login-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: inherit;
  height: 100vh;
}


.centering-container {

  max-width: 600px;
}

</style>
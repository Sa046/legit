 class Loginpage {
    loginwithcreds(username, password){

    cy.get(this.userNameInput()).type(username) 

    cy.get(this.passwordInput()).type(password)

    cy.get(this.loginBtn()).click()
 }

    userNameInput() {
        return '[placeholder="Username"]';
    }
    passwordInput() {
        return 'input[type="password"]';
    }
    loginBtn() {
        return 'button[type="submit"]';
    }
    LoginErrorMsg() {
        return "Invalid credentials";
    }
}
export default Loginpage;
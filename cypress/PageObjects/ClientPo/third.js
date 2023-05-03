class Loginsac {
creds(username, password) {

    cy.get(this.usernameInput()).type(username)
    cy.get(this.passwardInput()).type(password)
    cy.get(this.loginBtn()).click()

}

    usernameInput(){
        return ('input[name="username"]')
    }

    passwardInput(){
        return ('input[type="password"]')
    }

    loginBtn(){
        return ('button[type="submit"]')
    }
}
export default Loginsac;
    
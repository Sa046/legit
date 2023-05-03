class eligant {

sham(usersachin,emailsa,word){
    cy.get(this.userNameInput()).type(usersachin)
    cy.get(this.emailInput()).type(emailsa)
    cy.get(this.userpassword()).type(word)
}

    userNameInput(){
        return ("#reg_username")
    }
    emailInput(){
        return ('#reg_email')
    }

userpassword(){
    return ('#reg_password')
}
}
export default eligant;
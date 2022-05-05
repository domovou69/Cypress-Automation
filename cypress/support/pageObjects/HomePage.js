class HomePage{

    setName(name) {
        return cy.get(':nth-child(1) > .form-control').type(name)
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }

    getEnterpreneaur() {
        return cy.get('#inlineRadio3')
    }

    getShopNavigationLink() {
        return cy.get('a[href="/angularpractice/shop"]')
    }
}

export default HomePage;


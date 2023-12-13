import Login from "../../App/Pages/Login"
import React from "react"
import { fireEvent, render } from '@testing-library/react-native'
import { UserContext, UserProvider } from "../../App/Context/UserContext"


const mockUserStore = jest.fn()

const mockUserContext = {
    storeUser: mockUserStore
}
const renderWithProvider = (component) => {
    return render(
        <UserContext.Provider  value={mockUserContext}>
            {component}
        </UserContext.Provider>
    )
}

describe('Login Component', ()=> {
    it("1. renders correctly", ()=> {
        
        const {getByPlaceholderText, getByText} = renderWithProvider(<Login />)
        expect(getByPlaceholderText('Username')).toBeTruthy()
        expect(getByPlaceholderText('Password')).toBeTruthy()
        expect(getByText('Sign In')).toBeTruthy()
    })

    it("update state on in[ut change", ()=> {
        const {getByPlaceholderText} = renderWithProvider(<Login />)
        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(usernameInput, "stevano")
        fireEvent.changeText(passwordInput, "123456")


        expect(usernameInput.props.value).toBe('stevano')
    })
})
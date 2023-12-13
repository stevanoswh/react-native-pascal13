import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const storeUser = async(userData) => {
        try {
            const jsonValue = JSON.stringify(userData)
            await AsyncStorage.setItem('user', jsonValue)
            setUser(userData)
        } catch (e){
            console.error(e)
        }
    }

    const loadUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            console.error(e)
        }
    }

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user')
            setUser(null)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        loadUser().then((userData) => {
            if(userData) {
                setUser(userData)
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{user, storeUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}
import React, { createContext, useState, useContext, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [token, setToken] = useState(localStorage.getItem("authToken") || null);
    const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!token); // Initialize based on token
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Log state changes for debugging
    useEffect(() => {
        console.log("Auth state updated: ", {
            isAuthenticated,
            user,
            token,
            userId,
        });
    }, [isAuthenticated, user, token, userId]);

    // Function to handle login
    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        console.log("Attempting login...");
        try {
            const response = await fetch("https://hire-me-backend-q3kk.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful: ", data);
                setUser(data.user);
                setToken(data.token);
                setUserId(data.user._id);
                setIsAuthenticated(true);
                localStorage.setItem("user", data.user);

                localStorage.setItem("authToken", data.token);
                localStorage.setItem("userId", data.user._id);
            } else {
                const errorData = await response.json();
                console.error("Login error: ", errorData.message);
                setError(errorData.message || "Login failed");
                setIsAuthenticated(false);
            }
        } catch (err) {
            console.error("Login fetch error: ", err);
            setError("Something went wrong. Please try again.");
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    // Function to handle logout
    const logout = () => {
        console.log("Logging out...");
        setUser(null);
        setToken(null);
        setUserId(null);
        setIsAuthenticated(false);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
    };

    // Load user data from token and ID on app start or refresh
    useEffect(() => {
        console.log("Validating token and user ID...");
        if (token && userId) {
            const fetchUserFromToken = async () => {
                try {
                    const response = await fetch(`https://hire-me-backend-q3kk.onrender.com/api/users/${userId}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log("User data fetched: ", data.user);
                        setUser(data.user);
                localStorage.setItem("user", data.user);

                        setIsAuthenticated(true);
                    } else {
                        console.error("Invalid token or user ID. Logging out.");
                        logout();
                    }
                } catch (err) {
                    console.error("Error during user validation: ", err);
                    logout();
                }
            };

            fetchUserFromToken();
        } else {
            console.log("No valid token or user ID found. User is not authenticated.");
            setIsAuthenticated(false);
        }
    }, [token, userId]);

    return (
        <AuthContext.Provider
            value={{
                user,
                userId,
                login,
                logout,
                isAuthenticated,
                error,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

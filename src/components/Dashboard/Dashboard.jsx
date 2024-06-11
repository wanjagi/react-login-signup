import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import "./Dashboard.css";

const Dashboard = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserData = async (user) => {
        try {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } catch (err) {
            console.error("Error fetching user data:", err);
            setError("Failed to load user data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                await fetchUserData(user);
            } else {
                setLoading(false);
                console.log("User not logged in");
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        auth.signOut().then(() => {
            console.log("User signed out");
            window.location.href = "/login"
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container">
            <h1>Dashboard</h1>
            {userDetails ? (
                <>
                    <div>
                        <p>Username: {userDetails.username}</p>
                        <p>Email: {userDetails.email}</p>
                    </div>
                    <button onClick={handleLogout}>Log out</button>
                </>
            ) : (
                <p>User details not found</p>
            )}
        </div>
    );
};

export default Dashboard;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const NewPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
    }
    return <div>
        <button onClick={goToHome}>GO TO HOME</button>
        <h1>{userId}</h1>
    </div>;
};

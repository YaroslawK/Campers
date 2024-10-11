import { useState } from "react";
import { Details } from "../Details/Details";
import { Reviews } from "../Reviews/Reviews";

export const InfoNavigation = () => {
    const [InfoNavigation, setInfoNavigation] = useState('A');

    const renderComponent = () => {
        if (InfoNavigation === 'A') {
            return <Details />;
        } else if (InfoNavigation === 'B') {
            return <Reviews />;
        } else {
            return <div>Please select a component</div>;
        }
    };

    return (
        <>
            <p onClick={() => setInfoNavigation('A')}>Features</p>
            <p onClick={() => setInfoNavigation('B')}>Review</p>
            <div style={{ marginTop: '20px' }}>
                {renderComponent()}
            </div>
        </>
    );
};

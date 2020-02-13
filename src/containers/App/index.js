import React, { useState } from "react";

import InputGroup from "../InputGroup";

import Layout from "../../components/Layout";
import CustomMap from "../../components/CustomMap";
import DnDList from "../../components/DnDList";

import "./index.scss";

const App = () => {
    const [ymaps, setYmaps] = useState(null);
    const [points, setPoints] = useState([]);
    const [center, setCenter] = useState([55.75, 37.57]);

    const addPoint = point =>
        setCenter([point.coordinates.lat, point.coordinates.lon]) || setPoints([...points, point]);

    const changePoint = changedPoint => {
        const index = points.findIndex(point => point.id === changedPoint.id);
        points[index] = changedPoint;
        setPoints([...points]);
    };

    return (
        <Layout>
            <CustomMap setYmaps={setYmaps} center={center} points={points} changePoint={changePoint} />
            <hr />
            <InputGroup ymaps={ymaps} addPoint={addPoint} />
            <hr />
            <DnDList setPoints={setPoints} points={points} />
        </Layout>
    );
};

export default App;

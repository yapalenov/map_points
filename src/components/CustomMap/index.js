import React, { useRef } from "react";
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";
import { getGeoInfo } from "../../common/getGeoInfo";

import "./index.scss";

const CustomMap = ({ points, changePoint, center, setYmaps }) => {
    const onLoad = ymaps => setYmaps(ymaps);

    const dragEndHandler = async (coordinates, point) => {
        changePoint({ ...point, load: true });
        const point_info = await getGeoInfo([...coordinates].reverse().join(","));
        const address =
            point_info.status === "success" && point_info.suggestions.length
                ? point_info.suggestions[0].address
                : point.address;

        changePoint({ ...point, address, load: false });
    };

    // Define dragTriggerAttempt for update state not every time, it's important thing for optimization

    const dragTriggerAttempt = 2;
    let dragCounter = 0;

    return (
        <YMaps query={{ load: "suggest" }}>
            <div className="map-container">
                <Map
                    onLoad={onLoad}
                    width="100%"
                    height="100%"
                    state={{ center: center, zoom: 9 }}
                    options={{ minZoom: 3 }}
                >
                    <Polyline
                        geometry={points.map(point => [point.coordinates.lat, point.coordinates.lon])}
                        options={{
                            balloonCloseButton: false,
                            strokeColor: "#000",
                            strokeWidth: 4,
                            strokeOpacity: 0.5,
                        }}
                    />
                    {points.map(point => (
                        <Placemark
                            key={point.id}
                            onDrag={e =>
                                ++dragCounter === dragTriggerAttempt &&
                                changePoint({
                                    ...point,
                                    coordinates: {
                                        lat: e.get("target").geometry.getCoordinates()[0],
                                        lon: e.get("target").geometry.getCoordinates()[1],
                                    },
                                })
                            }
                            properties={{
                                balloonContent: `<span>Адрес: ${point.address}</span><hr><span>Координаты: ${point.coordinates.lat}, ${point.coordinates.lon}</span>`,
                            }}
                            modules={["geoObject.addon.balloon"]}
                            // onClick={e => e.get("target").balloon.open()}
                            onDragEnd={e => dragEndHandler(e.get("target").geometry.getCoordinates(), point)}
                            options={{
                                draggable: true,
                            }}
                            geometry={[point.coordinates.lat, point.coordinates.lon]}
                        />
                    ))}
                </Map>
            </div>
        </YMaps>
    );
};

export default CustomMap;

export const getGeoInfo = async address =>
    fetch("https://ypalenov.ru/api/address_suggestions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
    }).then(res => res.json());

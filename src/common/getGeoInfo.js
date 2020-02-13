export const getGeoInfo = async address =>
    fetch("http://5.63.154.171/address_suggestions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
    }).then(res => res.json());

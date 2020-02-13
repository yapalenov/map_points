import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import uuid from "uuid/v4";

import { getGeoInfo } from "../../common/getGeoInfo";

import Suggestions from "../../components/Suggestions";
import Loader from "../../components/Loader";

import "./index.scss";

const Input = ({ addPoint, ymaps }) => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [allowSuggestions, setAllowSuggestions] = useState(false);
    const [load, setLoad] = useState(false);
    const [waitAddress, setWaitAddress] = useState(false);
    const [invalidAddress, setInvalidAddress] = useState(false);

    const addAddress = async ({ value }) => {
        setWaitAddress(true);
        const point = await getGeoInfo(value)
            .then(({ suggestions }) => ({ ...suggestions[0], id: uuid(), load: false }))
            .catch(e => setWaitAddress(false) || setLoad(false) || setInvalidAddress(true));
        if (point) addPoint(point);
        setWaitAddress(false);
    };
    const addPointHandler = point => {
        if (load) {
            setWaitAddress(true);
        } else if (inputValue && suggestions.length) {
            setInputValue("");
            setSuggestions([]);
            addAddress(point);
        } else {
            setInvalidAddress(true);
        }
    };

    const onChangeHandler = async e => {
        setInvalidAddress(false);
        setInputValue(e.target.value);
    };

    useEffect(() => {
        if (!ymaps) return;

        setLoad(true);
        const suggestionsRefreshTime = 0.2 * 1000;
        const timer = setTimeout(async () => {
            if (inputValue) {
                const suggestions = await ymaps.suggest(inputValue);
                setSuggestions(suggestions);
                if (suggestions.length === 0) return setWaitAddress(false) || setLoad(false) || setInvalidAddress(true);
                else setInvalidAddress(false);
                if (waitAddress) {
                    const point = suggestions[0];
                    setInputValue("");
                    setSuggestions([]);
                    addAddress(point);
                    setWaitAddress(false);
                }
            } else setSuggestions([]);
            setLoad(false);
        }, suggestionsRefreshTime);
        return () => clearTimeout(timer);
    }, [inputValue, waitAddress, ymaps]);

    return (
        <div className="address-input-group">
            <div className="address-input-field">
                <Form.Control
                    id="suggest"
                    type="text"
                    placeholder="Введите адрес"
                    value={inputValue}
                    onChange={onChangeHandler}
                    onFocus={() => setAllowSuggestions(true)}
                    onBlur={() => setAllowSuggestions(false)}
                    isInvalid={invalidAddress}
                    onKeyUp={e => e.keyCode === 13 && addPointHandler(suggestions[0])}
                />

                {allowSuggestions && <Suggestions suggestions={suggestions} addPointHandler={addPointHandler} />}
                {waitAddress && <Loader />}
            </div>
            <div className="add-button">
                <Button
                    disabled={invalidAddress || waitAddress}
                    className="ml-2"
                    variant="secondary"
                    onClick={() => addPointHandler(suggestions[0])}
                >
                    Добавить
                </Button>
                {invalidAddress && (
                    <div className="invalid-address-feedback">
                        <span>
                            Некорректный
                            <br />
                            адрес
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;

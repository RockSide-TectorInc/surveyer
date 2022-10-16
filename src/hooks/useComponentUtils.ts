import React, {useState} from 'react';

const useComponentUtils: () => [string, (value: (((prevState: string) => string) | string)) => void, (event: (React.SyntheticEvent | Event), reason?: string) => void, number, (value: (((prevState: number) => number) | number)) => void] = () => {
    const [message, setMessage] = useState<string>("");
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage("");
    }
    const [activeTab, setActiveTab] = React.useState(0);
    return [message, setMessage, handleClose, activeTab, setActiveTab];
};

export default useComponentUtils;
import React from 'react';
import './modalPage.scss';

const ModalPage = ({modalData}) => {
    let m={...modalData};
    console.log(m);
    return (
        <div id="modalPage">
            <h3>modal page</h3>
            <h4>ID: {m.Id}</h4>
            <h4>status: {JSON.stringify(m.status)}</h4>
            <h4>Checked: {JSON.stringify(m.checked)}</h4>
            <h4>{m.body}</h4>
        </div>
    );
};

export default ModalPage;
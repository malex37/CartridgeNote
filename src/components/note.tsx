import React, { useState, useEffect } from 'react';

export interface NoteProps {
    title: string;
    body: string;
}

export default (props: NoteProps) => {
    return <div className="note">
        <h1>{ props.title }</h1>
        <p>{ props.body }</p>
    </div>;
}
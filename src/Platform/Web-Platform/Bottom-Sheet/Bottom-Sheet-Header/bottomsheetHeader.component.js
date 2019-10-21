/**
 * Header for bottomsheet
 */

import React from "react";
import './bottomsheetHeader.component.scss';

/**
 * Bottomsheet Header to be used across the app
 */
export default function ({ heading, onClose }) {
    return (
        <div className="bottomsheet-heading">
            <span>{heading}</span>
            <i className="fa fa-times" aria-hidden="true" onClick={() => onClose ? onClose() : null}></i>
        </div>
    )
}


import React from 'react';
import { useDispatch } from 'react-redux';
import { hidePreview } from '../features/preview';


export default function ButtonTab({ id, imgURL, buttonContent, toggleTab }) {

    const disptach = useDispatch()

    const getColorById = (id) => {
        switch(id) {
            case 1:
                return 'text-orange-600';
            case 2:
                return 'text-blue-500';
            case 3:
                return 'text-yellow-300';
            default:
                return 'text-black';
        }
    };

    return (
        <button 
            className="flex items-center px-5 py-3 hover:bg-slate-600 focus:slate-600 outline-none" 
            onClick={() => {
                toggleTab(id)
            disptach(hidePreview())
        }}>
            <img src={imgURL} className="w-5" alt="" />
            <span className={`ml-3 ${getColorById(id)} text-md`}>{buttonContent}</span>
        </button>
    );
}

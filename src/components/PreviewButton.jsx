import showView from "../assets/view.svg";
import hideView from "../assets/hide.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../features/preview";

export default function PreviewButton() {

    const previewData = useSelector(state => state.preview)
    const disptach = useDispatch()
    return (

        <button
        onClick={() => disptach(togglePreview())}
        className="py-2 px-4 rounded border border-transparent bg-orange-600 flex mx-auto 
        items-center text-slate-900 
        hover:bg-slate-900 hover:border-orange-600 hover:text-orange-600"
        >
            <img
             className="w-5 mr-3" 
            src={previewData.preview ? hideView : showView} alt="" />
            <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
        </button>
    )
}
import { useDispatch } from "react-redux";
import { updateCode } from "../features/tabs";
export default function CodeTabs({ code, id }) {

    const dispatch = useDispatch()

    return (
        <textarea
            onChange={e => dispatch(updateCode({ id, value: e.target.value }))}
            value={code}
            className="bg-slate-900 text-green-500 
        text-xl p-8 block h-full w-full focus:outline-none resize-none"
            spellCheck="false">

        </textarea>
    )
}
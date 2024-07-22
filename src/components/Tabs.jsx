import ButtonTab from "./ButtonTab";
import CodeTabs from "./CodeTabs";
import { useSelector } from "react-redux";
import { useState } from "react";
import Preview from "./preview";


export default function Tabs() {

    const tabs = useSelector(state => state.tabs);
    const previewData = useSelector(state => state.preview);


    const [tabIndex, setTabIndex] = useState(tabs[0].id);

console.log(tabs);
    return (
        <div className="flex grow">
            <div className="flex flex-col w-[180px] shrink-0 text-orange-700 border-r border-slate-300">
                {tabs.map(tab => (
                    <ButtonTab
                        key={tab.id}
                        id={tab.id}
                        toggleTab={id => setTabIndex(id)}
                        imgURL={tab.imgURL}
                        buttonContent={tab.buttonContent}
                    />
                ))}
            </div>
            <div className="w-full grow relative">
                <CodeTabs 
                id={tabIndex}
                code={tabs.find(obj => obj.id === tabIndex).code}
                />
                {previewData.preview && <Preview/>}
               
            </div>
        </div>
    );
}

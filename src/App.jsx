import Tabs from "./components/Tabs";
import PreviewButton from "./components/PreviewButton";

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="px-4 py-4 border-b flex items-center">
        <h1 className="w-full text-orange-700 text-2xl">
          <span className="text-base text-orange-500">editor
          </span>Coding
        </h1>
        <div className="w-full">
          <PreviewButton/>
      </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2">
            <div className="w-[6px] h-[6px] bg-orange-700 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-orange-700 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-orange-700 rounded-full "></div>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  )
}
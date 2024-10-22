'use client'

import Image from "next/image";

export default function Home() {
  function test() {
    const theLabel = document.getElementById("test") as HTMLElement;
    const Label = document.createElement('label')
    Label.style.height = '40px'
    Label.style.border = '1px solid red'
    Label.classList.add('flex-none')
    // Label.innerText = 'test'
    Label.innerText = 'test'
    theLabel.appendChild(Label)
  }

  return (
    <>
      <div id="test" className="h-[500px] overflow-auto w-40 bg-blue-300 flex flex-col">

      </div>
      <button onClick={test}>添加</button>
    </>
  );
}

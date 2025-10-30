import './App.css'

function App() {

  return (
    <div className='flex-col items-center justify-items-center mt-8'>
      <div className='flex gap-2 items-center'>
        <a hidden href="https://lordicon.com/">Icons by Lordicon.com</a>
        <img src='webinar2.gif' width={"50px"} height={"50px"} className='rounded-full'/>
        <span className='text-2xl text-[#6aadff] font-semibold'>Webinar<span className='text-2xl text-white'>.gg</span></span>
      </div>
      <div className='mt-4 pt-18'>
        <h2 className='text-white font-semibold text-4xl'>Verify Your Age</h2>
      </div>
      <div className='mt-4 pt-12'>
        <p className='text-white text-sm'>Please confirm your birth year. This data will not be stored.</p>
      </div>
      <div className='mt-2'>
        <input type='text'  placeholder='Your birth year' className="w-full px-4 py-2 rounded-lg border border-[oklch(0.65_0.09_226.01)] 
               bg-[oklch(0.55_0.08_226.01)] text-white 
               placeholder-white/70 
               focus:outline-none focus:ring-2 focus:ring-[oklch(0.7_0.1_226.01)] 
               shadow-sm" />
      </div>
      <div className='mt-4'>
        <button className="w-full border border-[oklch(0.65_0.09_226.01)] bg-[oklch(0.55_0.08_226.01)] hover:bg-sky-600 text-white placeholder-white/70 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.7_0.1_226.01)] shadow-md transition duration-200 cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  )
}

export default App

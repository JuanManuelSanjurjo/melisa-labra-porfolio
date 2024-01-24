export const metadata = {
  title: 'Contact',
  description: 'Contact - Melisa Labra',
}


function Contact() {
  return (
    <div className='slideLeft m-auto flex flex-col justify-center items-start h-[95vh] w-72 gap-10 selection:bg-rose-200 tracking-widest'>
      <h1 className='font-bold text-xl'>Contact</h1>
      <h3>Instagram <a href="https://www.instagram.com/labrameli/" target="_blank">@melisa.labra</a></h3> 
      <h3>Upwork <a href="https://www.upwork.com/freelancers/~01761a5db1b10f6ffd" target="_blank">@melisa.labra</a></h3> 
      <h3>Instagram <a href="mailto:melisa.labra@outlook.com?Subject=Contact%20from%20web%20portfolio">melisa.labra@outlook.com</a></h3> 
    </div>
  )
}

export default Contact


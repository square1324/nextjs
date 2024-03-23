export default function Page() {
  return (
    <div className='m-20'>
      <h1 className='border border-black text-[18px] text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec ornare ligula. Integer nec est nec leo ullamcorper efficitur. Nunc bibendum est in
        odio porttitor, nec accumsan dui volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>

      <hr className='m-10' />
      <h1 className='text-[2rem] font-semibold italic tracking-tight underline'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec ornare ligula. Integer nec est nec leo ullamcorper efficitur. Nunc bibendum est in
        odio porttitor, nec accumsan dui volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>

      <hr className='m-10' />
      <h1 className='text-[20px] text-center text-rose-400'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec ornare ligula. Integer nec est nec leo ullamcorper efficitur. Nunc bibendum est in
        odio porttitor, nec accumsan dui volutpat. <span className='text-blue-500'>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit.
      </h1>

      <hr className='m-10' />
      <h1 className='text-[2rem] font-semibold underline decoration-solid'> CSS Font </h1>

      <hr className='m-10' />
      <h1 className='text-[2rem] font-semibold underline decoration-solid underline-offset-8'> CSS Font </h1>

      <hr className='m-10' />
      <h1 className='text-[2rem] font-semibold underline decoration-wavy underline-offset-[20px] decoration-rose-500'> CSS Font </h1>

      <hr className='m-10' />
      <h1 className='text-3xl text-[crimson]'> abcdefg </h1>
      <h1 className='text-3xl text-[crimson] uppercase'> abcdefg </h1>
      <h1 className='text-3xl text-[crimson] lowercase'> ABCDEFG </h1>
      <h1 className='text-3xl text-[crimson] capitalize'> abcdefg </h1>
      <h1 className='text-3xl text-[crimson] normal-case'> abcdefg </h1>

      <hr className='m-10' />
      <div className='border border-black w-[500px] truncate'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec ornare ligula. Integer nec est nec leo ullamcorper efficitur. Nunc bibendum est in
        odio porttitor, nec accumsan dui volutpat. <span className='text-blue-500'>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit.
      </div>

      <hr className='m-10' />
      <span className='inline-block border border-black w-[100px] align-top'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi? </span>
      <span className='inline-block border border-black w-[100px] align-middle'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse ipsa ipsam neque praesentium quisquam rem, saepe tenetur velit voluptatum!
      </span>
      <span className='inline-block border border-black w-[100px] align-bottom'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, adipisci aliquid consequuntur deserunt error fugiat, ipsam ipsum laborum mollitia
        nihil, nobis odio officia praesentium reprehenderit sequi vel! Ad amet atque deleniti et neque nulla, obcaecati odit sapiente tenetur voluptate.
      </span>

      <hr className='m-10' />
      <input className='block border outline-none' type='text' />
      <input className='block border outline-none' type='email' />
      <input className='block border outline-none' type='password' />
    </div>
  )
}

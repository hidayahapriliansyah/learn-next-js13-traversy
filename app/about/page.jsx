import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <Link href={'/about/team'}>About Team</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt omnis nulla fugiat, architecto labore eaque nemo? Iusto atque enim voluptatibus hic ratione expedita, provident iste suscipit quos impedit! Blanditiis sequi necessitatibus numquam distinctio iure ullam aliquam adipisci accusantium impedit quaerat, nam, rem hic tempore nisi velit provident illum exercitationem?</p>
    </div>
  )
}

export default AboutPage
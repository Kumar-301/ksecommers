import React from 'react'
import Maincontent from './Maincontent'
import Sidebar from './Sidebar'
import Slider from './Slider'

export default function Home() {
  return (
      <>
      <section id="slider">
		<div className="container">
			<div className="row">
				<Slider/>
			</div>
		</div>
	</section>
    <section>
		<div className="container">
			<div className="row">
                <Sidebar/>
                <Maincontent/>
            </div>
        </div>
    </section>
      </>
  )
}

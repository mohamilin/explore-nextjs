import Icon1 from '../../../public/MainIcon/icon1.png'
import Icon2 from '../../../public/MainIcon/icon2.png'
import Icon3 from '../../../public/MainIcon/icon3.png'
import Icon4 from '../../../public/MainIcon/icon4.png'
import Icon5 from '../../../public/MainIcon/icon5.png'
import Icon6 from '../../../public/MainIcon/icon6.png'
import Icon7 from '../../../public/MainIcon/icon7.png'
import Icon8 from '../../../public/MainIcon/icon8.png'
import Icon9 from '../../../public/MainIcon/icon9.png'
import Icon10 from '../../../public/MainIcon/icon10.png'


import Image from 'next/image'
import React from 'react'
import { Container } from '../../moleculs/UI/container'
import ContainerCategory from '../../moleculs/UI/container-category'

export default function MainFeature() {
    return (
     <section>
        <Container>
        <div>
          <ContainerCategory name={'Kategori'}/>

            {/* <section className="bg-white">
                <div className="container px-6  mx-auto">

                    <div className="grid grid-cols-2 gap-2 mt-8 xl:mt-2 xl:gap-5  md:grid-cols-5 xl:grid-cols-5">

                        <div className="flex flex-col items-center p-6 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon1}
                                    height={25}
                                    width={21}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">Tentang SantriHub</h2>

                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon2}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize  ">Info Kampus</h2>

                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon3}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize  ">Jalur Masuk</h2>

                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon4}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize  ">Beasiswa</h2>

                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon5}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">Pesantren</h2>


                        </div>

                        <div className="flex flex-col items-center p-1 space-y-3 text-center">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon6}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">Blog</h2>


                        </div>

                        <div className="flex flex-col items-center p-1 space-y-3 text-center">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon7}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">Event</h2>


                        </div>

                        <div className="flex flex-col items-center p-1 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon8}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">Kalender</h2>


                        </div>

                        <div className="flex flex-col items-center p-1 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon9}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">E-courses</h2>


                        </div>
                        <div className="flex flex-col items-center p-1 space-y-3 text-center ">
                            <span className="inline-block p-6 text-blue-500 bg-blue-100 rounded-full ">
                                <Image
                                    src={Icon10}
                                />
                            </span>

                            <h2 className=" font-semibold text-gray-700 capitalize ">Organisasi santri</h2>


                        </div>

                    </div>
                </div>
            </section > */}
        </div >
        </Container>
     </section>
    )
}

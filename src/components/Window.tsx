'use client'

import Close from '@/assets/closing-window.svg'
import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { useState } from 'react'
import Draggable from 'react-draggable'

export default function Window() {
    const [state, setState] = useState<true | false | 'load'>(true)
    function timeout() {
        setState('load')
        setTimeout(function () {
            setState(false)
        }, 300)
    }
    return (
        <Draggable handle='.handle'>
            <div
                className={cx(
                    !state ? 'hidden' : 'visible',
                    'h-[500px] w-[900px] bg-white border-4 border-black',
                )}
            >
                <div className='relative w-full py-1 border-b-2 border-black'>
                    <div className='w-full handle cursor-move'>
                        <hr className='h-[3px] my-[2px] bg-gray-800' />
                        <hr className='h-[3px] my-[2px] bg-gray-800' />
                        <hr className='h-[3px] my-[2px] bg-gray-800' />
                        <hr className='h-[3px] my-[2px] bg-gray-800' />
                        <hr className='h-[3px] my-[2px] bg-gray-800' />
                        <div className='absolute bg-white p-1 top-[2px] left-1/2 -translate-x-1/2 font-chicago'>
                            Window
                        </div>
                        <div className='absolute bg-white p-1 top-[2px] left-4 cursor-default'>
                            <div
                                className='h-6 w-6 border-2 border-black'
                                onClick={() => timeout()}
                            >
                                <Image
                                    src={Close}
                                    alt=''
                                    className={cx(
                                        state != 'load' ? 'hidden' : 'visible',
                                        'bg-black',
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

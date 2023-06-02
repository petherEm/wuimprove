"use client"

import React from 'react'
import { HiTemplate, HiUserCircle } from 'react-icons/hi'
import { AiFillWallet, AiFillStar } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'

import { useRouter } from 'next/navigation'

const MobFooter = () => {
  const router = useRouter()

  return (
    <footer className="sticky -bottom-1 bg-black text-slate-400">
      <hr className="h-2" />
      <div className="flex items-center justify-between px-5 py-2">
        <div
          onClick={() => router.push('/screens')}
          className="rounded-lg px-2 flex cursor-pointer flex-col items-center gap-2"
        >
          <HiTemplate className="text-2xl" />
          <p className="text-[10px] ">Dashboard</p>
        </div>
        <div
          onClick={() => router.push('/screens/mymoney')}
          className="flex cursor-pointer flex-col items-center hover:text-yellow-400"
        >
          <AiFillWallet className="text-2xl" />
          <p className="text-[10px]">Money</p>
        </div>
        <div
          onClick={() => router.push('/screens/sendmoney')}
          className="flex cursor-pointer flex-col items-center gap-2 hover:text-yellow-400"
        >
          <TbArrowsLeftRight className="text-2xl" />
          <p className="text-[10px]">Send</p>
        </div>
        <div className="flex cursor-pointer flex-col items-center gap-2 hover:text-yellow-400">
          <AiFillStar className="text-2xl" />
          <p className="text-[10px]">Rewards</p>
        </div>
        <div
          onClick={() => router.push('/screens/myprofile')}
          className="flex cursor-pointer flex-col items-center gap-2 hover:text-yellow-400"
        >
          <HiUserCircle className="text-2xl" />
          <p className="text-[10px]">Profile</p>
        </div>
      </div>
    </footer>
  )
}

export default MobFooter

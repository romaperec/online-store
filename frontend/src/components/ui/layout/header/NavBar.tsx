"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import { AuthInterface } from "@/interface";
import Link from "next/link";
import React from "react";

export default function NavBar({ setAuthChoose, setBuyerOrSeller }: AuthInterface) {
  const { isAuth, setIsAuth } = useAuthContext();

  return (
    <nav className='flex opacity-40 gap-4'>
      <button
        onClick={() => {
          setAuthChoose("registration");
          setBuyerOrSeller("seller");
        }}>
        Стать продавцом
      </button>
      <Link href='/wholesale'>Оптовые закупки</Link>
      <Link href='/certificates'>Подарочные сертификаты</Link>
      <Link href='/support'>Помощь</Link>
      <Link href='/pickup-points'>Пункты выдачи</Link>
      {isAuth && (
        <button
          onClick={() => {
            //!! logout
            setIsAuth(null);
            localStorage.removeItem("Auth");
          }}
          className='text-red-500 bg-transparent'>
          Выйти
        </button>
      )}
    </nav>
  );
}

// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Để dùng logo hoặc icon

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo hoặc Tên trang web */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/images/logo.png" // Đặt logo của bạn ở đây, ví dụ: một icon chân chó
              alt="Logo Xóm có thú cưng"
              width={40}
              height={40}
            />
            <span className="text-white text-2xl font-bold">Xóm có thú cưng</span>
          </div>
        </Link>

        {/* Các liên kết điều hướng */}
        <div className="space-x-6">
          <Link href="/">
            <span className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer text-lg font-medium">Trang chủ</span>
          </Link>
          <Link href="/pets">
            <span className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer text-lg font-medium">Thú cưng</span>
          </Link>
          <Link href="/add-pet">
            <span className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer text-lg font-medium">Đăng ký thú cưng</span>
          </Link>
          <Link href="/about">
            <span className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer text-lg font-medium">Giới thiệu</span>
          </Link>
          {/* Bạn có thể thêm các liên kết khác ở đây */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

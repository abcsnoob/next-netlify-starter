// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Xóm có thú cưng. Tất cả quyền được bảo lưu.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about">
            <span className="text-gray-300 hover:text-white cursor-pointer transition duration-300">Giới thiệu</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-300 hover:text-white cursor-pointer transition duration-300">Liên hệ</span>
          </Link>
          <Link href="/privacy-policy">
            <span className="text-gray-300 hover:text-white cursor-pointer transition duration-300">Chính sách bảo mật</span>
          </Link>
          {/* Thêm các liên kết mạng xã hội nếu có */}
        </div>
        <p className="text-gray-400 text-sm">Được xây dựng với Next.js và tình yêu dành cho thú cưng.</p>
      </div>
    </footer>
  );
};

export default Footer;

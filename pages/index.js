// pages/index.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';
import PetCard from '../components/PetCard';
import SearchBar from '../components/SearchBar';
import { mockPets } from '../data/pets';

const HomePage = ({ pets }) => {
  return (
    <Layout>
      <Head>
        <title>Xóm có thú cưng - Nơi kết nối những người yêu thú cưng</title>
        <meta name="description" content="Khám phá và kết nối với những người yêu thú cưng tại Xóm có thú cưng." />
        <link rel="icon" href="/favicon.ico"/> {/* <--- Đã sửa ở đây */}
      </Head>

      {/* Phần Banner/Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner-pet.jpg" // Đặt một ảnh banner đẹp trong public/images
          alt="Thú cưng đang vui chơi"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="z-0"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
            Chào mừng đến với <span className="text-yellow-400">Xóm có thú cưng</span>!
          </h1>
          <p className="text-xl mb-6">Nơi cộng đồng yêu động vật cùng chia sẻ và kết nối.</p>
          <div className="space-x-4">
            <Link href="/pets">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Xem tất cả thú cưng
              </button>
            </Link>
            <Link href="/add-pet">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Đăng ký thú cưng của bạn
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Phần Tìm kiếm nhanh */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tìm kiếm người bạn bốn chân của bạn</h2>
        <div className="max-w-xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* Phần Thú cưng nổi bật/mới nhất */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Những người bạn mới nhất</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Hiển thị một số thú cưng, ví dụ 8 con đầu tiên */}
            {pets.slice(0, 8).map((pet) => (
              <PetCard key={pet.id} {...pet} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/pets">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Xem thêm thú cưng khác
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Phần Giới thiệu về cộng đồng (tùy chọn) */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tại sao lại là Xóm có thú cưng?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Chúng tôi tạo ra một không gian ấm cúng để những người yêu thú cưng có thể kết nối, chia sẻ kinh nghiệm, tìm kiếm thông tin hữu ích và thậm chí tìm thấy những người bạn bốn chân mới.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dù bạn đang tìm kiếm một người bạn mới, cần lời khuyên về chăm sóc thú cưng, hay chỉ đơn giản là muốn chia sẻ khoảnh khắc đáng yêu của thú cưng nhà mình, "Xóm có thú cưng" luôn chào đón bạn!
            </p>
            <Link href="/about">
              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Tìm hiểu thêm về chúng tôi
              </button>
            </Link>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/community-pet.jpg" // Một ảnh khác về cộng đồng/thú cưng
              alt="Cộng đồng thú cưng"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

    </Layout>
  );
};

// Hàm getStaticProps để lấy dữ liệu tĩnh trong quá trình build
export async function getStaticProps() {
  return {
    props: {
      pets: mockPets,
    },
    revalidate: 60,
  };
}

export default HomePage;

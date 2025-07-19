// data/pets.js

export const mockPets = [
  {
    id: '1',
    name: 'Milo',
    species: 'Chó',
    breed: 'Poodle',
    age: 2,
    gender: 'Đực',
    description: 'Milo là một chú Poodle trắng rất năng động, thích chạy nhảy và chơi đùa với bóng. Cậu ấy rất thông minh và luôn tìm cách làm mọi người cười.',
    image: '/images/milo.jpg',
    ownerId: 'owner1'
  },
  {
    id: '2',
    name: 'Luna',
    species: 'Mèo',
    breed: 'Scottish Fold',
    age: 1,
    gender: 'Cái',
    description: 'Luna là một cô mèo Scottish Fold xinh đẹp với đôi tai cụp đặc trưng. Cô ấy rất hiền lành, thích được vuốt ve và nằm cuộn tròn trên lòng chủ.',
    image: '/images/luna.jpg',
    ownerId: 'owner2'
  },
  {
    id: '3',
    name: 'Rocky',
    species: 'Chó',
    breed: 'Golden Retriever',
    age: 3,
    gender: 'Đực',
    description: 'Rocky là một chú Golden Retriever trung thành và cực kỳ thân thiện. Anh ấy yêu trẻ con và luôn sẵn lòng làm bạn với bất cứ ai.',
    image: '/images/rocky.jpg',
    ownerId: 'owner1' // Chủ sở hữu của Milo cũng là chủ của Rocky
  },
  {
    id: '4',
    name: 'Kitty',
    species: 'Mèo',
    breed: 'Ba Tư',
    age: 4,
    gender: 'Cái',
    description: 'Kitty là một cô mèo Ba Tư quý phái, rất thích ngủ và nằm dài dưới ánh nắng mặt trời. Bộ lông dài của cô ấy cần được chăm sóc thường xuyên.',
    image: '/images/kitty.jpg',
    ownerId: 'owner3'
  },
  {
    id: '5',
    name: 'Max',
    species: 'Chó',
    breed: 'Labrador',
    age: 5,
    gender: 'Đực',
    description: 'Max là một chú Labrador đã lớn tuổi nhưng vẫn rất khỏe mạnh và yêu đời. Anh ấy là một người bạn tuyệt vời cho các hoạt động ngoài trời.',
    image: '/images/max.jpg',
    ownerId: 'owner4'
  },
  {
    id: '6',
    name: 'Shadow',
    species: 'Mèo',
    breed: 'Mèo đen ta',
    age: 2,
    gender: 'Đực',
    description: 'Shadow là một chú mèo đen bí ẩn nhưng cực kỳ tình cảm. Anh ấy thích khám phá mọi ngóc ngách trong nhà.',
    image: '/images/shadow.jpg',
    ownerId: 'owner3'
  },
  {
    id: '7',
    name: 'Daisy',
    species: 'Chó',
    breed: 'Beagle',
    age: 1,
    gender: 'Cái',
    description: 'Daisy là một cô Beagle tinh nghịch, luôn tràn đầy năng lượng. Cô ấy rất thích đánh hơi và theo dõi mọi thứ.',
    image: '/images/daisy.jpg',
    ownerId: 'owner5'
  },
  {
    id: '8',
    name: 'Oscar',
    species: 'Hamster',
    breed: 'Hamster Vàng',
    age: 0.5,
    gender: 'Đực',
    description: 'Oscar là một chú hamster nhỏ bé nhưng rất nhanh nhẹn. Anh ấy thích chạy trong bánh xe và cất thức ăn vào má.',
    image: '/images/oscar.jpg',
    ownerId: 'owner6'
  },
  {
    id: '9',
    name: 'Squishy',
    species: 'Cá cảnh',
    breed: 'Cá Vàng',
    age: 1,
    gender: 'Không xác định',
    description: 'Squishy là một chú cá vàng sống động, bơi lội duyên dáng trong bể. Rất dễ chăm sóc.',
    image: '/images/squishy.jpg',
    ownerId: 'owner7'
  },
  {
    id: '10',
    name: 'Tweety',
    species: 'Chim',
    breed: 'Vẹt Lovebird',
    age: 1.5,
    gender: 'Không xác định',
    description: 'Tweety là một chú vẹt Lovebird với bộ lông màu sắc rực rỡ. Cậu ấy rất thích tương tác và hót líu lo.',
    image: '/images/tweety.jpg',
    ownerId: 'owner8'
  },
];

export const mockOwners = [
  {
    id: 'owner1',
    name: 'Nguyễn Văn A',
    bio: 'Yêu chó hơn bất cứ điều gì! Đã nuôi Milo và Rocky từ khi chúng còn nhỏ.',
    contact: 'nguyenvana@example.com'
  },
  {
    id: 'owner2',
    name: 'Trần Thị B',
    bio: 'Fan cuồng của mèo. Luna là cô công chúa nhỏ của tôi.',
    contact: 'tranthib@example.com'
  },
  {
    id: 'owner3',
    name: 'Lê Văn C',
    bio: 'Yêu động vật nói chung, đặc biệt là các bé mèo lông dài và mèo đen.',
    contact: 'levanc@example.com'
  },
  {
    id: 'owner4',
    name: 'Phạm Thị D',
    bio: 'Thích các hoạt động ngoài trời cùng thú cưng. Max là người bạn đồng hành tuyệt vời.',
    contact: 'phamthid@example.com'
  },
  {
    id: 'owner5',
    name: 'Hoàng Văn E',
    bio: 'Thích thú cưng nhỏ gọn và năng động. Daisy là nguồn năng lượng của tôi.',
    contact: 'hoangvane@example.com'
  },
  {
    id: 'owner6',
    name: 'Đặng Thị G',
    bio: 'Yêu thích các loài gặm nhấm nhỏ bé. Oscar rất đáng yêu và dễ thương.',
    contact: 'dangthig@example.com'
  },
  {
    id: 'owner7',
    name: 'Bùi Văn H',
    bio: 'Chăm sóc bể cá là sở thích. Squishy là niềm tự hào của tôi.',
    contact: 'buivanh@example.com'
  },
  {
    id: 'owner8',
    name: 'Võ Thị K',
    bio: 'Yêu chim và các loài động vật có cánh. Tweety mang lại niềm vui cho cả gia đình.',
    contact: 'vothik@example.com'
  },
];

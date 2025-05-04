import Advertisement from './Advertisement';
import LatestPosts from './LatestPosts';
import MainThumbnail from './MainThumbnail';

function Main() {
  return (
    <main className="max-w-7xl w-full mx-auto pt-[24px] pb-[100px]">
      <MainThumbnail />

      <div className="w-full flex justify-center items-center mt-[144px] mb-[80px]">
        <Advertisement />
      </div>

      <LatestPosts posts={DUMMY_POSTS} />

      <div className="w-full flex justify-center items-center mt-[80px] mb-[100px]">
        <Advertisement />
      </div>
    </main>
  );
}

const DUMMY_POSTS = [
  {
    id: 1,
    title:
      '리액트 훅스 완벽 가이드: 함수형 컴포넌트에서 상태 관리와 사이드 이펙트를 효과적으로 다루는 방법',
    category: '프론트엔드',
    content:
      '리액트 훅스를 사용하면 함수형 컴포넌트에서도 상태 관리와 생명주기 기능을 사용할 수 있습니다. 이 글에서는 useState, useEffect, useContext 등 주요 훅의 사용법을 알아봅니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: '김개발',
    },
    createdAt: 'August 15, 2023',
  },
  {
    id: 2,
    title:
      '타입스크립트 초보자를 위한 실용적인 팁과 트릭: 인터페이스, 제네릭, 타입 추론을 마스터하는 종합 가이드',
    category: '프로그래밍',
    content:
      '타입스크립트를 처음 시작하는 개발자들을 위한 실용적인 팁과 트릭을 소개합니다. 인터페이스, 제네릭, 유니온 타입 등 핵심 개념을 쉽게 이해할 수 있습니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: '이코딩',
    },
    createdAt: 'August 10, 2023',
  },
  {
    id: 3,
    title:
      'Next.js로 SEO에 최적화된 고성능 블로그 구축하기: 정적 생성과 서버 사이드 렌더링의 완벽한 활용법',
    category: '웹개발',
    content:
      'Next.js를 활용하여 SEO에 최적화된 블로그를 구축하는 방법을 단계별로 알아봅니다. 정적 생성과 서버 사이드 렌더링의 장단점을 비교해봅니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/men/67.jpg',
      name: '박프론트',
    },
    createdAt: 'August 5, 2023',
  },
  {
    id: 4,
    title: 'GraphQL 실전 활용법: REST API의 한계를 뛰어넘는 효율적인 데이터 쿼리 및 관리 전략',
    category: '백엔드',
    content:
      'REST API의 한계를 넘어 GraphQL을 실무에 도입하는 방법을 소개합니다. Apollo Client와 Server를 활용한 실전 예제를 통해 GraphQL의 강력함을 경험해보세요.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/women/22.jpg',
      name: '최백엔드',
    },
    createdAt: 'July 28, 2023',
  },
  {
    id: 5,
    title:
      'CSS Grid 레이아웃 마스터하기: 복잡한 웹 디자인을 쉽게 구현하는 현대적 레이아웃 시스템의 모든 것',
    category: '디자인',
    content:
      'CSS Grid를 활용하여 복잡한 레이아웃을 쉽게 구현하는 방법을 알아봅니다. Flexbox와의 차이점과 실전에서 활용할 수 있는 팁을 제공합니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/women/76.jpg',
      name: '정디자인',
    },
    createdAt: 'July 20, 2023',
  },
  {
    id: 6,
    title:
      'Docker 컨테이너 관리 및 오케스트레이션 완벽 전략: Kubernetes와 함께하는 효율적인 배포 프로세스',
    category: 'DevOps',
    content:
      'Docker 컨테이너를 효율적으로 관리하고 운영하는 전략을 소개합니다. 컨테이너 오케스트레이션과 CI/CD 파이프라인 구축 방법을 알아봅니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: '한데브옵스',
    },
    createdAt: 'July 15, 2023',
  },
  {
    id: 7,
    title:
      '자바스크립트 비동기 프로그래밍의 진화: 콜백에서 Promise, async/await까지 마스터하는 완벽 가이드',
    category: '프론트엔드',
    content:
      'Promise, async/await, 그리고 RxJS를 활용한 비동기 프로그래밍 패턴을 소개합니다. 콜백 지옥을 탈출하고 가독성 높은 코드를 작성하는 방법을 알아봅니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/women/58.jpg',
      name: '윤자바스크립트',
    },
    createdAt: 'July 8, 2023',
  },
  {
    id: 8,
    title:
      'Node.js 성능 최적화 기법: 메모리 관리부터 서버 확장성까지 실무에서 바로 적용 가능한 고급 전략',
    category: '백엔드',
    content:
      'Node.js 애플리케이션의 성능을 최적화하는 다양한 기법을 살펴봅니다. 메모리 누수 방지와 서버 확장성 향상을 위한 실용적인 팁을 제공합니다.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/men/91.jpg',
      name: '조노드',
    },
    createdAt: 'July 1, 2023',
  },
  {
    id: 9,
    title:
      '사용자 경험(UX) 디자인 원칙과 실전 가이드: 사용성 테스트와 프로토타이핑을 통한 최적의 인터페이스 설계',
    category: '디자인',
    content:
      '웹 애플리케이션의 사용자 경험을 향상시키는 핵심 디자인 원칙과 패턴을 소개합니다. 사용성 테스트와 프로토타이핑 기법을 통해 더 나은 UX를 구현하세요.',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop',
    author: {
      profileSrc: 'https://randomuser.me/api/portraits/women/29.jpg',
      name: '신유엑스',
    },
    createdAt: 'June 25, 2023',
  },
];

export default Main;
